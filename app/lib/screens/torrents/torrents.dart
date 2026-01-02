import 'package:flutter/material.dart';
import 'package:flutter_slidable/flutter_slidable.dart';
import 'package:flutter_svg/flutter_svg.dart';
import 'package:pikatorrent/dialogs/remove_torrent.dart';
import 'package:pikatorrent/dialogs/remove_torrents.dart';
import 'package:pikatorrent/engine/torrent.dart';
import 'package:pikatorrent/l10n/app_localizations.dart';
import 'package:pikatorrent/models/torrents.dart';
import 'package:pikatorrent/screens/torrents/filter_labels_button.dart';
import 'package:pikatorrent/screens/torrents/sort_button.dart';
import 'package:pikatorrent/screens/torrents/text_search.dart';
import 'package:pikatorrent/screens/torrents/torrent_list_tile/torrent_list_tile.dart';
import 'package:pikatorrent/utils/app_links.dart';
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
  final Set<int> _selectedTorrentIds = {};
  bool _isSelectionMode = false;

  void _toggleSelection(int torrentId) {
    setState(() {
      if (_selectedTorrentIds.contains(torrentId)) {
        _selectedTorrentIds.remove(torrentId);
        if (_selectedTorrentIds.isEmpty) {
          _isSelectionMode = false;
        }
      } else {
        _selectedTorrentIds.add(torrentId);
      }
    });
  }

  void _enterSelectionMode(int torrentId) {
    setState(() {
      _isSelectionMode = true;
      _selectedTorrentIds.add(torrentId);
    });
  }

  void _exitSelectionMode() {
    setState(() {
      _isSelectionMode = false;
      _selectedTorrentIds.clear();
    });
  }

  @override
  Widget build(BuildContext context) {
    final localizations = AppLocalizations.of(context)!;

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
                Text(localizations.noDownloadsYet,
                    style: Theme.of(context).textTheme.titleLarge),
              ],
            ),
          );
        }

        return Column(
          children: [
            Padding(
              padding: const EdgeInsets.only(left: 16, right: 16),
              child: Row(
                children: [
                  if (_isSelectionMode) ...[
                    IconButton(
                      icon: const Icon(Icons.close),
                      onPressed: _exitSelectionMode,
                      tooltip: localizations.cancel,
                    ),
                    const SizedBox(width: 8),
                    Text(
                      '${_selectedTorrentIds.length}',
                      style: Theme.of(context).textTheme.titleMedium,
                    ),
                    const Spacer(),
                    IconButton(
                      icon: const Icon(Icons.delete_outline),
                      onPressed: _selectedTorrentIds.isEmpty
                          ? null
                          : () async {
                              final selectedTorrents = torrentsModel.torrents
                                  .where(
                                      (t) => _selectedTorrentIds.contains(t.id))
                                  .toList();

                              if (selectedTorrents.length == 1) {
                                await showDialog(
                                  context: context,
                                  builder: (BuildContext context) {
                                    return RemoveTorrentDialog(
                                        torrent: selectedTorrents.first);
                                  },
                                );
                              } else {
                                await showDialog(
                                  context: context,
                                  builder: (BuildContext context) {
                                    return RemoveTorrentsDialog(
                                        torrents: selectedTorrents);
                                  },
                                );
                              }
                              _exitSelectionMode();
                            },
                      tooltip: localizations.remove,
                    ),
                  ] else ...[
                    const SortButton(),
                    const FilterLabelsButton(),
                    const Spacer(),
                    TextSearch(
                      onChange: torrentsModel.setFilterText,
                    ),
                  ],
                ],
              ),
            ),
            Expanded(
              child: ListView.builder(
                itemCount: torrentsModel.displayedTorrents.length,
                // FIXME: add prototypeItem to improve perfs.
                itemBuilder: (context, index) {
                  Torrent torrent = torrentsModel.displayedTorrents[index];
                  final percent = (torrent.progress) * 100;

                  if (isMobileSize(context)) {
                    // Disable slidable in selection mode
                    if (_isSelectionMode) {
                      return TorrentListTile(
                        torrent: torrent,
                        percent: percent,
                        isSelectionMode: _isSelectionMode,
                        isSelected: _selectedTorrentIds.contains(torrent.id),
                        onLongPress: () => _enterSelectionMode(torrent.id),
                        onSelectionChanged: () => _toggleSelection(torrent.id),
                      );
                    }

                    return Slidable(
                      key: Key(index.toString()),
                      endActionPane: ActionPane(
                        motion: const ScrollMotion(),
                        extentRatio: 0.6,
                        children: [
                          SlidableAction(
                            backgroundColor: Colors.blue,
                            onPressed: (_) =>
                                shareLink(context, torrent.magnetLink),
                            icon: Icons.share,
                          ),
                          if (isDesktop())
                            SlidableAction(
                              backgroundColor:
                                  Theme.of(context).colorScheme.surface,
                              onPressed: (_) => torrent.openFolder(context),
                              icon: Icons.folder_outlined,
                            ),
                          SlidableAction(
                            backgroundColor: Colors.red,
                            onPressed: (_) => showDialog(
                                context: context,
                                builder: (BuildContext context) {
                                  return RemoveTorrentDialog(torrent: torrent);
                                }),
                            icon: Icons.delete_outline,
                          ),
                        ],
                      ),
                      child: TorrentListTile(
                        torrent: torrent,
                        percent: percent,
                        isSelectionMode: _isSelectionMode,
                        isSelected: _selectedTorrentIds.contains(torrent.id),
                        onLongPress: () => _enterSelectionMode(torrent.id),
                        onSelectionChanged: () => _toggleSelection(torrent.id),
                      ),
                    );
                  }

                  // Desktop
                  return TorrentListTile(
                    torrent: torrent,
                    percent: percent,
                    isSelectionMode: _isSelectionMode,
                    isSelected: _selectedTorrentIds.contains(torrent.id),
                    onLongPress: () => _enterSelectionMode(torrent.id),
                    onSelectionChanged: () => _toggleSelection(torrent.id),
                  );
                },
              ),
            ),
          ],
        );
      },
    );
  }
}
