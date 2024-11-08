import 'package:pikatorrent/engine/engine.dart';
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
  filesStats
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
      this.files);

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
            .toList();
}
