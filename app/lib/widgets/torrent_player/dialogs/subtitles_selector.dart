import 'package:flutter/material.dart';
import 'package:media_kit/media_kit.dart';

class SubtitlesSelectorDialog extends StatefulWidget {
  final List<SubtitleTrack> subtitles;
  final Function(SubtitleTrack) onSubtitleSelected;
  final String currentValue;
  const SubtitlesSelectorDialog(
      {super.key,
      required this.onSubtitleSelected,
      required this.currentValue,
      required this.subtitles});

  @override
  State<SubtitlesSelectorDialog> createState() =>
      _SubtitlesSelectorDialogState();
}

class _SubtitlesSelectorDialogState extends State<SubtitlesSelectorDialog> {
  @override
  Widget build(BuildContext context) {
    return AlertDialog(
      title: const Text('Subtitles'),
      content: SingleChildScrollView(
        child: Column(
          mainAxisSize: MainAxisSize.min,
          children: <Widget>[
            // Internal subtitles
            ...widget.subtitles
                .where((s) => s.id != 'auto')
                .toList()
                .map((sub) {
              return RadioListTile(
                  title: Text(
                      sub.id == 'no' ? 'No subtitle' : sub.title ?? 'Unknown'),
                  value: sub.id,
                  groupValue: widget.currentValue,
                  onChanged: (t) {
                    widget.onSubtitleSelected(sub);
                    Navigator.of(context).pop();
                  });
            }),
          ],
        ),
      ),
      actions: <Widget>[
        TextButton(
          child: const Text('Cancel'),
          onPressed: () {
            Navigator.of(context).pop();
          },
        ),
      ],
    );
  }
}
