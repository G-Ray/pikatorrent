import 'package:flutter/material.dart';
import 'package:pikatorrent/engine/session.dart';
import 'package:pikatorrent/main.dart';
import 'package:pikatorrent/models/app.dart';
import 'package:pikatorrent/models/session.dart';
import 'package:pikatorrent/screens/settings/dialogs/maximum_active_downloads_editor.dart';
import 'package:pikatorrent/screens/settings/dialogs/reset_torrent_settings.dart';
import 'package:pikatorrent/screens/settings/dialogs/theme_selector.dart';
import 'package:pikatorrent/utils/device.dart';
import 'package:pikatorrent/utils/string_extensions.dart';
import 'package:pikatorrent/utils/update.dart';
import 'package:provider/provider.dart';
import 'package:file_picker/file_picker.dart';
import 'package:url_launcher/url_launcher.dart';

class SettingsScreen extends StatefulWidget {
  const SettingsScreen({super.key});

  @override
  State<SettingsScreen> createState() => _SettingsScreenState();
}

class _SettingsScreenState extends State<SettingsScreen> {
  bool canCheckForUpdate = false;

  @override
  void initState() {
    super.initState();
    _init();
  }

  _init() async {
    bool isFromAppStore = await isDistributedFromAppStore();
    setState(() {
      canCheckForUpdate = !isFromAppStore;
    });
  }

  // Handlers
  void handlePickFolder(BuildContext context) async {
    String? selectedDirectory = await FilePicker.platform
        .getDirectoryPath(dialogTitle: 'Download directory picker');

    if (selectedDirectory == null) return;

    var sessionUpdate = SessionBase(downloadDir: selectedDirectory);
    if (context.mounted) {
      var sessionModel = Provider.of<SessionModel>(context, listen: false);
      await sessionModel.session?.update(sessionUpdate);
      await sessionModel.fetchSession();
    }
  }

  void handleMaximumActiveDownloadsSave(BuildContext context, int value) async {
    var sessionUpdate = SessionBase(downloadQueueSize: value);
    if (context.mounted) {
      var sessionModel = Provider.of<SessionModel>(context, listen: false);
      await sessionModel.session?.update(sessionUpdate);
      await sessionModel.fetchSession();
    }
  }

  void handleResetTorrentsSettings(BuildContext context) async {
    await engine.resetSettings();
    if (context.mounted) {
      var sessionModel = Provider.of<SessionModel>(context, listen: false);
      await sessionModel.fetchSession();
    }
  }

  // Dialogs
  void showThemeDialog(context) {
    showDialog<void>(
      context: context,
      builder: (BuildContext context) {
        return AlertDialog(
          title: const Text('Theme'),
          content: const ThemeSelector(),
          // contentPadding:
          //     const EdgeInsets.symmetric(horizontal: 0, vertical: 16),
          actions: <Widget>[
            TextButton(
              child: const Text('Cancel'),
              onPressed: () {
                Navigator.of(context).pop();
              },
            ),
          ],
        );
      },
    );
  }

  void showMaximumActiveDownloadDialog() {
    showDialog<void>(
      context: context,
      builder: (BuildContext context) {
        return MaximumActiveDownloadEditorDialog(
          onSave: (value) => handleMaximumActiveDownloadsSave(context, value),
        );
      },
    );
  }

  void showResetTorrentsSettingsDialog() {
    showDialog<void>(
      context: context,
      builder: (BuildContext context) {
        return ResetTorrentsSettingsDialog(
          onOK: () => handleResetTorrentsSettings(context),
        );
      },
    );
  }

  void _handlecheckForUpdateToggle(bool value) {
    var appModel = Provider.of<AppModel>(context, listen: false);
    appModel.setcheckForUpdate(value);
  }

  @override
  Widget build(BuildContext context) {
    return Consumer2<AppModel, SessionModel>(
        builder: (context, app, sessionModel, child) {
      var downloadDir = sessionModel.session?.downloadDir ?? '';
      var downloadQueueSize = sessionModel.session?.downloadQueueSize ?? '';

      return ListView(children: [
        Padding(
          padding: const EdgeInsets.only(left: 16.0),
          child: Text('App settings',
              style: Theme.of(context).textTheme.titleLarge),
        ),
        ListTile(
            onTap: () => showThemeDialog(context),
            leading: const Icon(Icons.dark_mode),
            title: const Text('Theme'),
            subtitle: Text(app.theme.name.capitalize())),
        // Hide update check option if app is distributed through an app store
        if (canCheckForUpdate)
          ListTile(
              leading: const Icon(Icons.update),
              title: const Text('Check for update'),
              trailing: Switch(
                  value: app.checkForUpdate,
                  onChanged: _handlecheckForUpdateToggle),
              subtitle:
                  const Text('Be notified when a new version is available')),
        Padding(
          padding: const EdgeInsets.only(left: 16.0, top: 16),
          child: Text('Torrents settings',
              style: Theme.of(context).textTheme.titleLarge),
        ),
        ListTile(
            onTap: isMobile()? null : () => handlePickFolder(context),
            leading: const Icon(Icons.folder_open),
            title: const Text('Download directory'),
            subtitle: Text(downloadDir)),
        ListTile(
            onTap: showMaximumActiveDownloadDialog,
            leading: const Icon(Icons.downloading),
            title: const Text('Maximum active downloads'),
            subtitle: Text(downloadQueueSize.toString())),
        ListTile(
            onTap: showResetTorrentsSettingsDialog,
            leading: const Icon(Icons.settings_backup_restore),
            title: const Text('Reset torrents settings')),
        Padding(
          padding: const EdgeInsets.only(left: 16.0, top: 16),
          child: Text('About', style: Theme.of(context).textTheme.titleLarge),
        ),
        ListTile(
            leading: const Icon(Icons.bolt),
            // onTap: () => showThemeDialog(context),
            title: const Text('Version'),
            subtitle: Text(app.version)),
        ListTile(
          leading: const Icon(Icons.favorite),
          title: const Text('Donate'),
          subtitle: const Text('Support us to improve PikaTorrent'),
          onTap: () =>
              launchUrl(Uri.parse('https://github.com/sponsors/G-Ray')),
        ),
        ListTile(
            leading: const Icon(Icons.discord),
            title: const Text('Join our Discord'),
            onTap: () => launchUrl(Uri.parse('https://discord.gg/6HxCV4aGdy'))),
        ListTile(
          leading: const Icon(Icons.bug_report),
          title: const Text('Report a bug or feature request'),
          onTap: () => launchUrl(Uri.parse(
              'https://github.com/G-Ray/pikatorrent/issues/new/choose')),
        ),
      ]);
    });
  }
}
