import 'package:flutter/material.dart';

class SubtitlesLoadingDialog extends StatelessWidget {
  const SubtitlesLoadingDialog({super.key});

  @override
  Widget build(BuildContext context) {
    return const AlertDialog(
      title: Text('Loading Subtitles...'),
      content: Column(
          mainAxisSize: MainAxisSize.min,
          children: [Center(child: CircularProgressIndicator())]),
    );
  }
}
