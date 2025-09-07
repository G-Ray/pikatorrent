import 'package:flutter/material.dart';
import 'package:pikatorrent/engine/torrent.dart';
import 'package:pikatorrent/l10n/app_localizations.dart';

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
    final localizations = AppLocalizations.of(context)!;

    if (torrent.errorString.isNotEmpty) {
      return Text(localizations.error,
          style: const TextStyle(
            fontWeight: FontWeight.bold,
            fontSize: 12,
            color: Colors.red,
            overflow: TextOverflow.ellipsis,
          ));
    }

    return switch (torrent.status) {
      TorrentStatus.stopped =>
        Text(localizations.paused, style: defaultTextStyle),
      TorrentStatus.queuedToCheck =>
        Text(localizations.queuedToCheck, style: defaultTextStyle),
      TorrentStatus.checking =>
        Text(localizations.checking, style: defaultTextStyle),
      TorrentStatus.queuedToDownload =>
        Text(localizations.queuedToDownload, style: defaultTextStyle),
      TorrentStatus.queuedToSeed =>
        Text(localizations.queuedToSeed, style: defaultTextStyle),
      TorrentStatus.downloading => Text('${percent.floor().toString()}%',
          style: const TextStyle(
            fontWeight: FontWeight.bold,
            fontSize: 12,
            color: Colors.lightGreen,
            overflow: TextOverflow.ellipsis,
          )),
      TorrentStatus.seeding => Text(localizations.seeding,
          style: const TextStyle(
            fontWeight: FontWeight.bold,
            fontSize: 12,
            color: Colors.blue,
            overflow: TextOverflow.ellipsis,
          )),
    };
  }
}
