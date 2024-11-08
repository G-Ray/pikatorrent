import 'package:pikatorrent/engine/file.dart';

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

// Torrent abstraction
abstract class Torrent {
  final int id;
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

  const Torrent(
      {required this.id,
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
        this.files});

  // Start the torrent
  start();

  // Pause the torrent
  stop();

  // Remove the torrent
  remove(bool withData);
}