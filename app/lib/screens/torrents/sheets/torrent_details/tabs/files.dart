import 'package:collection/collection.dart';
import 'package:flutter/material.dart';
import 'package:pikatorrent/engine/file.dart';
import 'package:pikatorrent/engine/torrent.dart';
import 'package:pikatorrent/models/torrents.dart';
import 'package:pikatorrent/widgets/torrent_player/torrent_player.dart';
import 'package:pretty_bytes/pretty_bytes.dart';
import 'package:open_file/open_file.dart';
import 'package:path/path.dart' as path;
import 'package:provider/provider.dart';
import 'package:mime/mime.dart';

class FilesTab extends StatelessWidget {
  final Torrent torrent;
  final String location;

  const FilesTab({super.key, required this.torrent, required this.location});

  _openFile(String filepath) {
    OpenFile.open(path.join(location, filepath));
  }

  _handleWantedChange(BuildContext context, int fileIndex, bool wanted) async {
    await torrent.toggleFileWanted(fileIndex, wanted);
    if (context.mounted) {
      // Refresh torrents
      await Provider.of<TorrentsModel>(context, listen: false).fetchTorrents();
    }
  }

  _handleAllWantedChange(BuildContext context, bool wanted) async {
    await torrent.toggleAllFilesWanted(wanted);
    if (context.mounted) {
      // Refresh torrents
      await Provider.of<TorrentsModel>(context, listen: false).fetchTorrents();
    }
  }

  // See docs/streaming.md
  _handlePlayClick(BuildContext context, File file) {
    String filePath = path.join(location, file.name);

    Navigator.of(context, rootNavigator: true)
        .push(MaterialPageRoute(builder: (BuildContext context) {
      return TorrentPlayer(filePath: filePath, torrent: torrent, file: file);
    }));
  }

  @override
  Widget build(BuildContext context) {
    var files = torrent.files;
    bool areAllFilesWanted = files.every((f) => f.wanted);
    bool areAllFilesSkipped = files.none((f) => f.wanted);
    final globalWantedState = areAllFilesWanted
        ? true
        : areAllFilesSkipped
            ? false
            : null;

    return Column(
      children: [
        ListTile(
          trailing: Checkbox(
              value: globalWantedState,
              tristate: true,
              onChanged: (_) =>
                  _handleAllWantedChange(context, !areAllFilesWanted)),
        ),
        Expanded(
          child: ListView.builder(
            itemCount: files.length,
            itemBuilder: (context, index) {
              var file = files[index];

              var percent = (file.bytesCompleted / file.length * 100).floor();

              var completed = file.bytesCompleted == file.length;

              var mimeType = lookupMimeType(file.name);

              bool isPlayable = mimeType != null &&
                  (mimeType.startsWith('video') ||
                      mimeType.startsWith('audio'));

              return ListTile(
                  leading: Icon(getFileIcon(file.name)),
                  title: Text(file.name),
                  subtitle: Row(
                    children: [
                      percent < 100
                          ? Text('${percent.toString()} %')
                          : const Icon(Icons.download_done, size: 16),
                      Text(' • ${prettyBytes(file.length.toDouble())}'),
                    ],
                  ),
                  trailing: Row(
                    mainAxisSize: MainAxisSize.min,
                    spacing: 8,
                    children: [
                      if (isPlayable)
                        IconButton(
                          onPressed: () {
                            _handlePlayClick(context, file);
                          },
                          icon: const Icon(Icons.play_circle_outlined),
                          tooltip: 'Play',
                        ),
                      Checkbox(
                          value: file.wanted,
                          onChanged: file.bytesCompleted == file.length
                              ? null
                              : (_) => _handleWantedChange(
                                  context, index, !file.wanted)),
                    ],
                  ),
                  onTap: completed ? () => _openFile(file.name) : null);
            },
          ),
        ),
      ],
    );
  }
}

IconData getFileIcon(String filename) {
  var mimeType = lookupMimeType(filename);

  if (mimeType != null) {
    if (mimeType.startsWith('video')) {
      return Icons.movie;
    }

    if (mimeType.startsWith('image')) {
      return Icons.image;
    }

    if (mimeType.startsWith('audio')) {
      return Icons.audiotrack;
    }
  }

  return Icons.description;
}
