import 'package:flutter/material.dart';
import 'package:url_launcher/url_launcher.dart';

final Uri url = Uri.parse('https://github.com/G-Ray/pikatorrent/releases');

class UpdateAvailableDialog extends StatelessWidget {
  final String latestVersion;

  const UpdateAvailableDialog({super.key, required this.latestVersion});

  _handleIgnoreClick(BuildContext context) {
    Navigator.pop(context);
  }

  _handleDownloadClick(context) {
    launchUrl(url);
    Navigator.pop(context);
  }

  @override
  Widget build(BuildContext context) {
    return AlertDialog(
      title: const Text('Update available'),
      content: Text('A new version is available: $latestVersion'),
      actions: [
        TextButton(
          onPressed: () => _handleIgnoreClick(context),
          child: const Text('Ignore'),
        ),
        TextButton(
          onPressed: () => _handleDownloadClick(context),
          child: const Text('Download'),
        ),
      ],
    );
  }
}
