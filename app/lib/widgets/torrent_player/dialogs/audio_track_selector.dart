import 'package:flutter/material.dart';
import 'package:media_kit/media_kit.dart';

getTitle(AudioTrack track) {
  if (track.id == 'auto') {
    return 'auto';
  }

  if (track.id == 'no') {
    return 'No audio';
  }

  return track.title ?? 'Unknown';
}

class AudioTrackSelectorDialog extends StatefulWidget {
  final List<AudioTrack> tracks;
  final Function(AudioTrack) onTrackSelected;
  final String currentValue;
  const AudioTrackSelectorDialog(
      {super.key,
      required this.onTrackSelected,
      required this.currentValue,
      required this.tracks});

  @override
  State<AudioTrackSelectorDialog> createState() =>
      _AudioTrackSelectorDialogState();
}

class _AudioTrackSelectorDialogState extends State<AudioTrackSelectorDialog> {
  @override
  Widget build(BuildContext context) {
    return AlertDialog(
      title: const Text('Audio tracks'),
      content: SingleChildScrollView(
        child: Column(
          mainAxisSize: MainAxisSize.min,
          children: <Widget>[
            ...widget.tracks.map((track) {
              return RadioListTile(
                  title: Text(getTitle(track)),
                  value: track.id,
                  groupValue: widget.currentValue,
                  onChanged: (t) {
                    widget.onTrackSelected(track);
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
