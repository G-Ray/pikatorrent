import 'dart:io';

import 'package:flutter/material.dart';
import 'package:permission_handler/permission_handler.dart';
import 'package:pikatorrent/dialogs/add_torrent.dart';
import 'package:pikatorrent/dialogs/android/storage_permissions.dart';
import 'package:pikatorrent/utils/device.dart';

class AddTorrentButton extends StatelessWidget {
  const AddTorrentButton({super.key});

  _handleClick(BuildContext context) async {
    if (Platform.isAndroid && await Permission.storage.isGranted == false) {
      var isPermanentlyDenied = await Permission.storage.isPermanentlyDenied;
      if (context.mounted) {
        // Request storage permissions
        showDialog(
            context: context,
            builder: (BuildContext context) {
              return StoragePermissionDialog(
                  isPermanentlyDenied: isPermanentlyDenied);
            });
      }
    } else if (context.mounted) {
      showDialog(
          context: context,
          builder: (BuildContext context) {
            return const AddTorrentDialog();
          });
    }
  }

  @override
  Widget build(BuildContext context) {
    return FloatingActionButton(
      onPressed: () => _handleClick(context),
      tooltip: 'Add Torrent',
      shape: isMobileSize(context) ? const CircleBorder() : null,
      child: const Icon(Icons.add),
    );
  }
}
