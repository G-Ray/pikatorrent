import 'package:flutter/material.dart';

class ResetTorrentsSettingsDialog extends StatelessWidget {
  final Function onOK;

  const ResetTorrentsSettingsDialog({super.key, required this.onOK});

  void handleOK() async {
    onOK();
  }

  @override
  Widget build(BuildContext context) {
    return AlertDialog(
      title: const Text('Reset torrents settings'),
      content: const Column(
        mainAxisSize: MainAxisSize.min,
        children: <Widget>[Text('All torrents settings will be reset. Torrents will be stopped and restarted.')],
      ),
      actions: <Widget>[
        TextButton(
          child: const Text('Cancel'),
          onPressed: () {
            Navigator.of(context).pop();
          },
        ),
        TextButton(
          child: const Text('OK'),
          onPressed: () {
            Navigator.of(context).pop();
            handleOK();
          },
        ),
      ],
    );
  }
}
