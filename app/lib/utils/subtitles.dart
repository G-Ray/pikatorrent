import 'dart:async';

import 'package:flutter/material.dart';
import 'package:pikatorrent/engine/file.dart';
import 'package:pikatorrent/engine/torrent.dart';
import 'package:pikatorrent/main.dart';

int countSlashesRegex(String text) {
  final regex = RegExp('/');
  return regex.allMatches(text).length;
}

String truncateFromLastSlash(String text) {
  int lastSlashIndex = text.lastIndexOf('/');
  if (lastSlashIndex != -1) {
    return text.substring(lastSlashIndex + 1);
  } else {
    return text;
  }
}

List<File> getExternalSubtitles(File file, Torrent torrent) {
  final slashesCount = countSlashesRegex(file.name);
  final externalSubtitlesFiles = torrent.files
      .where((f) =>
          slashesCount == countSlashesRegex(f.name) && f.name.endsWith('.srt'))
      .toList();

  return externalSubtitlesFiles;
}

downloadSubtitles(File file, Torrent torrent) async {
  final List<File> subtitles = getExternalSubtitles(file, torrent);
  for (var sub in subtitles) {
    await torrent.setSequentialDownloadFromPiece(sub.piecesRange.first);
    await _waitForFileComplete(torrent: torrent, fileName: sub.name);
  }
}

Future<void> _waitForFileComplete(
    {required Torrent torrent, required String fileName}) async {
  final waitForFileCompleter = Completer();

  final file = torrent.files.firstWhere((f) => f.name == fileName);

  void testFileComplete(Timer? timer) async {
    // Refresh torrent data
    final Torrent t = await engine.fetchTorrent(torrent.id);
    List<int> neededPieces = [];
    for (int i = file.piecesRange.first; i < file.piecesRange.last; i++) {
      neededPieces.add(i);
    }

    final isDownloaded = neededPieces.every((p) => t.pieces[p] == true);

    if (isDownloaded) {
      if (timer != null) {
        timer.cancel();
      }

      if (!waitForFileCompleter.isCompleted) {
        waitForFileCompleter.complete();
      }
    }
  }

  Timer.periodic(const Duration(seconds: 1), testFileComplete);
  testFileComplete(null);

  return waitForFileCompleter.future;
}

class ExternalSubtitle {
  final String url;
  final String name;

  ExternalSubtitle({required this.url, required this.name});
}
