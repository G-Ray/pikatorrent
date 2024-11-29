import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:pikatorrent/models/app.dart';
import 'package:provider/provider.dart';

class TermsOfUseDialog extends StatelessWidget {
  const TermsOfUseDialog({super.key});

  _handleRefuseClick() {
    SystemNavigator.pop();
  }

  _handleAcceptClick(context) {
    Provider.of<AppModel>(context, listen: false).setTermsOfUseAccepted(true);
    Navigator.of(context).pop();
  }

  @override
  Widget build(BuildContext context) {
    return AlertDialog(
      title: const Text('Terms of use'),
      content: const Text(
          'By using PikaTorrent, you accept the content you download or share is your sole responsibility.'),
      actions: [
        TextButton(
          onPressed: _handleRefuseClick,
          child: const Text('Refuse'),
        ),
        TextButton(
          onPressed: () => _handleAcceptClick(context),
          child: const Text('Accept'),
        ),
      ],
    );
  }
}
