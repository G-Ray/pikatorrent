import 'package:flutter/material.dart';
import 'package:pikatorrent/dialogs/add_torrent.dart';
import 'package:pikatorrent/utils/device.dart';

class AddTorrentButton extends StatelessWidget {
  const AddTorrentButton({super.key});

  @override
  Widget build(BuildContext context) {
    return FloatingActionButton(
      onPressed: () {
        showDialog(
            context: context,
            builder: (BuildContext context) {
              return const AddTorrentDialog();
            });
      },
      tooltip: 'Add Torrent',
      shape: isMobileSize(context) ? const CircleBorder() : null,
      child: const Icon(Icons.add),
    );
  }
}