import 'package:file_picker/file_picker.dart';
import 'package:flutter/material.dart';
import 'package:pikatorrent/engine/engine.dart';
import 'package:pikatorrent/main.dart';

class AddTorrentDialog extends StatefulWidget {
  const AddTorrentDialog({
    super.key,
    required this.context,
  });

  final BuildContext context;

  @override
  State<AddTorrentDialog> createState() => _AddTorrentDialogState();
}

final GlobalKey<FormState> _formKey = GlobalKey<FormState>();

class _AddTorrentDialogState extends State<AddTorrentDialog> {
  late TextEditingController _torrentLinkController;

  @override
  void initState() {
    super.initState();
    _torrentLinkController = TextEditingController();
  }

  @override
  void dispose() {
    _torrentLinkController.dispose();
    super.dispose();
  }

  void _handleAddTorrent(context, String filename) async {
    try {
      var status = await engine.addTorrent(filename);

      if (status == TorrentAddedResponse.duplicated) {
        ScaffoldMessenger.of(context).showSnackBar(const SnackBar(
          content: Text('Torrent already added.'),
          backgroundColor: Colors.lightGreen,
        ));
      }

      ScaffoldMessenger.of(context).showSnackBar(const SnackBar(
        content: Text('Torrent added.'),
        backgroundColor: Colors.lightGreen,
      ));

      await engine.fetchTorrents();
    } on TorrentAddError {
      ScaffoldMessenger.of(context).showSnackBar(const SnackBar(
        content: Text('Invalid torrent.'),
        backgroundColor: Colors.orange,
      ));
    }
  }

  void _handleSelectTorrentFile(context) async {
    FilePickerResult? result = await FilePicker.platform.pickFiles(
        allowMultiple: false,
        type: FileType.custom,
        allowedExtensions: ['torrent']);
    if (result == null || result.files.first.path == null) return;

    _handleAddTorrent(context, result.files.first.path!);
    Navigator.of(context).pop();
  }

  @override
  Widget build(BuildContext context) {
    return AlertDialog(
      title: const Text('Add a torrent'),
      content: Form(
        key: _formKey,
        child: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            TextFormField(
              controller: _torrentLinkController,
              decoration: const InputDecoration(
                prefixIcon: Icon(Icons.link),
                hintText: 'magnet:// or http://',
                label: Text('Torrent link'),
                // border: OutlineInputBorder()
              ),
              validator: (String? value) {
                if (value == null || value.isEmpty) {
                  return 'Please enter a valid torrent link';
                }
                return null;
              },
            ),
            const SizedBox(height: 16),
            const Text('Or'),
            const SizedBox(height: 16),
            SizedBox(
              width: double.infinity,
              child: FilledButton(
                  onPressed: () => _handleSelectTorrentFile(context),
                  child: const Text('Select .torrent file')),
            ),
          ],
        ),
      ),
      actions: <Widget>[
        TextButton(
          child: const Text('Cancel'),
          onPressed: () {
            Navigator.of(context).pop();
          },
        ),
        TextButton(
          child: const Text('Add'),
          onPressed: () {
            if (_formKey.currentState!.validate()) {
              _handleAddTorrent(context, _torrentLinkController.text);
              Navigator.of(context).pop();
            }
          },
        ),
      ],
    );
  }
}
