import 'package:flutter/material.dart';
import 'package:pikatorrent/models/app.dart';
import 'package:provider/provider.dart';

class QuittingDialog extends StatelessWidget {
  const QuittingDialog({super.key});

  @override
  Widget build(BuildContext context) {
    return AlertDialog(
      title: const Text('Quitting'),
      content:
          const Column(mainAxisSize: MainAxisSize.min, spacing: 16, children: [
        Text('Please wait while PikaTorrent is stopping...'),
        CircularProgressIndicator()
      ]),
      actions: [
        TextButton(
          child: const Text('Force quit'),
          onPressed: () {
            Provider.of<AppModel>(context, listen: false).quit();
          },
        ),
      ],
    );
  }
}
