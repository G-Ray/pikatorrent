import 'package:collection/collection.dart';
import 'package:flutter/material.dart';
import 'package:pikatorrent/engine/file.dart';
import 'package:pikatorrent/engine/torrent.dart';
import 'package:pikatorrent/l10n/app_localizations.dart';
import 'package:pikatorrent/models/torrents.dart';
import 'package:pikatorrent/widgets/torrent_player/torrent_player.dart';
import 'package:pretty_bytes/pretty_bytes.dart';
import 'package:open_file/open_file.dart';
import 'package:path/path.dart' as path;
import 'package:provider/provider.dart';
import 'package:mime/mime.dart';

class FilesTab extends StatefulWidget {
  final Torrent torrent;
  final String location;

  const FilesTab({super.key, required this.torrent, required this.location});

  @override
  State<FilesTab> createState() => _FilesTabState();
}

class _FilesTabState extends State<FilesTab> {
  bool _showOnlyPlayable = false;

  bool _isFilePlayable(String filename) {
    var mimeType = lookupMimeType(filename);
    return mimeType != null &&
        (mimeType.startsWith('video') || mimeType.startsWith('audio'));
  }

  _openFile(String filepath) {
    OpenFile.open(path.join(widget.location, filepath));
  }

  _handleWantedChange(BuildContext context, int fileIndex, bool wanted) async {
    await widget.torrent.toggleFileWanted(fileIndex, wanted);
    if (context.mounted) {
      // Refresh torrents
      await Provider.of<TorrentsModel>(context, listen: false).fetchTorrents();
    }
  }

  _handleAllWantedChange(BuildContext context, bool wanted) async {
    await widget.torrent.toggleAllFilesWanted(wanted);
    if (context.mounted) {
      // Refresh torrents
      await Provider.of<TorrentsModel>(context, listen: false).fetchTorrents();
    }
  }

  // See docs/streaming.md
  _handlePlayClick(BuildContext context, File file) {
    String filePath = path.join(widget.location, file.name);

    Navigator.of(context, rootNavigator: true).push(MaterialPageRoute(
        settings: const RouteSettings(name: 'player'),
        builder: (BuildContext context) {
          return TorrentPlayer(
              filePath: filePath, torrent: widget.torrent, file: file);
        }));
  }

  @override
  Widget build(BuildContext context) {
    final localizations = AppLocalizations.of(context)!;

    var files = widget.torrent.files;

    var displayedFiles = _showOnlyPlayable
        ? files.where((f) => _isFilePlayable(f.name)).toList()
        : files;

    bool areAllFilesWanted = files.every((f) => f.wanted);
    bool areAllFilesSkipped = files.none((f) => f.wanted);
    final globalWantedState = areAllFilesWanted
        ? true
        : areAllFilesSkipped
            ? false
            : null;

    return Column(
      children: [
        if (files.isNotEmpty)
          ListTile(
            leading: const Icon(Icons.play_circle_outlined),
            title: Text(localizations.showOnlyPlayableFiles),
            trailing: Row(mainAxisSize: MainAxisSize.min, children: [
              Switch(
                value: _showOnlyPlayable,
                onChanged: (value) {
                  setState(() {
                    _showOnlyPlayable = value;
                  });
                },
              )
            ]),
          ),
        if (files.isNotEmpty)
          ListTile(
            trailing: Row(
              mainAxisSize: MainAxisSize.min,
              children: [
                Checkbox(
                    value: globalWantedState,
                    tristate: true,
                    onChanged: (_) =>
                        _handleAllWantedChange(context, !areAllFilesWanted)),
              ],
            ),
          ),
        Expanded(
          child: ListView.builder(
            itemCount: displayedFiles.length,
            itemBuilder: (context, index) {
              var file = displayedFiles[index];

              var percent = (file.bytesCompleted / file.length * 100).floor();

              var completed = file.bytesCompleted == file.length;

              bool isPlayable = _isFilePlayable(file.name);

              // Get the original index in the full files list
              var originalIndex = files.indexOf(file);

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
                          tooltip: localizations.play,
                        ),
                      Checkbox(
                          value: file.wanted,
                          onChanged: file.bytesCompleted == file.length
                              ? null
                              : (_) => _handleWantedChange(
                                  context, originalIndex, !file.wanted)),
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
