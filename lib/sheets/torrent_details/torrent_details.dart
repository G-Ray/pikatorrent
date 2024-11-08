import 'dart:async';

import 'package:flutter/material.dart';
import 'package:pikatorrent/engine/torrent.dart';
import 'package:pikatorrent/main.dart';
import 'package:pikatorrent/sheets/torrent_details/details_tab.dart';
import 'package:pikatorrent/sheets/torrent_details/files_tab.dart';
import 'package:pikatorrent/utils/device.dart';

showTorrentDetailsDialog(BuildContext context, int id) {
  showDeviceSheet(
      context, 'Torrent details', TorrentDetailsModalSheet(id: id), true);
}

class TorrentDetailsModalSheet extends StatefulWidget {
  final int id;

  const TorrentDetailsModalSheet({super.key, required this.id});

  @override
  State<TorrentDetailsModalSheet> createState() => _TorrentDetailsModalSheet();
}

class _TorrentDetailsModalSheet extends State<TorrentDetailsModalSheet>
    with SingleTickerProviderStateMixin {
  Torrent? torrent;
  Timer? _timer;

  @override
  void initState() {
    super.initState();
    fetchTorrentDetails();
    _timer = Timer.periodic(const Duration(seconds: 5), (timer) {
      fetchTorrentDetails();
    });
  }

  @override
  void dispose() {
    _timer?.cancel();
    super.dispose();
  }

  fetchTorrentDetails() async {
    Torrent fetchedTorrent = await engine.fetchTorrentDetails(super.widget.id);

    setState(() {
      torrent = fetchedTorrent;
    });
  }

  @override
  Widget build(BuildContext context) {
    if (torrent == null) {
      return const Text('Loading...');
    }

    return DefaultTabController(
      length: 2, // Number of tabs
      child: Expanded(
        child: Material(
          child: Column(children: [
            const TabBar(
              tabs: [
                Tab(text: 'Files'),
                Tab(text: 'Details'),
              ],
            ),
            Expanded(
              child: TabBarView(
                children: [
                  FilesTab(
                    files: torrent!.files!,
                    location: torrent!.location!,
                  ),
                  DetailsTabDialog(torrent: torrent!)
                ],
              ),
            ),
          ]),
        ),
      ),
    );
  }
}
