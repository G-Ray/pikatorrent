import 'package:flutter/material.dart';
import 'package:pikatorrent/engine/torrent.dart';
import 'package:pikatorrent/models/torrents.dart';
import 'package:pikatorrent/screens/torrents/sheets/torrent_details/tabs/details.dart';
import 'package:pikatorrent/screens/torrents/sheets/torrent_details/tabs/files.dart';
import 'package:pikatorrent/screens/torrents/sheets/torrent_details/tabs/tags.dart';
import 'package:provider/provider.dart';

class TorrentDetailsModalSheet extends StatelessWidget {
  final int id;

  const TorrentDetailsModalSheet({super.key, required this.id});

  @override
  Widget build(BuildContext context) {
    return Consumer<TorrentsModel>(builder: (context, torrentsModel, child) {
      var torrent =
          torrentsModel.torrents.firstWhere((element) => element.id == id);
      return TorrentDetailsModalSheetContent(torrent: torrent);
    });
  }
}

class TorrentDetailsModalSheetContent extends StatelessWidget {
  final Torrent torrent;

  const TorrentDetailsModalSheetContent({super.key, required this.torrent});

  @override
  Widget build(BuildContext context) {
    return DefaultTabController(
      length: 3, // Number of tabs
      child: Expanded(
        child: Material(
          child: Column(children: [
            const TabBar(
              tabs: [
                Tab(text: 'Files'),
                Tab(text: 'Tags'),
                Tab(text: 'Details'),
              ],
            ),
            Expanded(
              child: TabBarView(
                physics: const NeverScrollableScrollPhysics(),
                children: [
                  FilesTab(
                    torrent: torrent,
                    location: torrent.location,
                  ),
                  TagsTab(torrent: torrent),
                  DetailsTab(torrent: torrent)
                ],
              ),
            ),
          ]),
        ),
      ),
    );
  }
}
