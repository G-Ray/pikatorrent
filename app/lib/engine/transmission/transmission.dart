import 'dart:convert';
import 'dart:io';
import 'dart:isolate';

import 'package:flutter_libtransmission/flutter_libtransmission.dart'
    as flutter_libtransmission;
import 'package:path_provider/path_provider.dart';
import 'package:pikatorrent/engine/file.dart' as torrent_file;
import 'package:pikatorrent/engine/engine.dart';
import 'package:pikatorrent/engine/session.dart';
import 'package:pikatorrent/engine/torrent.dart';
import 'package:pikatorrent/engine/transmission/models/session_get_request.dart';
import 'package:pikatorrent/engine/transmission/models/session_get_response.dart';
import 'package:pikatorrent/engine/transmission/models/session_set_request.dart';
import 'package:pikatorrent/engine/transmission/models/torrent.dart';
import 'package:pikatorrent/engine/transmission/models/torrent_action_request.dart';
import 'package:pikatorrent/engine/transmission/models/torrent_add_request.dart';
import 'package:pikatorrent/engine/transmission/models/torrent_add_response.dart';
import 'package:pikatorrent/engine/transmission/models/torrent_get_request.dart';
import 'package:pikatorrent/engine/transmission/models/torrent_get_response.dart';
import 'package:pikatorrent/engine/transmission/models/torrent_remove_request.dart';
import 'package:path/path.dart' as path;
import 'package:pikatorrent/engine/transmission/models/torrent_set_location.dart';
import 'package:pikatorrent/engine/transmission/models/torrent_set_request.dart';
import 'package:pikatorrent/platforms/android/default_session.dart' as android;
import 'package:pikatorrent/platforms/ios/default_session.dart' as ios;

Future<Directory> getConfigDir() async {
  final configDir =
      path.join((await getApplicationSupportDirectory()).path, 'transmission');
  return Directory(configDir);
}

const torrentGetFields = [
  TorrentField.id,
  TorrentField.name,
  TorrentField.percentDone,
  TorrentField.status,
  TorrentField.totalSize,
  TorrentField.rateDownload,
  TorrentField.rateUpload,
  TorrentField.labels,
  TorrentField.addedDate,
  TorrentField.errorString,
  TorrentField.isPrivate,
  TorrentField.downloadDir,
  TorrentField.files,
  TorrentField.fileStats,
  TorrentField.downloadedEver,
  TorrentField.uploadedEver,
  TorrentField.eta,
  TorrentField.pieces,
  TorrentField.pieceSize,
  TorrentField.pieceCount,
  TorrentField.comment,
  TorrentField.creator,
  TorrentField.peersConnected,
  TorrentField.magnetLink,
  TorrentField.sequentialDownload,
  TorrentField.doneDate
];

TransmissionTorrent createTransmissionTorrentFromJson(
    TransmissionTorrentModel torrent) {
  return TransmissionTorrent(
      id: torrent.id,
      name: torrent.name,
      progress: torrent.percentDone,
      status: torrent.status,
      size: torrent.totalSize,
      rateDownload: torrent.rateDownload,
      rateUpload: torrent.rateUpload,
      labels: torrent.labels,
      addedDate: torrent.addedDate,
      errorString: torrent.errorString,
      magnetLink: torrent.magnetLink,
      isPrivate: torrent.isPrivate,
      location: torrent.location,
      files: torrent.files
          .asMap()
          .entries
          .map((entry) => torrent_file.File(
              name: entry.value.name,
              length: entry.value.length,
              bytesCompleted: entry.value.bytesCompleted,
              wanted: torrent.fileStats[entry.key].wanted,
              piecesRange: torrent.fileStats[entry.key].piecesRange))
          .toList(),
      downloadedEver: torrent.downloadedEver,
      uploadedEver: torrent.uploadedEver,
      eta: torrent.eta,
      pieces: torrent.pieces,
      pieceCount: torrent.pieceCount,
      pieceSize: torrent.pieceSize,
      comment: torrent.comment,
      creator: torrent.creator,
      peersConnected: torrent.peersConnected,
      sequentialDownload: torrent.sequentialDownload,
      doneDate: torrent.doneDate);
}

final TorrentGetRequest torrentGetRequest = TorrentGetRequest(
    arguments: TorrentGetRequestArguments(fields: [
  TorrentField.id,
  TorrentField.name,
  TorrentField.percentDone,
  TorrentField.status,
  TorrentField.totalSize,
  TorrentField.rateDownload,
  TorrentField.rateUpload,
  TorrentField.labels,
  TorrentField.addedDate,
  TorrentField.errorString,
  TorrentField.isPrivate,
  TorrentField.downloadDir,
  TorrentField.files,
  TorrentField.fileStats,
  TorrentField.downloadedEver,
  TorrentField.uploadedEver,
  TorrentField.eta,
  TorrentField.pieces,
  TorrentField.pieceSize,
  TorrentField.pieceCount,
  TorrentField.comment,
  TorrentField.creator,
  TorrentField.peersConnected,
  TorrentField.magnetLink,
  TorrentField.sequentialDownload,
  TorrentField.doneDate
]));

class TransmissionTorrent extends Torrent {
  TransmissionTorrent(
      {required super.id,
      required super.name,
      required super.progress,
      required super.status,
      required super.size,
      required super.rateDownload,
      required super.rateUpload,
      required super.downloadedEver,
      required super.uploadedEver,
      required super.eta,
      required super.pieces,
      required super.pieceCount,
      required super.pieceSize,
      required super.errorString,
      required super.addedDate,
      required super.isPrivate,
      required super.location,
      required super.creator,
      required super.comment,
      required super.files,
      required super.labels,
      required super.peersConnected,
      required super.magnetLink,
      required super.sequentialDownload,
      required super.doneDate});

  @override
  start() {
    var request = TorrentActionRequest(
        action: TorrentAction.start,
        arguments: TorrentActionRequestArguments(ids: [id]));
    flutter_libtransmission.requestAsync(jsonEncode(request));
  }

  @override
  stop() {
    var request = TorrentActionRequest(
        action: TorrentAction.stop,
        arguments: TorrentActionRequestArguments(ids: [id]));
    flutter_libtransmission.requestAsync(jsonEncode(request));
  }

  @override
  remove(bool withData) {
    var request = TorrentRemoveRequest(
        arguments: TorrentRemoveRequestArguments(
            ids: [id], deleteLocalData: withData));
    flutter_libtransmission.requestAsync(jsonEncode(request));
  }

  @override
  Future update(TorrentBase torrent) async {
    var request = TorrentSetRequest(
        arguments:
            TorrentSetRequestArguments(ids: [id], labels: torrent.labels));
    await flutter_libtransmission.requestAsync(jsonEncode(request));
  }

  @override
  Future toggleFileWanted(int fileIndex, bool wanted) async {
    var request = TorrentSetRequest(
        arguments: TorrentSetRequestArguments(
            ids: [id],
            filesWanted: wanted ? [fileIndex] : null,
            filesUnwanted: !wanted ? [fileIndex] : null));
    await flutter_libtransmission.requestAsync(jsonEncode(request));
  }

  @override
  Future toggleAllFilesWanted(bool wanted) async {
    final filesIndexesNotCompleted = files.indexed
        .where((indexedElement) =>
            indexedElement.$2.bytesCompleted != indexedElement.$2.length)
        .map((indexedElement) => indexedElement.$1)
        .toList();

    final request = TorrentSetRequest(
        arguments: wanted
            ? TorrentSetRequestArguments(
                ids: [id], filesWanted: filesIndexesNotCompleted)
            : TorrentSetRequestArguments(
                ids: [id], filesUnwanted: filesIndexesNotCompleted));
    await flutter_libtransmission.requestAsync(jsonEncode(request));
  }

  @override
  Future setSequentialDownload(bool sequential) async {
    var request = TorrentSetRequest(
        arguments: TorrentSetRequestArguments(
            ids: [id], sequentialDownload: sequential)); // FIXME

    await flutter_libtransmission.requestAsync(jsonEncode(request));
  }

  @override
  Future setSequentialDownloadFromPiece(int piece) async {
    print('setSequentialDownloadFromPiece ${piece}');
    var request = TorrentSetRequest(
        arguments: TorrentSetRequestArguments(
            ids: [id], sequentialDownloadFromPiece: piece));

    await flutter_libtransmission.requestAsync(jsonEncode(request));
  }
}

class TransmissionSession extends Session {
  TransmissionSession(
      {super.downloadDir, super.downloadQueueEnabled, super.downloadQueueSize});

  @override
  Future<void> update(SessionBase session) async {
    SessionSetRequest request = SessionSetRequest(
        arguments: SessionSetRequestArguments(
            downloadDir: session.downloadDir,
            downloadQueueSize: session.downloadQueueSize));

    await flutter_libtransmission.requestAsync(jsonEncode(request));
    flutter_libtransmission.saveSettings();
  }
}

class TransmissionEngine extends Engine {
  @override
  init() async {
    final configDir = await getConfigDir();
    flutter_libtransmission.initSession(configDir.path, 'transmission');
    if (Platform.isAndroid) {
      await android.initDefaultDownloadDir(this);
    }

    if (Platform.isIOS) {
      await ios.initDefaultDownloadDir(this);
      // Once done, restart session to reload torrents in error state
      await dispose();
      flutter_libtransmission.initSession(configDir.path, 'transmission');
    }
  }

  @override
  Future dispose() {
    return Isolate.run(() => flutter_libtransmission.closeSession());
  }

  @override
  Future<TorrentAddedResponse> addTorrent(
      String? filename, String? metainfo, String? downloadDir) async {
    var torrentAddRequest = TorrentAddRequest(
        arguments: TorrentAddRequestArguments(
            filename: filename, metainfo: metainfo, downloadDir: downloadDir));
    var jsonResponse = await flutter_libtransmission
        .requestAsync(jsonEncode(torrentAddRequest));
    TorrentAddResponse response =
        TorrentAddResponse.fromJson(jsonDecode(jsonResponse));

    if (response.result != 'success') {
      throw TorrentAddError();
    }

    if (response.arguments.torrentDuplicate) {
      return TorrentAddedResponse.duplicated;
    }

    return TorrentAddedResponse.added;
  }

  @override
  Future<List<Torrent>> fetchTorrents() async {
    String res = await flutter_libtransmission.requestAsync(jsonEncode(
        TorrentGetRequest(
            arguments: TorrentGetRequestArguments(fields: torrentGetFields))));

    final TorrentGetResponse decodedRes =
        TorrentGetResponse.fromJson(jsonDecode(res));

    return decodedRes.arguments.torrents
        .map((torrent) => createTransmissionTorrentFromJson(torrent))
        .toList();
  }

  @override
  Future<Torrent> fetchTorrent(int id) async {
    String res = await flutter_libtransmission.requestAsync(jsonEncode(
        TorrentGetRequest(
            arguments: TorrentGetRequestArguments(
                ids: [id], fields: torrentGetFields))));

    final TorrentGetResponse decodedRes =
        TorrentGetResponse.fromJson(jsonDecode(res));

    return createTransmissionTorrentFromJson(
        decodedRes.arguments.torrents.first);
  }

  @override
  Future<Session> fetchSession() async {
    SessionGetRequest sessionGetRequest = SessionGetRequest(
        arguments: SessionGetRequestArguments(fields: [
      SessionField.downloadDir,
      SessionField.downloadQueueEnabled,
      SessionField.downloadQueueSize
    ]));
    String res = await flutter_libtransmission
        .requestAsync(jsonEncode(sessionGetRequest));

    final SessionGetResponse decodedRes =
        SessionGetResponse.fromJson(jsonDecode(res));

    return TransmissionSession(
        downloadDir: decodedRes.arguments.downloadDir,
        downloadQueueEnabled: decodedRes.arguments.downloadQueueEnabled,
        downloadQueueSize: decodedRes.arguments.downloadQueueSize);
  }

  @override
  Future resetSettings() async {
    flutter_libtransmission.resetSettings();
    if (Platform.isAndroid) {
      await android.initDefaultDownloadDir(this);
    }
    if (Platform.isIOS) {
      await ios.initDefaultDownloadDir(this);
    }
  }

  @override
  Future setTorrentsLocation(
      TorrentSetLocationArguments torrentSetLocationArguments) async {
    final request =
        TorrentSetLocationRequest(arguments: torrentSetLocationArguments);
    await flutter_libtransmission.requestAsync(jsonEncode(request));
  }
}
