import 'dart:async';

import 'package:pikatorrent/engine/file.dart';
import 'package:pikatorrent/engine/torrent.dart';
import 'package:pikatorrent/main.dart';
import 'package:pikatorrent/utils/torrent_utils.dart';

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
    await torrent.setSequentialDownloadFromPiece(sub.beginPiece);
    await _waitForFileComplete(torrent: torrent, fileName: sub.name);
  }
}

Future<void> _waitForFileComplete(
    {required Torrent torrent, required String fileName}) async {
  final file = torrent.files.firstWhere((f) => f.name == fileName);
  final pieceCount = file.endPiece - file.beginPiece;
  await waitForPieces(torrent: torrent, file: file, pieceCount: pieceCount);
}

class ExternalSubtitle {
  final String url;
  final String name;

  ExternalSubtitle({required this.url, required this.name});
}
