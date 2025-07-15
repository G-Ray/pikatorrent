import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

class PeerPortDialog extends StatefulWidget {
  final void Function(int) onSave;
  final int currentValue;

  const PeerPortDialog(
      {super.key, required this.onSave, required this.currentValue});

  @override
  State<PeerPortDialog> createState() => _MaximumActiveDownloadEditorState();
}

class _MaximumActiveDownloadEditorState extends State<PeerPortDialog> {
  late TextEditingController peerPort;

  @override
  void initState() {
    super.initState();
    peerPort = TextEditingController.fromValue(
        TextEditingValue(text: widget.currentValue.toString()));
  }

  @override
  void dispose() {
    peerPort.dispose();
    super.dispose();
  }

  void handleSave() async {
    widget.onSave(int.parse(peerPort.text));
  }

  @override
  Widget build(BuildContext context) {
    return AlertDialog(
      title: const Text('Incoming port'),
      content: Column(
        mainAxisSize: MainAxisSize.min,
        children: <Widget>[
          TextFormField(
            controller: peerPort,
            keyboardType: TextInputType.number,
            inputFormatters: [FilteringTextInputFormatter.digitsOnly],
            decoration: const InputDecoration(
              labelText: 'Enter a number',
            ),
            validator: (value) {
              if (value == null || value.isEmpty) {
                return 'Please enter a number';
              }
              if (int.tryParse(value) == null) {
                return 'Please enter a valid number';
              }
              return null; // Return null if the input is valid
            },
          ),
        ],
      ),
      actions: <Widget>[
        TextButton(
          child: const Text('Cancel'),
          onPressed: () {
            Navigator.of(context).pop();
          },
        ),
        TextButton(
          child: const Text('Save'),
          onPressed: () {
            Navigator.of(context).pop();
            handleSave();
          },
        ),
      ],
    );
  }
}
