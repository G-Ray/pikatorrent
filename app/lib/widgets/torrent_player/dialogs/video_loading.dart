import 'package:flutter/material.dart';

class VideoLoadingDialog extends StatelessWidget {
  const VideoLoadingDialog({super.key});

  @override
  Widget build(BuildContext context) {
    return const AlertDialog(
      title: Text('Loading Video...'),
      content: Column(
          mainAxisSize: MainAxisSize.min,
          children: [Center(child: CircularProgressIndicator())]),
    );
  }
}
