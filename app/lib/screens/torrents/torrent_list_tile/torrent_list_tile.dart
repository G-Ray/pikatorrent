import 'package:flutter/material.dart';
import 'package:pikatorrent/dialogs/remove_torrent.dart';
import 'package:pikatorrent/engine/torrent.dart';
import 'package:pikatorrent/l10n/app_localizations.dart';
import 'package:pikatorrent/models/torrents.dart';
import 'package:pikatorrent/screens/torrents/sheets/torrent_details/torrent_details.dart';
import 'package:pikatorrent/screens/torrents/torrent_list_tile/torrent_status.dart';
import 'package:pikatorrent/utils/app_links.dart';
import 'package:pikatorrent/utils/device.dart';
import 'package:pikatorrent/utils/theme.dart';
import 'package:pretty_bytes/pretty_bytes.dart';
import 'package:provider/provider.dart';
import 'package:percent_indicator/percent_indicator.dart';

class TorrentListTile extends StatelessWidget {
  const TorrentListTile({
    super.key,
    required this.torrent,
    required this.percent,
    this.isSelectionMode = false,
    this.isSelected = false,
    this.onLongPress,
    this.onSelectionChanged,
  });

  final Torrent torrent;
  final double percent;
  final bool isSelectionMode;
  final bool isSelected;
  final VoidCallback? onLongPress;
  final VoidCallback? onSelectionChanged;

  @override
  Widget build(BuildContext context) {
    final localizations = AppLocalizations.of(context)!;

    return Consumer<TorrentsModel>(builder: (context, torrentsModel, child) {
      return ListTile(
        contentPadding: !isMobileSize(context)
            ? const EdgeInsets.only(left: 16, right: 16)
            : null,
        onTap: () {
          if (isSelectionMode) {
            onSelectionChanged?.call();
          } else {
            showDeviceSheet(context, torrent.name,
                TorrentDetailsModalSheet(id: torrent.id));
          }
        },
        onLongPress: onLongPress,
        leading: (isSelectionMode)
            ? Checkbox(
                value: isSelected,
                onChanged: (_) => onSelectionChanged?.call(),
              )
            : FittedBox(
                child: CircularPercentIndicator(
                  radius: 22.0,
                  lineWidth: 4.0,
                  percent: torrent.progress,
                  center: IconButton(
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
                        ? localizations.download
                        : localizations.pause,
                  ),
                  linearGradient: const LinearGradient(
                    colors: gradientColors,
                  ),
                ),
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
                      tooltip: localizations.share,
                      onPressed: () => shareLink(context, torrent.magnetLink),
                      icon: const Icon(
                        Icons.share,
                      )),
                  if (isDesktop())
                    IconButton(
                        tooltip: localizations.openFolder,
                        onPressed: () => torrent.openFolder(context),
                        icon: const Icon(
                          Icons.folder_outlined,
                        )),
                  IconButton(
                      tooltip: localizations.remove,
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
              child: TorrentStatusText(
            torrent: torrent,
            percent: percent,
          )),
          Expanded(
            child: Text(prettyBytes(torrent.size.toDouble()),
                style: const TextStyle(
                  fontWeight: FontWeight.bold,
                  fontSize: 12,
                  overflow: TextOverflow.ellipsis,
                )),
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
                color: Colors.blue,
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
