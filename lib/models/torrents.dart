import 'dart:async';

import 'package:flutter/material.dart';
import 'package:fuzzywuzzy/fuzzywuzzy.dart';
import 'package:pikatorrent/engine/torrent.dart';
import 'package:pikatorrent/main.dart';
import 'package:pikatorrent/storage/shared_preferences.dart';

const refreshIntervalSeconds = 5;

enum Sort { addedDate, progress, size }

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

  TorrentsModel() {
    _init();
  }

  _init() async {
    await _loadSettings();
    fetchTorrents();
    // Indefinitely refresh
    Timer.periodic(const Duration(seconds: refreshIntervalSeconds), (timer) {
      fetchTorrents();
    });
  }

  _loadSettings() async {
    var sortName = await SharedPrefsStorage.getString('sort') ?? sort.name;
    sort =
        Sort.values.firstWhere((e) => e.name == sortName, orElse: () => sort);
    reverseSort =
        await SharedPrefsStorage.getBool('reverseSort') ?? reverseSort;
  }

  List<Torrent> _filterTorrents(List<Torrent> torrents) {
    return filterText.isNotEmpty
        ? extractAllSorted(
                query: filterText,
                choices: torrents.toList(),
                getter: (t) => t.name!,
                cutoff: 60)
            .map((result) => torrents[result.index])
            .toList()
        : torrents;
  }

  List<Torrent> _sortTorrents(List<Torrent> torrents) {
    List<Torrent> torrentsSorted = List.from(torrents);

    switch (sort) {
      case Sort.addedDate:
        torrentsSorted.sort((a, b) => a.addedDate!.compareTo(b.addedDate!));
      case Sort.progress:
        torrentsSorted.sort((a, b) => a.progress!.compareTo(b.progress!));
      case Sort.size:
        torrentsSorted.sort((a, b) => a.size!.compareTo(b.size!));
    }

    return reverseSort ? torrentsSorted.reversed.toList() : torrentsSorted;
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

    processDisplayedTorrents();
  }

  processDisplayedTorrents() {
    displayedTorrents = _filterTorrents(_sortTorrents(torrents));
    notifyListeners();
  }

  setFilterText(String value) {
    filterText = value;
    processDisplayedTorrents();
  }

  void setSort(Sort value, bool reverse) async {
    SharedPrefsStorage.setString('sort', value.name);
    SharedPrefsStorage.setBool('reverseSort', reverse);
    sort = value;
    reverseSort = reverse;
    processDisplayedTorrents();
  }
}
