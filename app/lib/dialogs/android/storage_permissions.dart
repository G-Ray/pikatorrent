import 'package:flutter/material.dart';
import 'package:permission_handler/permission_handler.dart';

class StoragePermissionDialog extends StatelessWidget {
  final bool isPermanentlyDenied;

  const StoragePermissionDialog(
      {super.key, required this.isPermanentlyDenied});

  _requestPermission(BuildContext context) {
    if (isPermanentlyDenied) {
      openAppSettings();
    } else {
      Permission.storage.request();
    }

    Navigator.of(context).pop();
  }

  @override
  Widget build(BuildContext context) {
    return AlertDialog(
      content:
          const Text('PikaTorrent needs storage access to download files.'),
      actions: [
        TextButton(
          onPressed: () => _requestPermission(context),
          child: Text(isPermanentlyDenied ? 'Open settings' : 'Continue'),
        ),
      ],
    );
  }
}
