import 'package:pikatorrent/engine/torrent.dart';

enum TorrentField {
  id,
  name,
  status,
  percentDone,
  totalSize,
  rateDownload,
  rateUpload,
  downloadedEver,
  uploadedEver,
  eta,
  pieceCount,
  pieceSize,
  errorString,
  addedDate,
  downloadDir,
  isPrivate,
  creator,
  comment,
  files,
  fileStats,
  labels,
  peersConnected
}

class TransmissionTorrentFile {
  final String name;
  final int length;
  final int bytesCompleted;

  TransmissionTorrentFile(this.name, this.length, this.bytesCompleted);

  TransmissionTorrentFile.fromJson(Map<String, dynamic> json)
      : name = json['name'],
        length = json['length'],
        bytesCompleted = json['bytesCompleted'];
}

class TransmissionTorrentFileStats {
  final bool wanted;

  TransmissionTorrentFileStats(this.wanted);

  TransmissionTorrentFileStats.fromJson(Map<String, dynamic> json)
      : wanted = json['wanted'];
}

class TransmissionTorrent {
  final int id;
  final String? name;
  final double? percentDone;
  final TorrentStatus? status;
  final int? totalSize;
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
  final List<TransmissionTorrentFile>? files;
  final List<TransmissionTorrentFileStats>? fileStats;
  final List<String>? labels;
  final int? peersConnected;

  const TransmissionTorrent(
      this.id,
      this.name,
      this.percentDone,
      this.status,
      this.totalSize,
      this.rateDownload,
      this.rateUpload,
      this.downloadedEver,
      this.uploadedEver,
      this.eta, // in seconds
      this.errorString,
      this.pieceSize,
      this.pieceCount,
      this.addedDate,
      this.isPrivate,
      this.location,
      this.comment,
      this.creator,
      this.files,
      this.labels,
      this.peersConnected,
      this.fileStats);

  TransmissionTorrent.fromJson(Map<String, dynamic> json)
      : id = json['id'],
        name = json['name'],
        percentDone = json['percentDone'] is int
            ? json['percentDone'].toDouble()
            : json['percentDone'],
        status = json['status'] != null
            ? TorrentStatus.values[json['status']]
            : null,
        totalSize = json['totalSize'],
        rateDownload = json['rateDownload'],
        rateUpload = json['rateUpload'],
        downloadedEver = json['downloadedEver'],
        uploadedEver = json['uploadedEver'],
        eta = json['eta'],
        pieceCount = json['pieceCount'],
        pieceSize = json['pieceSize'],
        errorString = json['errorString'],
        location = json['downloadDir'],
        isPrivate = json['isPrivate'],
        addedDate = json['addedDate'],
        creator = json['creator'],
        comment = json['comment'],
        files = json['files']
            ?.map<TransmissionTorrentFile>(
                (json) => TransmissionTorrentFile.fromJson(json))
            .toList(),
        fileStats = json['fileStats']
            ?.map<TransmissionTorrentFileStats>(
                (json) => TransmissionTorrentFileStats.fromJson(json))
            .toList(),
        labels =
            json['labels'] != null ? List<String>.from(json['labels']) : null,
        peersConnected = json['peersConnected'];
}
