import 'package:flutter/material.dart';
import 'package:pikatorrent/engine/torrent.dart';
import 'package:pikatorrent/models/torrents.dart';
import 'package:pikatorrent/screens/torrents/sheets/torrent_details/tabs/dialogs/add_label.dart';
import 'package:provider/provider.dart';

class TagsTab extends StatelessWidget {
  final Torrent torrent;

  const TagsTab({super.key, required this.torrent});

  _handleAddLabel(BuildContext context, String label) async {
    TorrentBase torrentUpdate =
        TorrentBase(id: torrent.id, labels: [...torrent.labels ?? [], label]);
    await torrent.update(torrentUpdate);
    if (context.mounted) {
      _refreshTorrents(context);
    }
  }

  _handleSelectLabel(BuildContext context, String label, bool selected) async {
    var torrentUpdate = TorrentBase(
        id: torrent.id,
        labels: selected
            ? [...?torrent.labels, label]
            : torrent.labels?.where((l) => l != label).toList());

    await torrent.update(torrentUpdate);

    if (context.mounted) {
      _refreshTorrents(context);
    }
  }

  _refreshTorrents(BuildContext context) {
    Provider.of<TorrentsModel>(context, listen: false).fetchTorrents();
  }

  @override
  Widget build(BuildContext context) {
    return Consumer<TorrentsModel>(
        builder: (context, torrentsModel, child) => ListView(
              padding: const EdgeInsets.all(12),
              children: <Widget>[
                Wrap(
                  spacing: 8.0, // gap between adjacent chips
                  runSpacing: 4.0,
                  children: [
                    ...torrentsModel.labels.map((String label) => FilterChip(
                          label: Text(label),
                          selected: torrent.labels?.contains(label) ?? false,
                          onSelected: (bool selected) =>
                              _handleSelectLabel(context, label, selected),
                        )),
                    ActionChip(
                      avatar: const Icon(Icons.add),
                      label: const Text('Tag'),
                      onPressed: () {
                        showDialog(
                            context: context,
                            builder: (BuildContext dialogContext) =>
                                AddLabelDialog(
                                    context: dialogContext,
                                    torrent: torrent,
                                    onAddLabel: (label) =>
                                        _handleAddLabel(context, label)));
                      },
                    )
                  ],
                )
              ],
            ));
  }
}
