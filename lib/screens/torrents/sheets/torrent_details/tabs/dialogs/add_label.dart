import 'package:flutter/material.dart';
import 'package:pikatorrent/engine/torrent.dart';

class AddLabelDialog extends StatefulWidget {
  const AddLabelDialog({super.key,
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
    return AlertDialog(
      title: const Text('New label'),
      content: Form(
        key: _formKey,
        child: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            TextFormField(
                controller: _labelController,
                decoration: const InputDecoration(
                  prefixIcon: Icon(Icons.label_outline),
                  hintText: 'Movie, Music...',
                  label: Text('Label'),
                ),
                onFieldSubmitted: (value) => _handleSubmit(),
                validator: (String? value) {
                  if (value == null || value.isEmpty) {
                    return 'Please enter a valid text';
                  }
                  return null;
                })
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
        TextButton(
          onPressed: _handleSubmit,
          child: const Text('Add'),
        ),
      ],
    );
  }
}
