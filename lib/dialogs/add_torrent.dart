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

  void _handleAddTorrent(context) async {
    try {
      var status = await engine.addTorrent(_torrentLinkController.text);

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

  @override
  Widget build(BuildContext context) {
    return AlertDialog(
      title: const Text('Add a torrent'),
      content: Form(
        key: _formKey,
        child: TextFormField(
          controller: _torrentLinkController,
          autofocus: true,
          decoration: const InputDecoration(
              prefixIcon: Icon(Icons.link),
              hintText: 'magnet:// or http://',
              label: Text('Torrent link'),
              border: OutlineInputBorder()),
          validator: (String? value) {
            if (value == null || value.isEmpty) {
              return 'Please enter a valid torrent link';
            }
            return null;
          },
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
              _handleAddTorrent(context);
              Navigator.of(context).pop();
            }
          },
        ),
      ],
    );
  }
}
