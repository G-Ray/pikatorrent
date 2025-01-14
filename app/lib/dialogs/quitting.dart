import 'package:flutter/material.dart';

class QuittingDialog extends StatelessWidget {
  const QuittingDialog({super.key});

  @override
  Widget build(BuildContext context) {
    return const AlertDialog(
      title: Text('Quitting'),
      content: Text('Please wait while PikaTorrent is stopping...'),
    );
  }
}
