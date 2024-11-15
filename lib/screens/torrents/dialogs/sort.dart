import 'package:flutter/material.dart';
import 'package:pikatorrent/models/torrents.dart';
import 'package:provider/provider.dart';

class SortDialog extends StatefulWidget {
  const SortDialog({super.key});

  @override
  State<SortDialog> createState() => _SortDialogState();
}

class _SortDialogState extends State<SortDialog> {
  Sort selectedSort = Sort.addedDate;
  bool reverseSort = false;

  @override
  void initState() {
    super.initState();
    selectedSort = Provider.of<TorrentsModel>(context, listen: false).sort;
    reverseSort =
        Provider.of<TorrentsModel>(context, listen: false).reverseSort;
  }

  _handleChange(Sort? sort) {
    if (sort == null) return;
    setState(() {
      selectedSort = sort;
    });
  }

  void _handleReverseSortChange(bool value) {
    setState(() {
      reverseSort = value;
    });
  }

  _handleApply(context) {
    Provider.of<TorrentsModel>(context, listen: false)
        .setSort(selectedSort, reverseSort);
    Navigator.of(context).pop();
  }

  @override
  Widget build(BuildContext context) {
    return Consumer<TorrentsModel>(builder: (context, torrentsModel, child) {
      var groupValue = selectedSort;

      return AlertDialog(
        title: const Text('Sort'),
        content: Column(
          mainAxisSize: MainAxisSize.min,
          children: <Widget>[
            RadioListTile<Sort>(
                title: const Text('Date added'),
                value: Sort.addedDate,
                groupValue: groupValue,
                onChanged: _handleChange),
            RadioListTile<Sort>(
                title: const Text('Progress'),
                value: Sort.progress,
                groupValue: groupValue,
                onChanged: _handleChange),
            RadioListTile<Sort>(
                title: const Text('Size'),
                value: Sort.size,
                groupValue: groupValue,
                onChanged: _handleChange),
            Row(
              mainAxisAlignment: MainAxisAlignment.end,
              children: [
                const Text('Reverse order'),
                const SizedBox(width: 8),
                Switch(value: reverseSort, onChanged: _handleReverseSortChange),
              ],
            )
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
            child: const Text('Apply'),
            onPressed: () => _handleApply(context),
          ),
        ],
      );
    });
  }
}
