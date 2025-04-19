import 'package:flutter/material.dart';
import 'package:path/path.dart';
import 'package:path_provider/path_provider.dart';

import 'package:pikatorrent/engine/engine.dart';
import 'package:pikatorrent/engine/session.dart';
import 'package:pikatorrent/engine/transmission/models/torrent_set_location.dart';

initDefaultDownloadDir(Engine engine) async {
  var session = await engine.fetchSession();
  final documentsDir = await getApplicationDocumentsDirectory();
  final downloadDir = join(documentsDir.path, 'Downloads');

  debugPrint('Settings default directory ${downloadDir}');

  // Default download directory set by transmission is not correct.
  // See tr_getDefaultDownloadDir() in platform.cc
  if (session.downloadDir != downloadDir) {
    var sessionUpdate = SessionBase(downloadDir: downloadDir);
    await session.update(sessionUpdate);
  }

  // Set new location for existing torrents, as it changes with each app update on iOS
  // await engine.updateTorrents(TorrentSetRequestArguments(ids: [1], location: downloadDir));
  // torrent-set-location does not accept empty ids, so build a list of all ids
  final torrents = await engine.fetchTorrents();
  final torrentsIds = torrents.map((t) => t.id).toList();
  await engine.setTorrentsLocation(TorrentSetLocationArguments(ids: torrentsIds, location: downloadDir, move: false));
}
