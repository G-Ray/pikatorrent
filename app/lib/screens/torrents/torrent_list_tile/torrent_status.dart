import 'package:flutter/material.dart';
import 'package:pikatorrent/engine/torrent.dart';

class TorrentStatusText extends StatelessWidget {
  final Torrent torrent;
  final double percent;

  const TorrentStatusText(
      {super.key, required this.torrent, required this.percent});

  @override
  Widget build(BuildContext context) {
    return switch (torrent.status) {
      TorrentStatus.stopped => const Text('Paused',
          style: TextStyle(fontWeight: FontWeight.bold, fontSize: 12)),
      TorrentStatus.queuedToCheck => const Text('Queued to check',
          style: TextStyle(fontWeight: FontWeight.bold, fontSize: 12)),
      TorrentStatus.checking => const Text('Checking',
          style: TextStyle(fontWeight: FontWeight.bold, fontSize: 12)),
      TorrentStatus.queuedToDownload => const Text('Queued to download',
          style: TextStyle(fontWeight: FontWeight.bold, fontSize: 12)),
      TorrentStatus.downloading => Text('${percent.floor().toString()}%',
          style: const TextStyle(
              fontWeight: FontWeight.bold,
              fontSize: 12,
              color: Colors.lightGreen)),
      TorrentStatus.queuedToSeed => const Text('Queued to seed',
          style: TextStyle(fontWeight: FontWeight.bold, fontSize: 12)),
      TorrentStatus.seeding => const Text('Seeding',
          style: TextStyle(
              fontWeight: FontWeight.bold,
              fontSize: 12,
              color: Colors.lightBlue)),
      null => const Text('-'),
    };
  }
}
