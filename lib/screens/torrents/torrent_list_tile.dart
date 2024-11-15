import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';
import 'package:pikatorrent/dialogs/remove_torrent.dart';
import 'package:pikatorrent/engine/torrent.dart';
import 'package:pikatorrent/models/torrents.dart';
import 'package:pikatorrent/screens/torrents/sheets/torrent_details/torrent_details.dart';
import 'package:pikatorrent/utils/device.dart';
import 'package:pretty_bytes/pretty_bytes.dart';
import 'package:provider/provider.dart';

const String assetName = 'assets/undraw_download.svg';
final Widget downloadSvg = SvgPicture.asset(
  assetName,
  semanticsLabel: 'Download',
  height: 164,
);

class TorrentListTile extends StatelessWidget {
  const TorrentListTile(
      {super.key, required this.torrent, required this.percent});

  final Torrent torrent;
  final double percent;

  @override
  Widget build(BuildContext context) {
    return Consumer<TorrentsModel>(builder: (context, torrentsModel, child) {
      return ListTile(
        onTap: () {
          showDeviceSheet(context, torrent.name ?? 'Torrent details',
              TorrentDetailsModalSheet(id: torrent.id));
        },
        leading: FittedBox(
          child: Stack(alignment: Alignment.center, children: [
            CircularProgressIndicator(
                value: torrent.progress ?? 0,
                valueColor: const AlwaysStoppedAnimation<Color>(Colors.yellow),
                strokeWidth: 4),
            Center(
                child: IconButton(
              onPressed: () async {
                torrent.status == TorrentStatus.stopped
                    ? await torrent.start()
                    : await torrent.stop();
                torrentsModel.fetchTorrents();
              },
              icon: torrent.status == TorrentStatus.stopped
                  ? const Icon(Icons.play_circle_outline)
                  : const Icon(Icons.pause_circle_outline),
              tooltip:
                  torrent.status == TorrentStatus.stopped ? 'Start' : 'Stop',
            )),
          ]),
        ),
        title: Text(torrent.name ?? '-',
            overflow: TextOverflow.ellipsis,
            maxLines: 1,
            style: const TextStyle(fontWeight: FontWeight.bold)),
        trailing: (!isMobileSize(context))
            ? IconButton(
                tooltip: 'Remove',
                onPressed: () => showDialog(
                    context: context,
                    builder: (BuildContext context) {
                      return RemoveTorrentDialog(torrent: torrent);
                    }),
                icon: const Icon(
                  Icons.remove_circle_outline,
                ))
            : null,

        subtitle: Row(children: [
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
                  style: const TextStyle(
                      fontWeight: FontWeight.bold, fontSize: 12)),
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
                  style: const TextStyle(
                      fontWeight: FontWeight.bold, fontSize: 12))
            ]),
          ),
        ]),
        // trailing:
      );
    });
  }
}
