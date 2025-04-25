import 'dart:convert';

import 'package:pikatorrent/engine/torrent.dart';
import 'package:pikatorrent/utils/bitfield.dart';

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
  pieces,
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
  peersConnected,
  magnetLink,
  sequentialDownload, 
  doneDate
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
  final List<int> piecesRange;

  TransmissionTorrentFileStats(this.wanted, this.piecesRange);

  TransmissionTorrentFileStats.fromJson(Map<String, dynamic> json)
      : wanted = json['wanted'],
        piecesRange = List<int>.from(json['piecesRange']);
}

class TransmissionTorrentModel {
  final int id;
  final String name;
  final double percentDone;
  final TorrentStatus status;
  final int totalSize;
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
  final List<TransmissionTorrentFile> files;
  final List<TransmissionTorrentFileStats> fileStats;
  final List<String> labels;
  final int peersConnected;
  final String magnetLink;
  final bool sequentialDownload;
  final DateTime doneDate;

  const TransmissionTorrentModel(
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
      this.pieces,
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
      this.fileStats,
      this.magnetLink,
      this.sequentialDownload, this.doneDate);

  TransmissionTorrentModel.fromJson(Map<String, dynamic> json)
      : id = json['id'],
        name = json['name'],
        percentDone = json['percentDone'] is int
            ? json['percentDone'].toDouble()
            : json['percentDone'],
        status = TorrentStatus.values[json['status']],
        totalSize = json['totalSize'],
        rateDownload = json['rateDownload'],
        rateUpload = json['rateUpload'],
        downloadedEver = json['downloadedEver'],
        uploadedEver = json['uploadedEver'],
        eta = json['eta'],
        pieces = convertBitfieldToBoolList(
            base64Decode(json['pieces']), json['pieceCount']),
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
        labels = List<String>.from(json['labels']),
        peersConnected = json['peersConnected'],
        magnetLink = json['magnetLink'],
        sequentialDownload = json['sequentialDownload'] as bool,
        doneDate = DateTime.fromMillisecondsSinceEpoch(json['doneDate'] * 1000);
}
