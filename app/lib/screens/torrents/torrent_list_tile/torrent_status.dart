import 'package:flutter/material.dart';
import 'package:pikatorrent/engine/torrent.dart';

const defaultTextStyle = TextStyle(
  fontWeight: FontWeight.bold,
  fontSize: 12,
  overflow: TextOverflow.ellipsis,
);

class TorrentStatusText extends StatelessWidget {
  final Torrent torrent;
  final double percent;

  const TorrentStatusText(
      {super.key, required this.torrent, required this.percent});

  @override
  Widget build(BuildContext context) {
    if (torrent.errorString.isNotEmpty) {
      return const Text('Error',
          style: TextStyle(
            fontWeight: FontWeight.bold,
            fontSize: 12,
            color: Colors.red,
            overflow: TextOverflow.ellipsis,
          ));
    }

    return switch (torrent.status) {
      TorrentStatus.stopped => const Text('Paused', style: defaultTextStyle),
      TorrentStatus.queuedToCheck =>
        const Text('Queued to check', style: defaultTextStyle),
      TorrentStatus.checking => const Text('Checking', style: defaultTextStyle),
      TorrentStatus.queuedToDownload =>
        const Text('Queued to download', style: defaultTextStyle),
      TorrentStatus.queuedToSeed =>
        const Text('Queued to seed', style: defaultTextStyle),
      TorrentStatus.downloading => Text('${percent.floor().toString()}%',
          style: const TextStyle(
            fontWeight: FontWeight.bold,
            fontSize: 12,
            color: Colors.lightGreen,
            overflow: TextOverflow.ellipsis,
          )),
      TorrentStatus.seeding => const Text('Seeding',
          style: TextStyle(
            fontWeight: FontWeight.bold,
            fontSize: 12,
            color: Colors.blue,
            overflow: TextOverflow.ellipsis,
          )),
    };
  }
}
