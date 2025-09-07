import 'package:flutter/material.dart';
import 'package:pikatorrent/engine/torrent.dart';
import 'package:pikatorrent/l10n/app_localizations.dart';

// TODO: Label -> Tag
class AddLabelDialog extends StatefulWidget {
  const AddLabelDialog(
      {super.key,
      required this.context,
      required this.torrent,
      required this.onAddLabel});

  final BuildContext context;
  final Torrent torrent;
  final Function(String label) onAddLabel;

  @override
  State<AddLabelDialog> createState() => _AddLabelDialogState();
}

final GlobalKey<FormState> _formKey = GlobalKey<FormState>();

class _AddLabelDialogState extends State<AddLabelDialog> {
  late TextEditingController _labelController;

  @override
  void initState() {
    super.initState();
    _labelController = TextEditingController();
  }

  @override
  void dispose() {
    _labelController.dispose();
    super.dispose();
  }

  void _handleSubmit() {
    if (_formKey.currentState!.validate()) {
      widget.onAddLabel(_labelController.text);
      Navigator.of(context).pop();
    }
  }

  @override
  Widget build(BuildContext context) {
    final localizations = AppLocalizations.of(context)!;

    return AlertDialog(
      title: Text(localizations.newTag),
      content: Form(
        key: _formKey,
        child: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            TextFormField(
                controller: _labelController,
                decoration: InputDecoration(
                  prefixIcon: const Icon(Icons.label_outline),
                  hintText: '${localizations.movie}, ${localizations.music}...',
                  label: Text(localizations.tag),
                ),
                onFieldSubmitted: (value) => _handleSubmit(),
                validator: (String? value) {
                  if (value == null || value.isEmpty) {
                    return localizations.invalidText;
                  }
                  return null;
                })
          ],
        ),
      ),
      actions: <Widget>[
        TextButton(
          child: Text(localizations.cancel),
          onPressed: () {
            Navigator.of(context).pop();
          },
        ),
        TextButton(
          onPressed: _handleSubmit,
          child: Text(localizations.add),
        ),
      ],
    );
  }
}
