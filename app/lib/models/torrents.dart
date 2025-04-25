import 'dart:async';

import 'package:flutter/material.dart';
import 'package:fuzzywuzzy/fuzzywuzzy.dart';
import 'package:pikatorrent/engine/engine.dart';
import 'package:pikatorrent/engine/torrent.dart';
import 'package:pikatorrent/main.dart';
import 'package:pikatorrent/storage/shared_preferences.dart';
import 'package:pikatorrent/utils/notifications.dart';

const refreshIntervalSeconds = 5;

enum Sort { addedDate, progress, size }

class Filters {
  Set<String> labels = {};

  Filters({required this.labels});

  bool get enabled {
    return labels.isNotEmpty;
  }

  Filters.copy(Filters other) : this(labels: Set.from(other.labels));

  addLabel(String label) {
    labels.add(label);
  }

  removeLabel(String label) {
    labels.remove(label);
  }
}

class TorrentsModel extends ChangeNotifier {
  // All loaded torrents
  List<Torrent> torrents = [];
  List<Torrent> displayedTorrents = []; // filtered & sorted
  // All torrents labels
  List<String> labels = [];
  String filterText = '';
  bool hasLoaded = false;
  Sort sort = Sort.addedDate;
  bool reverseSort = true;
  Filters filters = Filters(labels: {});
  late Timer _timer;

  TorrentsModel() {
    _init();
  }

  _init() async {
    await _loadSettings();
    fetchTorrents();
    // Indefinitely refresh
    _timer = Timer.periodic(const Duration(seconds: refreshIntervalSeconds),
        (timer) => fetchTorrents());
  }

  void stopTimer() {
    _timer.cancel();
  }

  _loadSettings() async {
    var sortName = await SharedPrefsStorage.getString('sort') ?? sort.name;
    sort =
        Sort.values.firstWhere((e) => e.name == sortName, orElse: () => sort);
    reverseSort =
        await SharedPrefsStorage.getBool('reverseSort') ?? reverseSort;
  }

  List<Torrent> _filterTorrentsName(List<Torrent> torrents) {
    return filterText.isNotEmpty
        ? extractAllSorted(
                query: filterText,
                choices: torrents.toList(),
                getter: (t) => t.name,
                cutoff: 60)
            .map((result) => torrents[result.index])
            .toList()
        : torrents;
  }

  List<Torrent> _filterTorrents(List<Torrent> torrents) {
    if (filters.labels.isEmpty) return torrents;

    return torrents.where((t) {
      return filters.labels.every((l) => t.labels!.contains(l));
    }).toList();
  }

  List<Torrent> _sortTorrents(List<Torrent> torrents) {
    List<Torrent> torrentsSorted = List.from(torrents);

    switch (sort) {
      case Sort.addedDate:
        torrentsSorted.sort((a, b) => a.addedDate.compareTo(b.addedDate));
      case Sort.progress:
        torrentsSorted.sort((a, b) => a.progress.compareTo(b.progress));
      case Sort.size:
        torrentsSorted.sort((a, b) => a.size.compareTo(b.size));
    }

    return reverseSort ? torrentsSorted.reversed.toList() : torrentsSorted;
  }

  Future<TorrentAddedResponse> addTorrent(
      String? filename, String? metainfo, String? downloadDir) async {
    return engine.addTorrent(filename, metainfo, downloadDir);
  }

  Future<void> fetchTorrents() async {
    DateTime now = DateTime.now();
    torrents = await engine.fetchTorrents();

    // Display notification for torrents completed during last refresh
    for (final torrent in torrents) {
      if (now.difference(torrent.doneDate).inSeconds < refreshIntervalSeconds) {
        showNotification(
            title: 'Download completed',
            body: torrent.name,
            notificationsDetailsType: NotificationsDetailsTypes
                .downloadsCompletedAndroidNotificationDetails);
      }
    }

    labels = torrents
        .fold<List<String>>(
            [],
            (previousValue, element) =>
                previousValue..addAll(element.labels ?? []))
        .toSet()
        .toList();

    // Remove filtered labels that does not exist anymore
    for (final label in filters.labels) {
      if (!labels.contains(label)) {
        filters.removeLabel(label);
      }
    }

    if (!hasLoaded) {
      hasLoaded = true;
    }

    processDisplayedTorrents();
  }

  processDisplayedTorrents() {
    displayedTorrents =
        _filterTorrents(_filterTorrentsName(_sortTorrents(torrents)));
    notifyListeners();
  }

  setFilterText(String value) {
    filterText = value;
    processDisplayedTorrents();
  }

  setSort(Sort value, bool reverse) async {
    SharedPrefsStorage.setString('sort', value.name);
    SharedPrefsStorage.setBool('reverseSort', reverse);
    sort = value;
    reverseSort = reverse;
    processDisplayedTorrents();
  }

  setFilters(Filters updatedFilters) async {
    filters = updatedFilters;
    processDisplayedTorrents();
  }
}
