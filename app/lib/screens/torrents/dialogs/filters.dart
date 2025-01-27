import 'package:flutter/material.dart';
import 'package:pikatorrent/models/torrents.dart';
import 'package:provider/provider.dart';

class FiltersDialog extends StatefulWidget {
  const FiltersDialog({super.key});

  @override
  State<FiltersDialog> createState() => _FiltersDialogState();
}

class _FiltersDialogState extends State<FiltersDialog> {
  Filters filters = Filters(labels: {});

  @override
  void initState() {
    super.initState();
    var torrentsModel = Provider.of<TorrentsModel>(context, listen: false);
    // Handle a copy of  filters until we apply filters
    filters = Filters.copy(torrentsModel.filters);
  }

  _handleApply(context) {
    Provider.of<TorrentsModel>(context, listen: false).setFilters(filters);
    Navigator.of(context).pop();
  }

  handleFilterChipSelected(bool selected, String label) {
    selected ? filters.addLabel(label) : filters.removeLabel(label);

    setState(() {
      filters = filters;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Consumer<TorrentsModel>(builder: (context, torrentsModel, child) {
      return AlertDialog(
        title: const Text('Filters'),
        content: torrentsModel.labels.isEmpty
            ? const Text('No tags added yet. Try adding tags to a torrent.')
            : Wrap(
                spacing: 8.0, // gap between adjacent chips
                runSpacing: 4.0,
                children: [
                    ...torrentsModel.labels.map((String label) => FilterChip(
                          label: Text(label),
                          selected: filters.labels.contains(label),
                          onSelected: (bool selected) =>
                              handleFilterChipSelected(selected, label),
                        ))
                  ]),
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
