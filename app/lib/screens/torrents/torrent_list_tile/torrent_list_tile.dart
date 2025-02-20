import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';
import 'package:pikatorrent/dialogs/remove_torrent.dart';
import 'package:pikatorrent/engine/torrent.dart';
import 'package:pikatorrent/models/torrents.dart';
import 'package:pikatorrent/screens/torrents/sheets/torrent_details/torrent_details.dart';
import 'package:pikatorrent/screens/torrents/torrent_list_tile/torrent_status.dart';
import 'package:pikatorrent/utils/app_links.dart';
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
        contentPadding: !isMobileSize(context)
            ? const EdgeInsets.only(left: 16, right: 16)
            : null,
        onTap: () {
          showDeviceSheet(
              context, torrent.name, TorrentDetailsModalSheet(id: torrent.id));
        },
        leading: FittedBox(
          child: Stack(alignment: Alignment.center, children: [
            CircularProgressIndicator(
                value: torrent.progress,
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
                  ? const Icon(Icons.pause)
                  : torrent.progress == 1
                      ? const Icon(Icons.download_done)
                      : const Icon(Icons.download),
              tooltip: torrent.status == TorrentStatus.stopped
                  ? 'Download'
                  : 'Pause',
            )),
          ]),
        ),
        title: Row(
          children: [
            Expanded(
              child: Text(torrent.name,
                  overflow: TextOverflow.ellipsis,
                  maxLines: 1,
                  style: const TextStyle(fontWeight: FontWeight.bold)),
            ),
          ],
        ),
        trailing: (!isMobileSize(context))
            ? Row(
                mainAxisSize: MainAxisSize.min,
                children: [
                  IconButton(
                      tooltip: 'Share',
                      onPressed: () => shareLink(context, torrent.magnetLink),
                      icon: const Icon(
                        Icons.share,
                      )),
                  if (isDesktop())
                    IconButton(
                        tooltip: 'Open folder',
                        onPressed: () => torrent.openFolder(context),
                        icon: const Icon(
                          Icons.folder_outlined,
                        )),
                  IconButton(
                      tooltip: 'Remove',
                      onPressed: () => showDialog(
                          context: context,
                          builder: (BuildContext context) {
                            return RemoveTorrentDialog(torrent: torrent);
                          }),
                      icon: const Icon(
                        Icons.delete_outline,
                      )),
                ],
              )
            : null,

        subtitle: Row(children: [
          Expanded(
              child: Row(
            children: [
              TorrentStatusText(
                torrent: torrent,
                percent: percent,
              ),
            ],
          )),
          Expanded(
            child: Text(prettyBytes(torrent.size.toDouble()),
                style:
                    const TextStyle(fontWeight: FontWeight.bold, fontSize: 12)),
          ),
          Expanded(
            child: torrent.progress != 1
                ? Row(children: [
                    const Icon(
                      Icons.arrow_circle_down,
                      size: 16,
                      color: Colors.lightGreen,
                    ),
                    const SizedBox(width: 8),
                    Expanded(
                      child: Text(
                          overflow: TextOverflow.ellipsis,
                          '${prettyBytes(torrent.rateDownload.toDouble())}/s',
                          style: const TextStyle(
                              fontWeight: FontWeight.bold, fontSize: 12)),
                    ),
                  ])
                : const SizedBox(
                    width: 0,
                  ),
          ),
          Expanded(
            child: Row(children: [
              const Icon(
                Icons.arrow_circle_up,
                size: 16,
                color: Colors.lightBlue,
              ),
              const SizedBox(width: 8),
              Expanded(
                child: Text(
                    overflow: TextOverflow.ellipsis,
                    '${prettyBytes(torrent.rateUpload.toDouble())}/s',
                    style: const TextStyle(
                        fontWeight: FontWeight.bold, fontSize: 12)),
              )
            ]),
          ),
        ]),
        // trailing:
      );
    });
  }
}
