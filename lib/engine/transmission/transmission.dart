import 'dart:convert';
import 'dart:io';

import 'package:flutter_libtransmission/flutter_libtransmission.dart'
    as flutter_libtransmission;
import 'package:path_provider/path_provider.dart';
import 'package:pikatorrent/engine/file.dart' as torrentFile;
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
import 'package:pikatorrent/engine/transmission/models/torrent_set_request.dart';

Future<Directory> getConfigDir() async {
  final configDir =
      path.join((await getApplicationSupportDirectory()).path, 'transmission');
  return Directory(configDir);
}

class TransmissionTorrent extends Torrent {
  TransmissionTorrent(
      {required super.id,
      super.name,
      super.progress,
      super.status,
      super.size,
      super.rateDownload,
      super.rateUpload,
      super.downloadedEver,
      super.uploadedEver,
      super.eta,
      super.pieceCount,
      super.pieceSize,
      super.errorString,
      super.addedDate,
      super.isPrivate,
      super.location,
      super.creator,
      super.comment,
      super.files,
      super.labels,
      super.peersConnected});

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

class TransmissionEngine implements Engine {
  @override
  void init() async {
    final configDir = await getConfigDir();
    flutter_libtransmission.initSession(configDir.path, 'transmission');
  }

  @override
  void dispose() {
    flutter_libtransmission.closeSession();
  }

  @override
  Future<TorrentAddedResponse> addTorrent(
      String filename, String? downloadDir) async {
    var torrentAddRequest = TorrentAddRequest(
        arguments: TorrentAddRequestArguments(
            filename: filename, downloadDir: downloadDir));
    var jsonResponse = await flutter_libtransmission
        .requestAsync(jsonEncode(torrentAddRequest));
    TorrentAddResponse response =
        TorrentAddResponse.fromJson(jsonDecode(jsonResponse));

    if (response.result != 'success') {
      throw TorrentAddError();
    }

    if (response.arguments.torrentDuplicate != null) {
      return TorrentAddedResponse.duplicated;
    }

    return TorrentAddedResponse.added;
  }

  @override
  Future<List<Torrent>> fetchTorrents() async {
    TorrentGetRequest torrentGetRequest = TorrentGetRequest(
        arguments: TorrentGetRequestArguments(fields: [
      TorrentField.id,
      TorrentField.name,
      TorrentField.percentDone,
      TorrentField.status,
      TorrentField.totalSize,
      TorrentField.rateDownload,
      TorrentField.rateUpload,
      TorrentField.labels,
      TorrentField.addedDate
    ]));
    String res = await flutter_libtransmission
        .requestAsync(jsonEncode(torrentGetRequest));

    final TorrentGetResponse decodedRes =
        TorrentGetResponse.fromJson(jsonDecode(res));

    return decodedRes.arguments.torrents
        .map((torrent) => TransmissionTorrent(
            id: torrent.id,
            name: torrent.name,
            progress: torrent.percentDone,
            status: torrent.status,
            size: torrent.totalSize,
            rateDownload: torrent.rateDownload,
            rateUpload: torrent.rateUpload,
            labels: torrent.labels,
            addedDate: torrent.addedDate))
        .toList();
  }

  @override
  Future<Torrent> fetchTorrentDetails(int id) async {
    TorrentGetRequest torrentGetRequest = TorrentGetRequest(
        arguments: TorrentGetRequestArguments(ids: [
      id
    ], fields: [
      TorrentField.id,
      TorrentField.name,
      TorrentField.percentDone,
      TorrentField.status,
      TorrentField.totalSize,
      TorrentField.rateDownload,
      TorrentField.rateUpload,
      TorrentField.downloadedEver,
      TorrentField.uploadedEver,
      TorrentField.eta,
      TorrentField.pieceSize,
      TorrentField.pieceCount,
      TorrentField.errorString,
      TorrentField.addedDate,
      TorrentField.isPrivate,
      TorrentField.downloadDir,
      TorrentField.comment,
      TorrentField.creator,
      TorrentField.files,
      TorrentField.filesStats,
      TorrentField.labels,
      TorrentField.peersConnected
    ]));

    String res = await flutter_libtransmission
        .requestAsync(jsonEncode(torrentGetRequest));

    final TorrentGetResponse decodedRes =
        TorrentGetResponse.fromJson(jsonDecode(res));

    return decodedRes.arguments.torrents
        .map((torrent) => TransmissionTorrent(
            id: torrent.id,
            name: torrent.name,
            progress: torrent.percentDone,
            status: torrent.status,
            size: torrent.totalSize,
            rateDownload: torrent.rateDownload,
            rateUpload: torrent.rateUpload,
            downloadedEver: torrent.downloadedEver,
            uploadedEver: torrent.uploadedEver,
            eta: torrent.eta,
            pieceCount: torrent.pieceCount,
            pieceSize: torrent.pieceSize,
            addedDate: torrent.addedDate,
            errorString: torrent.errorString,
            isPrivate: torrent.isPrivate,
            location: torrent.location,
            comment: torrent.comment,
            creator: torrent.creator,
            files: torrent.files
                ?.map((file) => torrentFile.File(
                    name: file.name,
                    length: file.length,
                    bytesCompleted: file.bytesCompleted,
                    wanted: true))
                .toList(),
            labels: torrent.labels,
            peersConnected: torrent.peersConnected))
        .toList()
        .first;
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
    // Close transmission session
    dispose();
    // Delete settings.json
    final settingsFilePath =
        path.join((await getConfigDir()).path, 'settings.json');
    File settingsFile = File(settingsFilePath);
    // Delete settings file
    settingsFile.deleteSync();
    // Re-init transmission
    init();
  }
}
