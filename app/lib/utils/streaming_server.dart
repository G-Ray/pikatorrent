import 'dart:async';
import 'dart:io';

import 'package:mime/mime.dart';
import 'package:flutter/foundation.dart';
import 'package:pikatorrent/engine/torrent.dart';
import 'package:pikatorrent/engine/file.dart' as torrent_file;
import 'package:pikatorrent/main.dart';

class WaitingForPieceAbortedException implements Exception {}

class StreamingServer {
  late HttpServer _server;
  final Completer _serverReadyCompleter = Completer();

  String filePath;
  final int bufferSize;
  final Torrent torrent;
  final torrent_file.File torrentFile;

  Completer? _waitForPieceCompleter;
  Timer? _waitForPieceTimer;

  StreamingServer(
      {required this.filePath,
      required this.bufferSize,
      required this.torrent,
      required this.torrentFile});

  void start() async {
    _server = await HttpServer.bind(InternetAddress.loopbackIPv4, 0);
    _serverReadyCompleter.complete();
    debugPrint('starting streaming server on ${await getAddress()}');
    await for (HttpRequest request in _server) {
      handleRequest(request);
    }
  }

  void stop() async {
    cancelWaitingForPieces();
    await _server.close();
  }

  Future<String> getAddress() async {
    await _serverReadyCompleter.future;
    return 'http://${_server.address.host}:${_server.port}';
  }

  Future<void> handleRequest(HttpRequest request) async {
    try {
      if (request.method == 'GET') {
        await handleGetRequest(request);
      } else {
        request.response.statusCode = HttpStatus.methodNotAllowed;
        request.response.close();
      }
    } catch (e) {
      debugPrint('Error handling request: $e');
      request.response.statusCode = HttpStatus.internalServerError;
      request.response.close();
    }
  }

  Future<void> handleGetRequest(HttpRequest request) async {
    final file = File(filePath);

    if (!await file.exists()) {
      request.response.statusCode = HttpStatus.notFound;
      request.response.close();
      return;
    }

    final fileSize = await file.length();
    final rangeHeader = request.headers.value('range');

    if (rangeHeader != null) {
      await handleRangeRequest(request, file, fileSize, rangeHeader);
    } else {
      try {
        final lastPiece = torrentFile.piecesRange.last - 1;
        // Start downloading from the end to allow for smoother seeking,
        // as last piece is often needed
        await torrent.setSequentialDownloadFromPiece(lastPiece);
        await _waitForPieces(from: lastPiece, count: 1);
        await _waitForPieces(from: 0);
        await sendFullFile(request, file, fileSize);
      } catch (e) {
        debugPrint(e.toString());
        await request.response.close();
      }
    }
  }

  Future<void> sendFullFile(
      HttpRequest request, File file, int fileSize) async {
    final mimeType = lookupMimeType(filePath) ?? ContentType.binary.mimeType;
    request.response.headers.contentType = ContentType.parse(mimeType);
    request.response.headers.contentLength = fileSize;
    await file.openRead().pipe(request.response);
  }

  Future<void> handleRangeRequest(
      HttpRequest request, File file, int fileSize, String rangeHeader) async {
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

    try {
      debugPrint(
          'handleRangeRequest ${start} ${end + 1} $contentLength piece: ${piece} ${torrent.pieceSize}');

      await torrent.setSequentialDownloadFromPiece(piece);
      await _waitForPieces(from: piece);
      await file.openRead(start, end + 1).pipe(request.response);
    } catch (e) {
      debugPrint(e.toString());
      await request.response.close();
    }
  }

  _computeNeededPieces(int? from, int? count) {
    final List<int> neededPieces = [];
    final neededPiecesCount = count ?? (bufferSize / torrent.pieceSize).ceil();
    final firstPiece = from ?? torrentFile.piecesRange.first;
    final lastPiece = torrentFile.piecesRange.last;
    for (int i = 0; i < neededPiecesCount && firstPiece + i < lastPiece; i++) {
      neededPieces.add(firstPiece + i);
    }

    return neededPieces;
  }

  cancelWaitingForPieces() {
    // Cancel previous wait requests
    if (_waitForPieceTimer != null) {
      _waitForPieceTimer?.cancel();
      _waitForPieceTimer = null;
    }
    if (_waitForPieceCompleter != null) {
      _waitForPieceCompleter?.completeError(WaitingForPieceAbortedException);
      _waitForPieceCompleter = null;
    }
  }

  Future<void> _waitForPieces({int? from, int? count}) async {
    cancelWaitingForPieces();

    _waitForPieceCompleter = Completer();

    final neededPieces = _computeNeededPieces(from, count);

    void testPieces(Timer? timer) async {
      // Refresh torrent data
      final Torrent torrent = await engine.fetchTorrent(this.torrent.id);
      final hasLoaded = torrent.hasLoadedPieces(neededPieces);
      debugPrint('neededPieces ${neededPieces} hasLoaded ${hasLoaded}');

      if (hasLoaded) {
        if (timer != null) {
          timer.cancel();
        }
        _waitForPieceCompleter?.complete();
        _waitForPieceTimer = null;
        _waitForPieceCompleter = null;
      }
    }

    _waitForPieceTimer = Timer.periodic(const Duration(seconds: 1), testPieces);

    testPieces(_waitForPieceTimer);

    return _waitForPieceCompleter?.future;
  }
}
