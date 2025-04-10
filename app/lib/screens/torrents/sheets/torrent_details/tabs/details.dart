import 'package:flutter/material.dart';
import 'package:pikatorrent/engine/torrent.dart';
import 'package:pretty_bytes/pretty_bytes.dart';
import 'package:duration/duration.dart';

class DetailsTab extends StatelessWidget {
  final Torrent torrent;

  const DetailsTab({super.key, required this.torrent});

  @override
  Widget build(BuildContext context) {
    double ratio = torrent.downloadedEver > 0
        ? torrent.uploadedEver / torrent.downloadedEver
        : 0;

    String status = switch (torrent.status) {
      TorrentStatus.stopped => 'Stopped',
      TorrentStatus.checking => 'Checking',
      TorrentStatus.downloading => 'Downloading',
      TorrentStatus.queuedToCheck => 'Queued to check',
      TorrentStatus.queuedToDownload => 'Queued to download',
      TorrentStatus.queuedToSeed => 'Queued to seed',
      TorrentStatus.seeding => 'Seeding'
    };

    final eta = Duration(seconds: torrent.eta);

    final String privacy =
        torrent.isPrivate ? 'Private torrent' : 'Public torrent';

    return ListView(
      children: <Widget>[
        ListTile(
            title: const Text('Error'),
            subtitle: Text(
                torrent.errorString.isEmpty ? '-' : torrent.errorString,
                style: (torrent.errorString.isEmpty)
                    ? const TextStyle()
                    : const TextStyle(color: Colors.red))),
        ListTile(
            title: const Text('Size'),
            subtitle: Text(prettyBytes(torrent.size.toDouble()))),
        ListTile(
            title: const Text('Downloaded'),
            subtitle: Text(prettyBytes(torrent.downloadedEver.toDouble()))),
        ListTile(
            title: const Text('Uploaded'),
            subtitle: Text(prettyBytes(torrent.uploadedEver.toDouble()))),
        ListTile(title: const Text('Ratio'), subtitle: Text(ratio.toString())),
        ListTile(
            title: const Text('Peers connected'),
            subtitle: Text(torrent.peersConnected.toString())),
        ListTile(title: const Text('State'), subtitle: Text(status)),
        ListTile(
            title: const Text('Remaining Time'),
            subtitle: Text(torrent.eta >= 0
                ? eta.pretty(abbreviated: true, delimiter: ' ')
                : '-')),
        ListTile(
            title: const Text('Pieces'),
            subtitle: Text(torrent.pieceCount.toString())),
        ListTile(
            title: const Text('Piece size'),
            subtitle:
                Text(prettyBytes(torrent.pieceSize.toDouble()).toString())),
        ListTile(
            title: const Text('Added date'),
            subtitle: Text(
                DateTime.fromMillisecondsSinceEpoch(torrent.addedDate * 1000)
                    .toString())),
        ListTile(title: const Text('Privacy'), subtitle: Text(privacy)),
        ListTile(
            title: const Text('Creator'),
            subtitle: Text(torrent.creator == '' ? '-' : torrent.creator)),
        ListTile(
            title: const Text('Comment'),
            subtitle: Text(torrent.comment == '' ? '-' : torrent.comment)),
        ListTile(
            title: const Text('Download directory'),
            subtitle: Text(torrent.location)),
      ],
    );
  }
}
