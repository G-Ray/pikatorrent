import 'package:flutter/material.dart';
import 'package:pikatorrent/screens/torrents/sheets/torrent_details/models/torrent.dart';
import 'package:pikatorrent/screens/torrents/sheets/torrent_details/tabs/details.dart';
import 'package:pikatorrent/screens/torrents/sheets/torrent_details/tabs/files.dart';
import 'package:pikatorrent/screens/torrents/sheets/torrent_details/tabs/labels.dart';
import 'package:provider/provider.dart';

class TorrentDetailsModalSheet extends StatelessWidget {
  final int id;

  const TorrentDetailsModalSheet({super.key, required this.id});

  @override
  Widget build(BuildContext context) {
    return ChangeNotifierProvider(
        create: (context) => TorrentModel(),
        child: Consumer<TorrentModel>(builder: (context, torrentModel, child) {
          return TorrentDetailsModalSheetContent(
              torrentModel: torrentModel, id: id);
        }));
  }
}

class TorrentDetailsModalSheetContent extends StatefulWidget {
  final TorrentModel torrentModel;
  final int id;

  const TorrentDetailsModalSheetContent(
      {super.key, required this.torrentModel, required this.id});

  @override
  State<TorrentDetailsModalSheetContent> createState() =>
      _TorrentDetailsModalSheetContentState();
}

class _TorrentDetailsModalSheetContentState
    extends State<TorrentDetailsModalSheetContent> {
  @override
  void initState() {
    super.initState();
    widget.torrentModel.startTorrentFetching(widget.id);
  }

  @override
  void dispose() {
    widget.torrentModel.stopTorrentFetching();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    if (widget.torrentModel.torrent == null) {
      return const Text('Loading...');
    }

    return DefaultTabController(
      length: 3, // Number of tabs
      child: Expanded(
        child: Material(
          child: Column(children: [
            const TabBar(
              tabs: [
                Tab(text: 'Files'),
                Tab(text: 'Labels'),
                Tab(text: 'Details'),
              ],
            ),
            Expanded(
              child: TabBarView(
                children: [
                  FilesTab(
                    torrent: widget.torrentModel.torrent!,
                    location: widget.torrentModel.torrent!.location!,
                  ),
                  LabelsTab(torrent: widget.torrentModel.torrent!),
                  DetailsTab(torrent: widget.torrentModel.torrent!)
                ],
              ),
            ),
          ]),
        ),
      ),
    );
  }
}
