import 'package:flutter/material.dart';
import 'package:pikatorrent/constants/locales.dart';
import 'package:pikatorrent/dialogs/reusable/number_input.dart';
import 'package:pikatorrent/engine/session.dart';
import 'package:pikatorrent/main.dart';
import 'package:pikatorrent/models/app.dart';
import 'package:pikatorrent/models/session.dart';
import 'package:pikatorrent/screens/settings/dialogs/locale_selector.dart';
import 'package:pikatorrent/screens/settings/dialogs/maximum_active_downloads_editor.dart';
import 'package:pikatorrent/screens/settings/dialogs/peer_port.dart';
import 'package:pikatorrent/screens/settings/dialogs/reset_torrent_settings.dart';
import 'package:pikatorrent/screens/settings/dialogs/theme_selector.dart';
import 'package:pikatorrent/utils/device.dart';
import 'package:pikatorrent/utils/string_extensions.dart';
import 'package:pikatorrent/utils/update.dart';
import 'package:provider/provider.dart';
import 'package:file_picker/file_picker.dart';
import 'package:url_launcher/url_launcher.dart';
import 'package:pikatorrent/l10n/app_localizations.dart';

class SettingsScreen extends StatefulWidget {
  const SettingsScreen({super.key});

  @override
  State<SettingsScreen> createState() => _SettingsScreenState();
}

class _SettingsScreenState extends State<SettingsScreen> {
  bool canCheckForUpdate = false;
  bool showAdvancedSettings = false;

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

  void handlePeerPortSave(BuildContext context, int value) async {
    var sessionUpdate = SessionBase(peerPort: value);
    if (context.mounted) {
      var sessionModel = Provider.of<SessionModel>(context, listen: false);
      await sessionModel.session?.update(sessionUpdate);
      await sessionModel.fetchSession();
    }
  }

  void handleSpeedLimitDownSave(BuildContext context, int value) async {
    var sessionUpdate = SessionBase(speedLimitDown: value);
    if (context.mounted) {
      var sessionModel = Provider.of<SessionModel>(context, listen: false);
      await sessionModel.session?.update(sessionUpdate);
      await sessionModel.fetchSession();
    }
  }

  void handleSpeedLimitUpSave(BuildContext context, int value) async {
    var sessionUpdate = SessionBase(speedLimitUp: value);
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

  void _handleEnableSpeedLimits(bool value) async {
    var sessionUpdate =
        SessionBase(speedLimitDownEnabled: value, speedLimitUpEnabled: value);
    if (context.mounted) {
      var sessionModel = Provider.of<SessionModel>(context, listen: false);
      await sessionModel.session?.update(sessionUpdate);
      await sessionModel.fetchSession();
    }
  }

  // Dialogs
  void showThemeDialog(context) {
    final localizations = AppLocalizations.of(context)!;

    showDialog<void>(
      context: context,
      builder: (BuildContext context) {
        return AlertDialog(
          title: Text(localizations.theme),
          content: const ThemeSelector(),
          actions: <Widget>[
            TextButton(
              child: Text(localizations.cancel),
              onPressed: () {
                Navigator.of(context).pop();
              },
            ),
          ],
        );
      },
    );
  }

  void showLocaleDialog(context) {
    final localizations = AppLocalizations.of(context)!;

    showDialog<void>(
      context: context,
      builder: (BuildContext context) {
        return AlertDialog(
          title: Text(AppLocalizations.of(context)!.language),
          content: const LocaleSelector(),
          actions: <Widget>[
            TextButton(
              child: Text(localizations.cancel),
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
    final session = Provider.of<SessionModel>(context, listen: false).session;
    showDialog<void>(
      context: context,
      builder: (BuildContext context) {
        return MaximumActiveDownloadEditorDialog(
          currentValue: session?.downloadQueueSize ?? 0,
          onSave: (value) => handleMaximumActiveDownloadsSave(context, value),
        );
      },
    );
  }

  void showPeerPortDialog() {
    final session = Provider.of<SessionModel>(context, listen: false).session;
    showDialog<void>(
      context: context,
      builder: (BuildContext context) {
        return PeerPortDialog(
          currentValue: session?.peerPort ?? 0,
          onSave: (value) => handlePeerPortSave(context, value),
        );
      },
    );
  }

  void showSpeedLimitDownDialog() {
    final localizations = AppLocalizations.of(context)!;
    final session = Provider.of<SessionModel>(context, listen: false).session;
    showDialog<void>(
      context: context,
      builder: (BuildContext context) {
        return NumberInputDialog(
          title:
              '${localizations.downloadSpeed} ${localizations.kilobytesPerSecond}',
          currentValue: session?.speedLimitDown ?? 0,
          onSave: (value) => handleSpeedLimitDownSave(context, value),
        );
      },
    );
  }

  void showSpeedLimitUpDialog() {
    final localizations = AppLocalizations.of(context)!;
    final session = Provider.of<SessionModel>(context, listen: false).session;
    showDialog<void>(
      context: context,
      builder: (BuildContext context) {
        return NumberInputDialog(
          title:
              '${localizations.uploadSpeed} ${localizations.kilobytesPerSecond}',
          currentValue: session?.speedLimitUp ?? 0,
          onSave: (value) => handleSpeedLimitUpSave(context, value),
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
    final localizations = AppLocalizations.of(context)!;

    return Consumer2<AppModel, SessionModel>(
        builder: (context, app, sessionModel, child) {
      final downloadDir = sessionModel.session?.downloadDir ?? '';
      final downloadQueueSize = sessionModel.session?.downloadQueueSize ?? '';
      final peerPort = sessionModel.session?.peerPort ?? '';
      final isSpeedLimitEnabled =
          sessionModel.session?.speedLimitDownEnabled == true ||
              sessionModel.session?.speedLimitUpEnabled == true;

      return ListView(children: [
        Padding(
          padding: const EdgeInsets.only(left: 16.0),
          child: Text(localizations.appSettings,
              style: Theme.of(context).textTheme.titleLarge),
        ),
        ListTile(
            onTap: () => showThemeDialog(context),
            leading: const Icon(Icons.dark_mode),
            title: Text(localizations.theme),
            subtitle: Text(app.theme.name.capitalize())),
        ListTile(
            onTap: () => showLocaleDialog(context),
            leading: const Icon(Icons.language),
            title: Text(localizations.language),
            subtitle: Text(localeNames[app.locale] ?? app.locale)),
        // Hide update check option if app is distributed through an app store
        if (canCheckForUpdate)
          ListTile(
            leading: const Icon(Icons.update),
            title: Text(localizations.checkForUpdates),
            trailing: Switch(
                value: app.checkForUpdate,
                onChanged: _handlecheckForUpdateToggle),
            subtitle: Text(localizations.checkForUpdatesDescription),
          ),
        Padding(
          padding: const EdgeInsets.only(left: 16.0, top: 16),
          child: Text(localizations.torrentsSettings,
              style: Theme.of(context).textTheme.titleLarge),
        ),
        ListTile(
            onTap: isMobile() ? null : () => handlePickFolder(context),
            leading: const Icon(Icons.folder_open),
            title: Text(localizations.downloadDirectory),
            subtitle: Text(downloadDir)),
        ListTile(
            onTap: showMaximumActiveDownloadDialog,
            leading: const Icon(Icons.downloading),
            title: Text(localizations.maxActiveDownloads),
            subtitle: Text(downloadQueueSize.toString())),
        ListTile(
          leading: const Icon(Icons.speed),
          title: Text(
            localizations.enableSpeedLimits,
          ),
          subtitle: Text(localizations.speedLimitsDescription,
              style: isSpeedLimitEnabled
                  ? const TextStyle(color: Colors.yellow)
                  : null),
          trailing: Switch(
              value: isSpeedLimitEnabled,
              onChanged: (bool _) {
                _handleEnableSpeedLimits(!isSpeedLimitEnabled);
              }),
        ),
        ListTile(
            enabled: isSpeedLimitEnabled,
            onTap: showSpeedLimitDownDialog,
            leading: const Icon(Icons.arrow_circle_down),
            title: Text(localizations.downloadSpeedLimit),
            subtitle: Text(
                '${sessionModel.session?.speedLimitDown.toString()} ${localizations.kilobytesPerSecond}')),
        ListTile(
            enabled: isSpeedLimitEnabled,
            onTap: showSpeedLimitUpDialog,
            leading: const Icon(Icons.arrow_circle_up),
            title: Text(localizations.uploadSpeedLimit),
            subtitle: Text(
                '${sessionModel.session?.speedLimitUp.toString()} ${localizations.kilobytesPerSecond}')),
        ListTile(
            leading: const Icon(Icons.settings),
            trailing: Switch(
                value: showAdvancedSettings,
                onChanged: (v) => {
                      setState(() {
                        showAdvancedSettings = !showAdvancedSettings;
                      })
                    }),
            title: Text(localizations.showAdvancedSettings)),
        if (showAdvancedSettings) ...[
          ListTile(
              onTap: showPeerPortDialog,
              leading: const Icon(Icons.arrow_right_alt),
              title: Text(localizations.listeningPort),
              subtitle: Text(peerPort.toString())),
        ],
        ListTile(
            onTap: showResetTorrentsSettingsDialog,
            leading: const Icon(Icons.settings_backup_restore),
            title: Text(localizations.resetTorrentsSettings)),
        Padding(
          padding: const EdgeInsets.only(left: 16.0, top: 16),
          child: Text(localizations.about,
              style: Theme.of(context).textTheme.titleLarge),
        ),
        ListTile(
            leading: const Icon(Icons.bolt),
            // onTap: () => showThemeDialog(context),
            title: Text(localizations.version),
            subtitle: Text(app.version)),
        ListTile(
          leading: const Icon(Icons.favorite),
          title: Text(localizations.donate),
          subtitle: Text(localizations.donateDescription),
          onTap: () =>
              launchUrl(Uri.parse('https://github.com/sponsors/G-Ray')),
        ),
        ListTile(
            leading: const Icon(Icons.discord),
            title: Text(localizations.joinDiscord),
            onTap: () => launchUrl(Uri.parse('https://discord.gg/6HxCV4aGdy'))),
        ListTile(
          leading: const Icon(Icons.bug_report),
          title: Text(localizations.reportBug),
          onTap: () => launchUrl(Uri.parse(
              'https://github.com/G-Ray/pikatorrent/issues/new/choose')),
        ),
      ]);
    });
  }
}
