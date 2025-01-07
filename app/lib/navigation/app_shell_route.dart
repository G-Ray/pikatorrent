import 'package:app_links/app_links.dart';
import 'package:flutter/material.dart';
import 'package:pikatorrent/dialogs/add_torrent.dart';
import 'package:pikatorrent/dialogs/terms_of_use.dart';
import 'package:pikatorrent/models/app.dart';
import 'package:pikatorrent/navigation/navigation.dart';
import 'package:pikatorrent/utils/app_links.dart';
import 'package:provider/provider.dart';

class AppShellRoute extends StatefulWidget {
  final Widget child;

  const AppShellRoute({super.key, required this.child});

  @override
  State<AppShellRoute> createState() => _AppShellRouteState();
}

class _AppShellRouteState extends State<AppShellRoute> {
  late AppLinks _appLinks;
  bool isTermsOfUseDialogDisplayed = false;

  @override
  void initState() {
    super.initState();
    _initAppLinks();
  }

  _initAppLinks() {
    _appLinks = AppLinks();
    _appLinks.uriLinkStream.listen((uri) async {
      var uriString = uri.toString();

      if (uriString.startsWith('magnet:')) {
        // Magnet link
        _openAddTorrentDialog(uriString, null);
      } else if (uriString.startsWith('content://') ||
        // Content uri (Android)
          uriString.startsWith('file://')) {
        _openAddTorrentDialog(null, uriString);
      } else if (uriString.startsWith(appUri)) {
        // App URI
        _openAddTorrentDialog(getTorrentLink(uriString), null);
      } else if (uriString.startsWith('/')) {
        // Filesystem path
        _openAddTorrentDialog(null, uriString);
      }
    });
  }

  _openAddTorrentDialog(String? initialMagnetLink, String? initialContentPath) {
    if (Navigator.canPop(context)) {
      // Pop current dialog, if any
      Navigator.pop(context);
    }

    showDialog(
        context: context,
        builder: (BuildContext context) {
          return AddTorrentDialog(
            initialMagnetLink: initialMagnetLink,
            initialContentPath: initialContentPath,
          );
        });

    if (isTermsOfUseDialogDisplayed) {
      // This will re-trigger the terms of use dialog, if needed.
      // This dialog should be displayed above.
      setState(() {
        isTermsOfUseDialogDisplayed = false;
      });
    }
  }

  _openTermsOfUseDialog(AppModel appModel) {
    var termsOfUseAccepted = appModel.termsOfUseAccepted;

    if (!isTermsOfUseDialogDisplayed && !termsOfUseAccepted) {
      // Avoid calling the dialog multiple times
      isTermsOfUseDialogDisplayed = true;
      WidgetsBinding.instance.addPostFrameCallback((_) {
        showDialog(
            context: context,
            barrierDismissible: false,
            builder: (BuildContext context) {
              return const TermsOfUseDialog();
            });
      });
    }
  }

  @override
  Widget build(BuildContext context) {
    return Consumer<AppModel>(builder: (context, appModel, child) {
      if (appModel.loaded) {
        _openTermsOfUseDialog(appModel);
      }
      return Navigation(child: widget.child);
    });
  }
}
