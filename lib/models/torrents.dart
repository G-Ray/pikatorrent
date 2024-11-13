import 'dart:async';

import 'package:flutter/material.dart';
import 'package:pikatorrent/engine/torrent.dart';
import 'package:pikatorrent/main.dart';

const refreshIntervalSeconds = 5;

class TorrentsModel extends ChangeNotifier {
  List<Torrent> torrents = [];

  // All torrents labels
  List<String> labels = [];

  bool hasLoaded = false;

  TorrentsModel() {
    fetchTorrents();
    // Indefinitely refresh
    Timer.periodic(const Duration(seconds: refreshIntervalSeconds), (timer) {
      fetchTorrents();
    });
  }

  Future<void> fetchTorrents() async {
    torrents = await engine.fetchTorrents();
    labels = torrents
        .fold<List<String>>(
            [],
            (previousValue, element) =>
                previousValue..addAll(element.labels ?? []))
        .toSet()
        .toList();

    if (!hasLoaded) {
      hasLoaded = true;
    }

    notifyListeners();
  }
}
