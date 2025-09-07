import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:pikatorrent/l10n/app_localizations.dart';

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
    final localizations = AppLocalizations.of(context)!;
    return AlertDialog(
      title: Text(localizations.incomingPort),
      content: Column(
        mainAxisSize: MainAxisSize.min,
        children: <Widget>[
          TextFormField(
            controller: peerPort,
            keyboardType: TextInputType.number,
            inputFormatters: [FilteringTextInputFormatter.digitsOnly],
            decoration: InputDecoration(
              labelText: localizations.enterNumber,
            ),
            validator: (value) {
              if (value == null || value.isEmpty) {
                return localizations.emptyNumber;
              }
              if (int.tryParse(value) == null) {
                return localizations.invalidNumber;
              }
              return null; // Return null if the input is valid
            },
          ),
        ],
      ),
      actions: <Widget>[
        TextButton(
          child: Text(localizations.cancel),
          onPressed: () {
            Navigator.of(context).pop();
          },
        ),
        TextButton(
          child: Text(localizations.save),
          onPressed: () {
            Navigator.of(context).pop();
            handleSave();
          },
        ),
      ],
    );
  }
}
