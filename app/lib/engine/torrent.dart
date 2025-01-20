import 'dart:io';

import 'package:flutter/material.dart';
import 'package:open_file/open_file.dart';
import 'package:path/path.dart';
import 'package:pikatorrent/engine/file.dart';
import 'package:pikatorrent/utils/device.dart';

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

  TorrentBase({required this.id, this.labels});
}

// Torrent abstraction
abstract class Torrent extends TorrentBase {
  final String? name;
  final double? progress;
  final TorrentStatus? status;
  final int? size;
  final int? rateDownload;
  final int? rateUpload;
  final int? downloadedEver;
  final int? uploadedEver;
  final int? eta;
  final int? pieceCount;
  final int? pieceSize;
  final String? errorString;
  final String? location;
  final bool? isPrivate;
  final int? addedDate;
  final String? creator;
  final String? comment;
  final List<File>? files;
  final int? peersConnected;
  final String? magnetLink;

  Torrent(
      {required super.id,
      super.labels,
      this.name,
      this.progress,
      this.status,
      this.size,
      this.rateDownload,
      this.rateUpload,
      this.downloadedEver,
      this.uploadedEver,
      this.eta,
      this.pieceSize,
      this.errorString,
      this.pieceCount,
      this.location,
      this.isPrivate,
      this.addedDate,
      this.comment,
      this.creator,
      this.files,
      this.peersConnected,
      this.magnetLink});

  // Start the torrent
  start();

  // Pause the torrent
  stop();

  // Remove the torrent
  remove(bool withData);

  // Update torrent data
  Future update(TorrentBase torrent);

  Future toggleFileWanted(int fileIndex, bool wanted);

  openFolder(BuildContext context) async {
    if (!isDesktop()) return;
    if (files == null) return;
    if (location == null) return;

    OpenResult result;
    String folderPath;

    if (files!.length == 1) {
      folderPath = location!;
    } else {
      var folderName = split(files!.first.name).first;
      folderPath = join(location!, folderName);
    }

    result = await OpenFile.open(
      folderPath,
    );

    if (result.type != ResultType.done && context.mounted) {
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

      ScaffoldMessenger.of(context).showSnackBar(SnackBar(
        content: Text('Error opening torrent location: $errorMessage.'),
        backgroundColor: Colors.orange,
      ));
    }
  }
}
