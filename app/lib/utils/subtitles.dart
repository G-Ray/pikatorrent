import 'dart:async';

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

getExternalSubtitles(File file, Torrent torrent) {
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
    torrent.setSequentialDownloadFromPiece(sub.piecesRange.first);
    await _waitForFileComplete(torrent: torrent, fileName: file.name);
  }
}

Future<void> _waitForFileComplete(
    {required Torrent torrent, required String fileName}) async {
  final waitForFileCompleter = Completer();

  void testFileComplete(Timer? timer) async {
    // Refresh torrent data
    final Torrent t = await engine.fetchTorrent(torrent.id);
    final file = t.files.firstWhere((f) => f.name == fileName);
    final isDownloaded = file.bytesCompleted == file.length;

    if (isDownloaded) {
      if (timer != null) {
        timer.cancel();
        if (!waitForFileCompleter.isCompleted) {
          waitForFileCompleter.complete();
        }
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
