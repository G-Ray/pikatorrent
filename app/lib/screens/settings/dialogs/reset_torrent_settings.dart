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
      content: const Column(
        mainAxisSize: MainAxisSize.min,
        children: <Widget>[Text('All torrents settings will be reset.')],
      ),
      actions: <Widget>[
        TextButton(
          child: const Text('Cancel'),
          onPressed: () {
            Navigator.of(context).pop();
          },
        ),
        TextButton(
          child: const Text('Reset'),
          onPressed: () {
            Navigator.of(context).pop();
            handleOK();
          },
        ),
      ],
    );
  }
}
