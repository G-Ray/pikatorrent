import 'dart:convert';
import 'dart:io';

import 'package:content_resolver/content_resolver.dart';
import 'package:file_picker/file_picker.dart';
import 'package:flutter/material.dart';
import 'package:pikatorrent/engine/engine.dart';
import 'package:pikatorrent/models/session.dart';
import 'package:pikatorrent/models/torrents.dart';
import 'package:pikatorrent/utils/app_links.dart';
import 'package:provider/provider.dart';

class AddTorrentDialog extends StatefulWidget {
  final String? initialMagnetLink;
  final String? initialContentPath;

  const AddTorrentDialog(
      {super.key, this.initialMagnetLink, this.initialContentPath});

  @override
  State<AddTorrentDialog> createState() => _AddTorrentDialogState();
}

class _AddTorrentDialogState extends State<AddTorrentDialog> {
  late TextEditingController _torrentLinkController;
  String? _filename;
  String? pickedDownloadDir;
  String _torrentLink = ''; // Track a state to trigger updates
  final GlobalKey<FormState> _formKey = GlobalKey<FormState>();

  @override
  void initState() {
    super.initState();
    _torrentLinkController = TextEditingController();

    _torrentLinkController.addListener(() {
      setState(() {
        _torrentLink = _torrentLinkController.text;
      });
    });

    if (widget.initialMagnetLink != null) {
      _torrentLinkController.text = widget.initialMagnetLink!;
    }

    setState(() {
      _filename = widget.initialContentPath;
    });
  }

  @override
  void dispose() {
    _torrentLinkController.dispose();
    super.dispose();
  }

  void _handleAddTorrent(context) async {
    try {
      String? metainfo;
      TorrentAddedResponse status;
      if (_filename != null) {
        // From a .torrent file
        if (_filename!.startsWith('content:')) {
          // Android
          final Content content =
              await ContentResolver.resolveContent(_filename!);
          metainfo = base64Encode(content.data);
        } else {
          final file = File(_filename!);
          final content = await file.readAsBytes();
          metainfo = base64Encode(content);
        }

        status = await Provider.of<TorrentsModel>(context, listen: false)
            .addTorrent(
                _torrentLinkController.text, metainfo, pickedDownloadDir);
      } else {
        // From a link (either app link or magnet)
        final magnet = isAppLink(_torrentLinkController.text)
            ? getTorrentLink(_torrentLinkController.text)
            : _torrentLinkController.text;
        status = await Provider.of<TorrentsModel>(context, listen: false)
            .addTorrent(magnet, metainfo, pickedDownloadDir);
      }

      if (status == TorrentAddedResponse.duplicated) {
        ScaffoldMessenger.of(context).showSnackBar(const SnackBar(
          content: Text('Torrent already added.'),
          backgroundColor: Colors.lightGreen,
        ));
      } else {
        ScaffoldMessenger.of(context).showSnackBar(const SnackBar(
          content: Text('Torrent added.'),
          backgroundColor: Colors.lightGreen,
        ));
      }
    } on TorrentAddError {
      ScaffoldMessenger.of(context).showSnackBar(const SnackBar(
        content: Text('Invalid torrent.'),
        backgroundColor: Colors.orange,
      ));
    }

    await Provider.of<TorrentsModel>(context, listen: false).fetchTorrents();

    Navigator.of(context).pop();
  }

  void _handleSelectTorrentFile(context) async {
    FilePickerResult? result = await FilePicker.platform.pickFiles(
        allowMultiple: false,
        type: FileType.custom,
        allowedExtensions: ['torrent']);
    if (result == null || result.files.first.path == null) return;

    setState(() {
      _filename = result.files.first.path;
    });
  }

  void _handlePickDirectory() async {
    String? selectedDirectory = await FilePicker.platform
        .getDirectoryPath(dialogTitle: 'Download directory picker');

    if (selectedDirectory == null) return;
    setState(() {
      pickedDownloadDir = selectedDirectory;
    });
  }

  Widget _buildTorrentLinkInput() {
    return TextFormField(
      enabled: _filename == null || _filename!.isEmpty,
      controller: _torrentLinkController,
      decoration: InputDecoration(
        prefixIcon: const Icon(Icons.link),
        hintText: 'magnet:// or https://',
        label: const Text('Torrent link'),
        suffixIcon: _torrentLinkController.text.isNotEmpty
            ? IconButton(
                onPressed: () => _torrentLinkController.clear(),
                icon: const Icon(Icons.clear),
              )
            : null,
      ),
    );
  }

  Widget _buildFileInput(BuildContext context) {
    return Row(
      children: [
        Expanded(
          child: FilledButton(
              onPressed: _torrentLink.isEmpty
                  ? () => _handleSelectTorrentFile(context)
                  : null,
              child: Text(
                _filename != null ? _filename! : 'Select .torrent file',
                overflow: TextOverflow.ellipsis,
              )),
        ),
        if (_filename != null)
          Row(
            children: [
              const SizedBox(
                width: 8,
              ),
              IconButton(
                onPressed: () => {
                  setState(() {
                    _filename = null;
                  })
                },
                icon: const Icon(Icons.clear),
              ),
            ],
          )
      ],
    );
  }

  _buildInputsSeparator() {
    return const Column(
        children: [SizedBox(height: 16), Text('Or'), SizedBox(height: 16)]);
  }

  @override
  Widget build(BuildContext context) {
    var downloadDir = pickedDownloadDir ??
        Provider.of<SessionModel>(context, listen: true).session?.downloadDir ??
        '';

    var isValid = _filename != null || _torrentLink.isNotEmpty;

    return AlertDialog(
      title: const Text('Add a torrent'),
      content: SizedBox(
        width: 480,
        child: Form(
          key: _formKey,
          child: Column(
            mainAxisSize: MainAxisSize.min,
            children: [
              _buildTorrentLinkInput(),
              _buildInputsSeparator(),
              _buildFileInput(context),
              if (!Platform.isAndroid) const SizedBox(height: 16),
              if (!Platform.isAndroid)
                Row(
                  children: [
                    const Text('Destination:'),
                    const SizedBox(width: 16),
                    Expanded(
                      child: TextButton(
                          onPressed: _handlePickDirectory,
                          child: Text(
                            downloadDir,
                            overflow: TextOverflow.ellipsis,
                          )),
                    )
                  ],
                )
            ],
          ),
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
          onPressed: isValid
              ? () {
                  if (_formKey.currentState!.validate()) {
                    _handleAddTorrent(context);
                  }
                }
              : null,
          child: const Text('Download'),
        ),
      ],
    );
  }
}
