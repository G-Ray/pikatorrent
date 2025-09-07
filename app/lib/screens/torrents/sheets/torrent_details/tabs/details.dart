import 'package:flutter/material.dart';
import 'package:pikatorrent/engine/torrent.dart';
import 'package:pikatorrent/l10n/app_localizations.dart';
import 'package:pretty_bytes/pretty_bytes.dart';
import 'package:duration/duration.dart';

class DetailsTab extends StatelessWidget {
  final Torrent torrent;

  const DetailsTab({super.key, required this.torrent});

  @override
  Widget build(BuildContext context) {
    final localizations = AppLocalizations.of(context)!;

    double ratio = torrent.downloadedEver > 0
        ? torrent.uploadedEver / torrent.downloadedEver
        : 0;

    String status = switch (torrent.status) {
      TorrentStatus.stopped => localizations.stopped,
      TorrentStatus.checking => localizations.checking,
      TorrentStatus.downloading => localizations.downloading,
      TorrentStatus.queuedToCheck => localizations.queuedToCheck,
      TorrentStatus.queuedToDownload => localizations.queuedToDownload,
      TorrentStatus.queuedToSeed => localizations.queuedToSeed,
      TorrentStatus.seeding => localizations.seeding
    };

    final eta = Duration(seconds: torrent.eta);

    final String privacy = torrent.isPrivate
        ? localizations.privateTorrent
        : localizations.publicTorrent;

    return ListView(
      children: <Widget>[
        ListTile(
            title: Text(localizations.error),
            // TODO: Translate errors
            subtitle: Text(
                torrent.errorString.isEmpty ? '-' : torrent.errorString,
                style: (torrent.errorString.isEmpty)
                    ? const TextStyle()
                    : const TextStyle(color: Colors.red))),
        ListTile(
            title: Text(localizations.size),
            subtitle: Text(prettyBytes(torrent.size.toDouble()))),
        ListTile(
            title: Text(localizations.downloaded),
            subtitle: Text(prettyBytes(torrent.downloadedEver.toDouble()))),
        ListTile(
            title: Text(localizations.uploaded),
            subtitle: Text(prettyBytes(torrent.uploadedEver.toDouble()))),
        ListTile(
            title: Text(localizations.ratio), subtitle: Text(ratio.toString())),
        ListTile(
            title: Text(localizations.peersConnected),
            subtitle: Text(torrent.peersConnected.toString())),
        ListTile(title: Text(localizations.state), subtitle: Text(status)),
        ListTile(
            title: Text(localizations.remainingTime),
            subtitle: Text(torrent.eta >= 0
                ? eta.pretty(abbreviated: true, delimiter: ' ')
                : '-')),
        ListTile(
            title: Text(localizations.pieces),
            subtitle: Text(torrent.pieceCount.toString())),
        ListTile(
            title: Text(localizations.pieceSize),
            subtitle:
                Text(prettyBytes(torrent.pieceSize.toDouble()).toString())),
        ListTile(
            title: Text(localizations.addedDate),
            subtitle: Text(
                DateTime.fromMillisecondsSinceEpoch(torrent.addedDate * 1000)
                    .toString())),
        ListTile(title: Text(localizations.privacy), subtitle: Text(privacy)),
        ListTile(
            title: Text(localizations.creator),
            subtitle: Text(torrent.creator == '' ? '-' : torrent.creator)),
        ListTile(
            title: Text(localizations.comment),
            subtitle: Text(torrent.comment == '' ? '-' : torrent.comment)),
        ListTile(
            title: Text(localizations.downloadDirectory),
            subtitle: Text(torrent.location)),
      ],
    );
  }
}
