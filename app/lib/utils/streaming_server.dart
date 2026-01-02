import 'dart:async';
import 'dart:io';

import 'package:async/async.dart';

import 'package:mime/mime.dart';
import 'package:flutter/foundation.dart';
import 'package:pikatorrent/engine/torrent.dart';
import 'package:pikatorrent/engine/file.dart' as torrent_file;
import 'package:pikatorrent/utils/torrent_utils.dart';

/// Server to stream a file
class StreamingServer {
  late HttpServer _server;
  final Completer _serverReadyCompleter = Completer();

  String filePath;
  final int bufferSize;
  final Torrent torrent;
  final torrent_file.File torrentFile;
  late File _file;

  CancelableOperation? _cancelableOperation;

  StreamingServer(
      {required this.filePath,
      required this.bufferSize,
      required this.torrent,
      required this.torrentFile});

  void start() async {
    _file = File(filePath);
    _server = await HttpServer.bind(InternetAddress.loopbackIPv4, 0);
    _serverReadyCompleter.complete();
    debugPrint(
        'streaming_server: starting streaming server on ${await getAddress()}');

    await for (HttpRequest request in _server) {
      // Cancel the previous request
      debugPrint('streaming_server: cancel previous request...');
      await _cancelableOperation?.cancel();
      final completer = CancelableCompleter();

      // Create new cancelable request
      _cancelableOperation = CancelableOperation.fromFuture(
        _handleRequest(request, completer),
        onCancel: () {
          debugPrint('Previous request cancelled.');
          completer.operation.cancel();
        },
      );
    }
  }

  void stop() async {
    debugPrint('streaming_server: stop');
    await _cancelableOperation?.cancel();
    await _server.close();
  }

  void cancelRequest() {
    _cancelableOperation?.cancel();
  }

  Future<String> getAddress() async {
    await _serverReadyCompleter.future;
    return 'http://${_server.address.host}:${_server.port}';
  }

  Future<void> _handleRequest(
      HttpRequest request, CancelableCompleter cancelableCompleter) async {
    try {
      if (request.method == 'GET') {
        await _handleGetRequest(request, cancelableCompleter);
      } else {
        request.response.statusCode = HttpStatus.methodNotAllowed;
        request.response.close();
      }
    } on CancellationException {
      debugPrint('streaming_server: Request cancelled');
    } catch (e) {
      debugPrint("streaming_server: Error processing request: $e");
      request.response.statusCode = HttpStatus.internalServerError;
    } finally {
      await request.response.close();
      cancelableCompleter.complete();
    }
  }

  Future<void> _handleGetRequest(
      HttpRequest request, CancelableCompleter cancelableCompleter) async {
    // Wait for at least first piece
    debugPrint('streaming_server: _handleGetRequest');
    await _waitForPieces(
        from: torrentFile.beginPiece,
        count: 1,
        cancelableCompleter: cancelableCompleter);
    final fileSize = torrentFile.length;
    final rangeHeader = request.headers.value('range');

    if (rangeHeader != null) {
      await _handleRangeRequest(
          request, fileSize, rangeHeader, cancelableCompleter);
    } else {
      await _sendFullFile(request, fileSize, cancelableCompleter);
    }
  }

  Future<void> _sendFullFile(HttpRequest request, int fileSize,
      CancelableCompleter cancelableCompleter) async {
    debugPrint('streaming_server: _sendFullFile');
    final mimeType = lookupMimeType(filePath) ?? ContentType.binary.mimeType;
    request.response.headers.contentType = ContentType.parse(mimeType);
    request.response.headers.contentLength = fileSize;

    await _pipeFileRangeInBlocks(_file, request.response, 0, fileSize - 1,
        torrent.pieceSize, cancelableCompleter);
  }

  Future<void> _handleRangeRequest(HttpRequest request, int fileSize,
      String rangeHeader, CancelableCompleter cancelableCompleter) async {
    debugPrint('streaming_server: _handleRangeRequest');
    final rangeRegex = RegExp(r'bytes=(\d*)-(\d*)');
    final match = rangeRegex.firstMatch(rangeHeader);

    if (match == null) {
      request.response.statusCode = HttpStatus.badRequest;
      request.response.close();
      return;
    }

    final startStr = match.group(1);
    final endStr = match.group(2);

    int start = 0;
    int end = fileSize - 1;

    if (startStr != null && startStr.isNotEmpty) {
      start = int.parse(startStr);
    }

    if (endStr != null && endStr.isNotEmpty) {
      end = int.parse(endStr);
    }

    if (start < 0 || end >= fileSize || start > end) {
      request.response.statusCode = HttpStatus.requestedRangeNotSatisfiable;
      request.response.headers.set('Content-Range', 'bytes */$fileSize');
      request.response.close();
      return;
    }

    final contentLength = end - start + 1;

    request.response.statusCode = HttpStatus.partialContent;
    final mimeType = lookupMimeType(filePath) ?? ContentType.binary.mimeType;
    request.response.headers.contentType = ContentType.parse(mimeType);
    request.response.headers.contentLength = contentLength;
    request.response.headers
        .set('Content-Range', 'bytes $start-$end/$fileSize');

    final piece = (start / torrent.pieceSize).floor();

    debugPrint(
        'handleRangeRequest $start ${end + 1} $contentLength piece: $piece ${torrent.pieceSize}');

    await torrent.setSequentialDownloadFromPiece(piece);
    await _pipeFileRangeInBlocks(_file, request.response, start, end,
        torrent.pieceSize, cancelableCompleter);
  }

  List<int> _computeNeededPieces(int? from, int? count) {
    final List<int> neededPieces = [];
    final neededPiecesCount = count ?? (bufferSize / torrent.pieceSize).ceil();
    final firstPiece = from ?? torrentFile.beginPiece;
    final lastPiece = torrentFile.endPiece;
    for (int i = 0; i < neededPiecesCount && firstPiece + i < lastPiece; i++) {
      neededPieces.add(firstPiece + i);
    }

    return neededPieces;
  }

  Future<void> _waitForPieces(
      {int? from, int? count, CancelableCompleter? cancelableCompleter}) async {
    final neededPieces = _computeNeededPieces(from, count);
    debugPrint('streaming_server: neededPieces $neededPieces');

    await waitForPiecesList(
      torrent: torrent,
      neededPieces: neededPieces,
      onCancelled: cancelableCompleter != null
          ? () {
              if (cancelableCompleter.isCanceled) {
                debugPrint('streaming_server: cancel throw');
                return true;
              }
              return false;
            }
          : null,
    );
  }

  Future<void> _pipeFileRangeInBlocks(
      File file,
      HttpResponse response,
      int start,
      int end,
      int blockSize,
      CancelableCompleter cancelableCompleter) async {
    debugPrint(
        'streaming_server: _pipeFileRangeInBlocks start: $start end: $end');

    int currentStart = start;
    while (currentStart <= end) {
      if (cancelableCompleter.isCanceled) {
        debugPrint('streaming_server: _pipeFileRangeInBlocks isCanceled !!!');
        throw CancellationException();
      }

      int currentEnd = currentStart + blockSize - 1;
      if (currentEnd > end) {
        currentEnd = end;
      }

      final piece = (currentStart / torrent.pieceSize).floor();
      await _waitForPieces(
          from: piece, cancelableCompleter: cancelableCompleter);
      debugPrint(
          'streaming_server: reading piece: $piece start: $start end: $end');
      final readStream = file.openRead(currentStart, currentEnd + 1);

      await for (final chunk in readStream) {
        response.add(chunk);
        await response.flush();
      }

      currentStart = currentEnd + 1;
    }

    await response.close();
  }
}
