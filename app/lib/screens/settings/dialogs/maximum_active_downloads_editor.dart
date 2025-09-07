import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:pikatorrent/l10n/app_localizations.dart';

class MaximumActiveDownloadEditorDialog extends StatefulWidget {
  final void Function(int) onSave;
  final int currentValue;

  const MaximumActiveDownloadEditorDialog(
      {super.key, required this.onSave, required this.currentValue});

  @override
  State<MaximumActiveDownloadEditorDialog> createState() =>
      _MaximumActiveDownloadEditorState();
}

class _MaximumActiveDownloadEditorState
    extends State<MaximumActiveDownloadEditorDialog> {
  late TextEditingController _maximumActiveDownloadsController;

  @override
  void initState() {
    super.initState();
    _maximumActiveDownloadsController = TextEditingController.fromValue(
        TextEditingValue(text: widget.currentValue.toString()));
  }

  @override
  void dispose() {
    _maximumActiveDownloadsController.dispose();
    super.dispose();
  }

  void handleSave() async {
    widget.onSave(int.parse(_maximumActiveDownloadsController.text));
  }

  @override
  Widget build(BuildContext context) {
    final localizations = AppLocalizations.of(context)!;

    return AlertDialog(
      title: Text(localizations.maximumActiveDownloads),
      content: Column(
        mainAxisSize: MainAxisSize.min,
        children: <Widget>[
          TextFormField(
            controller: _maximumActiveDownloadsController,
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
