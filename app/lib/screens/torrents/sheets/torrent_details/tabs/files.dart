import 'package:flutter/material.dart';
import 'package:pikatorrent/engine/file.dart';
import 'package:pretty_bytes/pretty_bytes.dart';
import 'package:open_file/open_file.dart';
import 'package:path/path.dart' as path;

class FilesTab extends StatelessWidget {
  final List<File> files;
  final String location;

  const FilesTab({super.key, required this.files, required this.location});

  _openFile(String filepath) {
    OpenFile.open(path.join(location, filepath));
  }

  @override
  Widget build(BuildContext context) {
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
                    value: true,
                    onChanged: completed ? null : (bool? changed) {})),
            title: Text(file.name),
            subtitle: Text(
                '${percent.toString()}% • ${prettyBytes(file.length.toDouble())}'),
            onTap: () => _openFile(file.name));
      },
    );
  }
}
