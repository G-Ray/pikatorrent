import 'dart:io';

import 'package:collection/collection.dart';
import 'package:flutter/material.dart';
import 'package:open_file/open_file.dart';
import 'package:path/path.dart';
import 'package:pikatorrent/engine/file.dart';
import 'package:pikatorrent/main.dart';
import 'package:pikatorrent/utils/device.dart';
import 'package:pikatorrent/utils/subtitles.dart';

// Torrent statuses
enum TorrentStatus {
  stopped,
  queuedToCheck,
  checking,
  queuedToDownload,
  downloading,
  queuedToSeed,
  seeding
}

class TorrentBase {
  final int id;
  final List<String>? labels;

  TorrentBase({required this.id, required this.labels});
}

// Torrent abstraction
abstract class Torrent extends TorrentBase {
  final String name;
  final double progress;
  final TorrentStatus status;
  final int size;
  final int rateDownload;
  final int rateUpload;
  final int downloadedEver;
  final int uploadedEver;
  final int eta;
  final int pieceCount;
  final List<bool> pieces;
  final int pieceSize;
  final String errorString;
  final String location;
  final bool isPrivate;
  final int addedDate;
  final String creator;
  final String comment;
  final List<File> files;
  final int peersConnected;
  final String magnetLink;
  final bool sequentialDownload;
  final DateTime doneDate;

  Torrent(
      {required super.id,
      required super.labels,
      required this.name,
      required this.progress,
      required this.status,
      required this.size,
      required this.rateDownload,
      required this.rateUpload,
      required this.downloadedEver,
      required this.uploadedEver,
      required this.eta,
      required this.pieces,
      required this.pieceSize,
      required this.errorString,
      required this.pieceCount,
      required this.location,
      required this.isPrivate,
      required this.addedDate,
      required this.comment,
      required this.creator,
      required this.files,
      required this.peersConnected,
      required this.magnetLink,
      required this.sequentialDownload,
      required this.doneDate});

  // Start the torrent
  start();

  // Pause the torrent
  stop();

  // Remove the torrent
  remove(bool withData);

  // Update torrent data
  Future update(TorrentBase torrent);

  Future toggleFileWanted(int fileIndex, bool wanted);

  Future toggleAllFilesWanted(bool wanted);

  Future setSequentialDownload(bool sequential);

  Future setSequentialDownloadFromPiece(int sequentialDownloadFromPiece);

  startStreaming(File file) async {
    debugPrint('starting streaming ${file.name}');
    // File already completed
    if (file.bytesCompleted == file.length) {
      // Do nothing if file is already completed.
      return;
    }

    await engine.saveTorrentsResumeStatus();

    // Be sure torrent is active
    start();

    final otherTorrents =
        (await engine.fetchTorrents()).where((t) => t.id != id);

    // Pause all other torrents
    for (final otherTorrent in otherTorrents) {
      otherTorrent.stop();
    }

    await toggleAllFilesWanted(false);
    final fileIndex = files.indexWhere((f) => f.name == file.name);
    // Want subtitles
    final externalSubtitles = getExternalSubtitles(file, this);
    for (final file in files) {
      if (externalSubtitles.firstWhereOrNull((f) => f.name == file.name) !=
          null) {
        await toggleFileWanted(fileIndex, true);
      }
    }
    await toggleFileWanted(fileIndex, true);
    await setSequentialDownload(true);
  }

  stopStreaming() async {
    debugPrint('stopping streaming');
    setSequentialDownload(false);
    await engine.restoreTorrentsResumeStatus();
  }

  hasLoadedPieces(List<int> piecesToTest) {
    return piecesToTest.every((p) => pieces[p]);
  }

  Future openFolder(BuildContext context) async {
    if (!isDesktop()) return;

    OpenResult result;
    String folderPath;

    if (files.length == 1) {
      folderPath = location;
    } else {
      var folderName = split(files.first.name).first;
      folderPath = join(location, folderName);
    }

    result = await OpenFile.open(
      folderPath,
    );

    if (result.type != ResultType.done) {
      var errorMessage = switch (result.type) {
        ResultType.noAppToOpen => 'No app to open',
        ResultType.fileNotFound => 'Not found',
        ResultType.permissionDenied => 'Permission denied',
        // It seems fileNotFound is not returned on linux
        ResultType.error => await Directory(folderPath).exists() == false
            ? 'Folder not found'
            : 'Unknown error',
        _ => 'Unknown error'
      };

      if (context.mounted) {
        ScaffoldMessenger.of(context).showSnackBar(SnackBar(
          content: Text('Error opening torrent location: $errorMessage.'),
          backgroundColor: Colors.orange,
        ));
      }
    }
  }
}
