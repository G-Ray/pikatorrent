import 'dart:async';

import 'package:flutter/material.dart';
import 'package:pikatorrent/engine/torrent.dart';
import 'package:pikatorrent/main.dart';

const refreshIntervalSeconds = 5;

class TorrentModel extends ChangeNotifier {
  Torrent? torrent;
  Timer? _timer;

  void fetchTorrent(int id) async {
    torrent = await engine.fetchTorrentDetails(id);
    notifyListeners();
  }

  void startTorrentFetching(int id) async {
    fetchTorrent(id);
    _timer = Timer.periodic(const Duration(seconds: refreshIntervalSeconds),
        (timer) {
      fetchTorrent(id);
    });
  }

  void stopTorrentFetching() async {
    torrent = null;
    _timer?.cancel();
    _timer = null;
  }
}
