import 'package:flutter/material.dart';
import 'package:pikatorrent/engine/file.dart';
import 'package:pikatorrent/engine/torrent.dart';
import 'package:pikatorrent/main.dart';
import 'package:pikatorrent/models/torrents.dart';
import 'package:pikatorrent/screens/torrents/sheets/torrent_details/models/torrent.dart';
import 'package:pretty_bytes/pretty_bytes.dart';
import 'package:open_file/open_file.dart';
import 'package:path/path.dart' as path;
import 'package:provider/provider.dart';

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

        var percent = (file.bytesCompleted / file.length).floor() * 100;

        var completed = file.bytesCompleted == file.length;

        return ListTile(
            enabled: completed,
            leading: Tooltip(
                message: 'Download file',
                child: Checkbox(
                    value: file.wanted,
                    onChanged: completed
                        ? null
                        : (bool? checked) =>
                            _handleWantedChange(context, index, checked))),
            title: Text(file.name),
            subtitle: Text(
                '${percent.toString()}% • ${prettyBytes(file.length.toDouble())}'),
            onTap: () => _openFile(file.name));
      },
    );
  }
}
