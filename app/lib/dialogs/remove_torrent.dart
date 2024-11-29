import 'package:flutter/material.dart';
import 'package:pikatorrent/engine/torrent.dart';
import 'package:pikatorrent/main.dart';

class RemoveTorrentDialog extends StatelessWidget {
  final Torrent torrent;

  const RemoveTorrentDialog({
    super.key, required this.torrent,
  });

  void removeTorrent(bool withData) async {
    await torrent.remove(withData);
    await engine.fetchTorrents();
  }

  @override
  Widget build(BuildContext context) {
    return AlertDialog(
      title: const Text('Remove Torrent'),
      actions: [
        TextButton(
          child: const Text('Delete files & torrent'),
          onPressed: () {
            removeTorrent(true);
            Navigator.pop(context);
          },
        ),
        TextButton(
          child: const Text('Remove torrent only'),
          onPressed: () {
            removeTorrent(false);
            Navigator.pop(context);
          },
        ),
      ],
    );
  }
}
