import 'package:flutter/material.dart';
import 'package:flutter_slidable/flutter_slidable.dart';
import 'package:flutter_svg/flutter_svg.dart';
import 'package:fuzzywuzzy/fuzzywuzzy.dart';
import 'package:pikatorrent/dialogs/remove_torrent.dart';
import 'package:pikatorrent/engine/torrent.dart';
import 'package:pikatorrent/models/torrents.dart';
import 'package:pikatorrent/screens/torrents/text_search.dart';
import 'package:pikatorrent/screens/torrents/torrent_list_tile.dart';
import 'package:pikatorrent/utils/device.dart';
import 'package:provider/provider.dart';

const String assetName = 'assets/undraw_download.svg';
final Widget downloadSvg = SvgPicture.asset(
  assetName,
  semanticsLabel: 'Download',
  height: 164,
);

class TorrentsScreen extends StatefulWidget {
  const TorrentsScreen({super.key});

  @override
  State<TorrentsScreen> createState() => _TorrentScreen();
}

class _TorrentScreen extends State<TorrentsScreen>
    with SingleTickerProviderStateMixin {
  late final controller = SlidableController(this);
  String filterText = '';

  filterTorrents (List<Torrent> torrents) {
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

  @override
  Widget build(BuildContext context) {
    return Consumer<TorrentsModel>(
      builder: (context, torrentsModel, child) {
        if (torrentsModel.hasLoaded && torrentsModel.torrents.isEmpty) {
          return Padding(
            padding: const EdgeInsets.all(16.0),
            child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              mainAxisSize: MainAxisSize.max,
              children: [
                downloadSvg,
                const SizedBox(height: 16),
                Text('No downloads yet',
                    style: Theme.of(context).textTheme.titleLarge),
              ],
            ),
          );
          // return downloadSvg;
        }

        var filteredTorrents = filterTorrents(torrentsModel.torrents);

        return Column(
          children: [
            Padding(
              padding: const EdgeInsets.symmetric(horizontal: 16),
              child: TextSearch(
                  onChange: (text) => {
                        setState(() {
                          filterText = text;
                        })
                      }),
            ),
            Expanded(
              child: ListView.builder(
                itemCount: filteredTorrents.length,
                // FIXME: add prototypeItem to improve perfs.
                itemBuilder: (context, index) {
                  Torrent torrent = filteredTorrents[index];
                  final percent = (torrent.progress ?? 0) * 100;

                  if (isMobileSize(context)) {
                    return Slidable(
                      key: Key(index.toString()),
                      endActionPane: ActionPane(
                        motion: const ScrollMotion(),
                        extentRatio: 0.3,
                        children: [
                          SlidableAction(
                            backgroundColor:
                                Theme.of(context).colorScheme.surface,
                            onPressed: (_) => showDialog(
                                context: context,
                                builder: (BuildContext context) {
                                  return RemoveTorrentDialog(torrent: torrent);
                                }),
                            foregroundColor: Colors.deepOrange,
                            icon: Icons.remove_circle_outline,
                          ),
                        ],
                      ),
                      child:
                          TorrentListTile(torrent: torrent, percent: percent),
                    );
                  }

                  // Desktop
                  return TorrentListTile(torrent: torrent, percent: percent);
                },
              ),
            ),
          ],
        );
      },
    );
  }
}


