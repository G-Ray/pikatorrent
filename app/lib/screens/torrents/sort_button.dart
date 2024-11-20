import 'package:flutter/material.dart';
import 'package:pikatorrent/screens/torrents/dialogs/sort.dart';

class SortButton extends StatelessWidget {
  const SortButton({super.key});

  _handleButtonClick(BuildContext context) {
    showDialog<void>(
      context: context,
      builder: (BuildContext context) {
        return const SortDialog();
      },
    );
  }

  @override
  Widget build(BuildContext context) {
    return IconButton(
        onPressed: () => _handleButtonClick(context),
        icon: const Icon(Icons.sort));
  }
}
