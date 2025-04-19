import 'dart:convert';
import 'dart:io';

import 'package:flutter/foundation.dart';
import 'package:path_provider/path_provider.dart';
import 'package:pikatorrent/engine/models/torrents_resume_status.dart';
import 'package:pikatorrent/engine/session.dart';
import 'package:pikatorrent/engine/torrent.dart';
import 'package:path/path.dart' as path;
import 'package:pikatorrent/engine/transmission/models/torrent_set_location.dart';

enum TorrentAddedResponse { added, duplicated }

class TorrentAddError extends Error {}

Future<String> getTorrentsStatusFilePath() async {
  return path.join((await getApplicationSupportDirectory()).path,
      'torrents_resume_status.json');
}

/// BitTorrent engine abstraction.
abstract class Engine {
  // Initialise the engine
  Future init();

  // Dispose the engine
  Future dispose();

  // Add a torrent
  Future<TorrentAddedResponse> addTorrent(
      String? filename, String? metainfo, String? downloadDir);

  // Fetch all torrents
  Future<List<Torrent>> fetchTorrents();

  Future<Torrent> fetchTorrent(int id);

  // Fetch session information (e.g. default download directory)
  Future<Session> fetchSession();

  // Reset torrents engine settings
  Future resetSettings();

  Future saveTorrentsResumeStatus() async {
    final torrents = await fetchTorrents();
    final filePath = await getTorrentsStatusFilePath();
    final file = File(filePath);
    final torrentResumeStatus = TorrentsResumeStatus.fromTorrents(torrents);
    debugPrint(
        'torrentResumeStatus ${torrentResumeStatus.toJson().toString()}');
    await file.writeAsString(jsonEncode(torrentResumeStatus.toJson()));
  }

  Future setTorrentsLocation(TorrentSetLocationArguments torrentSetLocationArguments);

  Future restoreTorrentsResumeStatus() async {
    try {
      final filePath = await getTorrentsStatusFilePath();
      final file = File(filePath);
      final jsonString = await File(filePath).readAsString();
      final torrentResumeStatus =
          TorrentsResumeStatus.fromJson(jsonDecode(jsonString));

      final torrents = await fetchTorrents();
      for (final torrentResumeStatus in torrentResumeStatus.torrents) {
        final torrentInstance =
            torrents.firstWhere((t) => t.name == torrentResumeStatus.name);

        if (torrentResumeStatus.status == TorrentResumeState.started) {
          torrentInstance.start();
        }

        // Quit sequential download mode
        if (torrentInstance.sequentialDownload) {
          torrentInstance.setSequentialDownloadFromPiece(0);
          torrentInstance.setSequentialDownload(false);
        }

        for (final (index, fileResumeStatus)
            in torrentResumeStatus.files.indexed) {
          if (fileResumeStatus &&
              torrentInstance.files[index].wanted == false) {
            torrentInstance.toggleFileWanted(index, true);
          }
        }
      }

      await file.delete();
    } catch (e) {
      debugPrint(e.toString());
    }
  }
}
