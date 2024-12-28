import 'package:flutter/material.dart';
import 'package:pikatorrent/engine/torrent.dart';
import 'package:pikatorrent/models/torrents.dart';
import 'package:pikatorrent/screens/torrents/sheets/torrent_details/models/torrent.dart';
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

  _handleWantedChange(BuildContext context, int fileIndex, bool? wanted) async {
    await torrent.toggleFileWanted(fileIndex, wanted ?? true);
    if (context.mounted) {
      Provider.of<TorrentModel>(context, listen: false)
          .fetchTorrent(torrent.id);
      await Provider.of<TorrentsModel>(context, listen: false).fetchTorrents();
    }
  }

  @override
  Widget build(BuildContext context) {
    var files = torrent.files ?? [];

    return ListView.builder(
      itemCount: files.length,
      itemBuilder: (context, index) {
        var file = files[index];

        var percent = (file.bytesCompleted / file.length * 100).floor();

        var completed = file.bytesCompleted == file.length;

        return ListTile(
            leading: Opacity(
                opacity: completed ? 1 : 0.5,
                child: Icon(getFileIcon(file.name))),
            title: Text(file.name),
            subtitle: Row(
              children: [
                Text('${percent.toString()}%'),
                Text(' • ${prettyBytes(file.length.toDouble())}'),
                if (!file.wanted) const Text(' • Paused')
              ],
            ),
            trailing: percent == 100
                ? IconButton(
                    onPressed: () => _openFile(file.name), icon: const Icon(Icons.download_done))
                : file.wanted
                    ? IconButton(
                        tooltip: 'Pause',
                        onPressed: () =>
                            _handleWantedChange(context, index, false),
                        icon: const Icon(Icons.download))
                    : IconButton(
                        tooltip: 'Download',
                        onPressed: () =>
                            _handleWantedChange(context, index, true),
                        icon: const Icon(Icons.pause)),
            onTap: completed ? () => _openFile(file.name) : null);
      },
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
