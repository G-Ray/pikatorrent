import 'package:flutter/material.dart';
import 'package:pikatorrent/utils/lifecycle.dart';

class ConfirmExit extends StatelessWidget {
  const ConfirmExit({super.key});

  @override
  Widget build(BuildContext context) {
    return AlertDialog(
      title: const Text('Are you sure to stop PikaTorrent?'),
      content: const Text('All downloads will be stopped.'),
      actions: <Widget>[
        TextButton(
          onPressed: () => Navigator.of(context).pop(false),
          child: const Text('No'),
        ),
        TextButton(
          onPressed: () {
            closeApp(context);
          },
          child: const Text('Yes'),
        ),
      ],
    );
  }
}
