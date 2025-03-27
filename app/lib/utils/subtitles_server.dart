import 'dart:async';
import 'dart:io';

import 'package:flutter/foundation.dart';
import 'package:mime/mime.dart';
import 'package:pikatorrent/engine/torrent.dart';
import 'package:path/path.dart' as p;

class SubtitlesServer {
  final Torrent torrent;
  late HttpServer _server;
  final Completer _serverReadyCompleter = Completer();

  SubtitlesServer({required this.torrent});

  void start() async {
    _server = await HttpServer.bind(InternetAddress.loopbackIPv4, 0);
    _serverReadyCompleter.complete();

    await _server.forEach((HttpRequest request) {
      handleRequest(request);
    });
  }

  void stop() async {
    await _server.close();
  }

  Future<String> getAddress() async {
    await _serverReadyCompleter.future;
    return 'http://${_server.address.host}:${_server.port}';
  }

  Future<void> handleRequest(HttpRequest request) async {
    final path = Uri.decodeComponent(request.uri.path);

    try {
      // /subtitle.vtt
      if (path.endsWith('.srt')) {
        await serveFile(request.response, path.substring(1));
      } else {
        request.response.statusCode = HttpStatus.notFound;
        request.response.write('404: Not Found');
      }
    } catch (e) {
      request.response.statusCode = HttpStatus.internalServerError;
      request.response.write('500: Internal Server Error');
      debugPrint('Error serving file: $e');
    }

    await request.response.close();
  }

  Future<void> serveFile(HttpResponse response, String filePath) async {
    final file = File(p.join(torrent.location, filePath));

    if (await file.exists()) {
      final mimeType = lookupMimeType(filePath) ?? ContentType.binary.mimeType;
      final contentType = ContentType.parse(mimeType);
      response.headers.contentType = contentType;
      await response.addStream(file.openRead());
    } else {
      response.statusCode = HttpStatus.notFound;
      response.write('404: Not Found');
    }
  }
}
