import 'dart:async';

import 'package:flutter/material.dart';
import 'package:flutter_slidable/flutter_slidable.dart';
import 'package:flutter_svg/flutter_svg.dart';
import 'package:pikatorrent/dialogs/remove_torrent.dart';
import 'package:pikatorrent/engine/torrent.dart';
import 'package:pikatorrent/main.dart';
import 'package:pikatorrent/sheets/torrent_details/torrent_details.dart';
import 'package:pikatorrent/utils/device.dart';
import 'package:pretty_bytes/pretty_bytes.dart';

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
  List<Torrent> torrents = [];
  Timer? _timer;
  late final controller = SlidableController(this);

  @override
  void initState() {
    super.initState();
    fetchTorrents();
    _timer = Timer.periodic(const Duration(seconds: 5), (timer) {
      fetchTorrents();
    });
  }

  @override
  void dispose() {
    _timer?.cancel();
    super.dispose();
  }

  fetchTorrents() async {
    List<Torrent> fetchedTorrents = await engine.fetchTorrents();

    setState(() {
      torrents = fetchedTorrents;
    });
  }

  removeTorrent(Torrent torrent) {
    showDialog(
        context: context,
        builder: (BuildContext context) {
          return RemoveTorrentDialog(torrent: torrent);
        });
  }

  @override
  Widget build(BuildContext context) {
    if (torrents.isEmpty) {
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

    return ListView.builder(
      itemCount: torrents.length,
      // FIXME: add prototypeItem to improve perfs.
      itemBuilder: (context, index) {
        Torrent torrent = torrents[index];
        final percent = (torrent.progress ?? 0) * 100;

        if (isMobile(context)) {
          return Slidable(
            key: Key(index.toString()),
            endActionPane: ActionPane(
              motion: const ScrollMotion(),
              extentRatio: 0.3,
              children: [
                SlidableAction(
                  backgroundColor: Theme.of(context).colorScheme.surface,
                  onPressed: (_) => removeTorrent(torrent),
                  foregroundColor: Colors.deepOrange,
                  icon: Icons.remove_circle_outline,
                ),
              ],
            ),
            child: TorrentListTile(
              torrent: torrent,
              percent: percent,
              removeTorrent: () => removeTorrent(torrent),
            ),
          );
        }

        // Desktop
        return TorrentListTile(
          torrent: torrent,
          percent: percent,
          removeTorrent: () => removeTorrent(torrent),
        );
      },
    );
  }
}

class TorrentListTile extends StatelessWidget {
  const TorrentListTile(
      {super.key,
      required this.torrent,
      required this.percent,
      required this.removeTorrent});

  final Torrent torrent;
  final double percent;
  final VoidCallback removeTorrent;

  @override
  Widget build(BuildContext context) {
    return ListTile(
      onTap: () {
        showDeviceSheet(context, torrent?.name ?? 'Torrent details',
            TorrentDetailsModalSheet(id: torrent.id), true);
      },
      leading: FittedBox(
        child: Stack(alignment: Alignment.center, children: [
          CircularProgressIndicator(
              value: torrent.progress ?? 0,
              valueColor: const AlwaysStoppedAnimation<Color>(Colors.yellow),
              strokeWidth: 4),
          Center(
              child: IconButton(
            onPressed: () {
              torrent.status == TorrentStatus.stopped
                  ? torrent.start()
                  : torrent.stop();
            },
            icon: torrent.status == TorrentStatus.stopped
                ? const Icon(Icons.play_circle_outline)
                : const Icon(Icons.pause_circle_outline),
            tooltip: torrent.status == TorrentStatus.stopped ? 'Start' : 'Stop',
          )),
        ]),
      ),
      title: Text(torrent.name ?? '-',
          overflow: TextOverflow.ellipsis,
          maxLines: 1,
          style: const TextStyle(fontWeight: FontWeight.bold)),
      trailing: (!isMobile(context))
          ? IconButton(
              onPressed: removeTorrent,
              icon: const Icon(
                Icons.remove_circle_outline,
                color: Colors.deepOrange,
              ))
          : null,

      subtitle:
          Row(children: [
        Expanded(
          child: Text('${percent.floor().toString()}%',
              style:
                  const TextStyle(fontWeight: FontWeight.bold, fontSize: 12)),
        ),
        Expanded(
          child: Text(
              torrent.size != null
                  ? prettyBytes(torrent.size!.toDouble())
                  : '-',
              style:
                  const TextStyle(fontWeight: FontWeight.bold, fontSize: 12)),
        ),
        Expanded(
          child: Row(children: [
            const Icon(
              Icons.arrow_circle_down,
              size: 16,
              color: Colors.lightGreen,
            ),
            const SizedBox(width: 8),
            Text(
                torrent.rateDownload != null
                    ? '${prettyBytes(torrent.rateDownload!.toDouble())}/s'
                    : '-',
                style:
                    const TextStyle(fontWeight: FontWeight.bold, fontSize: 12)),
          ]),
        ),
        Expanded(
          child: Row(children: [
            const Icon(
              Icons.arrow_circle_up,
              size: 16,
              color: Colors.lightBlue,
            ),
            const SizedBox(width: 8),
            Text(
                torrent.rateUpload != null
                    ? '${prettyBytes(torrent.rateUpload!.toDouble())}/s'
                    : '-',
                style:
                    const TextStyle(fontWeight: FontWeight.bold, fontSize: 12))
          ]),
        ),
      ]),
      // trailing:
    );
  }
}
