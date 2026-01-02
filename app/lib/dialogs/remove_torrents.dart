import 'package:flutter/material.dart';
import 'package:pikatorrent/engine/torrent.dart';
import 'package:pikatorrent/main.dart';

class RemoveTorrentsDialog extends StatelessWidget {
  final List<Torrent> torrents;

  const RemoveTorrentsDialog({
    super.key,
    required this.torrents,
  });

  void removeTorrents(bool withData) async {
    final torrentIds = torrents.map((t) => t.id).toList();
    await engine.removeTorrents(torrentIds, withData);
    await engine.fetchTorrents();
  }

  @override
  Widget build(BuildContext context) {
    return AlertDialog(
      title: Text('Remove ${torrents.length} Torrents'),
      content: Text(
        'Are you sure you want to remove ${torrents.length} torrents?',
      ),
      actions: [
        TextButton(
          child: const Text('Cancel'),
          onPressed: () {
            Navigator.pop(context);
          },
        ),
        TextButton(
          child: const Text('Delete files & torrents'),
          onPressed: () {
            removeTorrents(true);
            Navigator.pop(context);
          },
        ),
        TextButton(
          child: const Text('Remove torrents only'),
          onPressed: () {
            removeTorrents(false);
            Navigator.pop(context);
          },
        ),
      ],
    );
  }
}
