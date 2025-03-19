import 'package:flutter/material.dart';
import 'package:window_manager/window_manager.dart';

class QuittingDialog extends StatelessWidget {
  const QuittingDialog({super.key});

  @override
  Widget build(BuildContext context) {
    return AlertDialog(
      title: const Text('Quitting'),
      content: const Column(mainAxisSize: MainAxisSize.min, children: [
        Text('Please wait while PikaTorrent is stopping...'),
        CircularProgressIndicator()
      ]),
      actions: [
        TextButton(
          child: const Text('Force quit'),
          onPressed: () {
            windowManager.destroy();
          },
        ),
      ],
    );
  }
}
