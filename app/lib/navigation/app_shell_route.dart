import 'package:app_links/app_links.dart';
import 'package:flutter/material.dart';
import 'package:pikatorrent/dialogs/add_torrent.dart';
import 'package:pikatorrent/dialogs/terms_of_use.dart';
import 'package:pikatorrent/models/app.dart';
import 'package:pikatorrent/navigation/navigation.dart';
import 'package:provider/provider.dart';

class AppShellRoute extends StatefulWidget {
  final Widget child;

  const AppShellRoute({super.key, required this.child});

  @override
  State<AppShellRoute> createState() => _AppShellRouteState();
}

class _AppShellRouteState extends State<AppShellRoute> {
  late AppLinks _appLinks;
  bool triggeredTermsOfUseDialog = false;

  @override
  void initState() {
    // TODO: implement initState
    super.initState();
    _initAppLinks();
  }

  _initAppLinks() {
    _appLinks = AppLinks();
    _appLinks.uriLinkStream.listen((uri) async {
      var uriString = uri.toString();

      if (uriString.startsWith('magnet:')) {
        _openAddTorrentDialog(uriString, null);
      } else if (uriString.startsWith('content://') ||
          uriString.startsWith('file://')) {
        _openAddTorrentDialog(null, uriString);
      }
    });
  }

  _openAddTorrentDialog(String? initialMagnetLink, String? initialContentPath) {
    WidgetsBinding.instance.addPostFrameCallback((_) {
      showDialog(
          context: context,
          builder: (BuildContext context) {
            return AddTorrentDialog(
              initialMagnetLink: initialMagnetLink,
              initialContentPath: initialContentPath,
            );
          });
    });
  }

  @override
  Widget build(BuildContext context) {
    var settingsLoaded = context.select((AppModel app) => app.loaded);
    var termsOfUseAccepted =
        context.select((AppModel app) => app.termsOfUseAccepted);

    if (settingsLoaded && !termsOfUseAccepted && !triggeredTermsOfUseDialog) {
      // Avoid calling the dialog multiple times
      triggeredTermsOfUseDialog = true;
      WidgetsBinding.instance.addPostFrameCallback((_) {
        showDialog(
            context: context,
            barrierDismissible: false,
            builder: (BuildContext context) {
              return const TermsOfUseDialog();
            });
      });
    }

    return Navigation(child: widget.child);
  }
}
