import 'package:flutter/material.dart';
import 'package:package_info_plus/package_info_plus.dart';
import 'package:pikatorrent/main.dart';
import 'package:pikatorrent/storage/shared_preferences.dart';
import 'package:window_manager/window_manager.dart';

class AppModel extends ChangeNotifier {
  ThemeMode theme = ThemeMode.system;
  bool termsOfUseAccepted = false;

  // User settings
  bool checkForUpdate = true;
  bool downloadOverWifiOnly = false;

  bool loaded = false;
  bool quitting = false;
  bool networkAvailable = false;
  String version = '';

  AppModel() {
    _loadSettings();
  }

  _loadSettings() async {
    // Load theme
    final themeName =
        await SharedPrefsStorage.getString('theme') ?? ThemeMode.system.name;
    theme = ThemeMode.values.firstWhere((e) => e.name == themeName);
    // Load terms of use status
    termsOfUseAccepted =
        await SharedPrefsStorage.getBool('termsOfUseAccepted') ??
            termsOfUseAccepted;
    // Load check for update value
    checkForUpdate =
        await SharedPrefsStorage.getBool('checkForUpdate') ?? checkForUpdate;
    downloadOverWifiOnly =
        await SharedPrefsStorage.getBool('downloadOverWifiOnly') ??
            downloadOverWifiOnly;
    loaded = true;

    // Load app version
    PackageInfo packageInfo = await PackageInfo.fromPlatform();
    version = packageInfo.version;

    notifyListeners();
  }

  void setTheme(ThemeMode value) async {
    SharedPrefsStorage.setString('theme', value.name);
    theme = value;
    notifyListeners();
  }

  void setTermsOfUseAccepted(bool value) async {
    SharedPrefsStorage.setBool('termsOfUseAccepted', value);
    termsOfUseAccepted = value;
    notifyListeners();
  }

  void setcheckForUpdate(bool value) {
    SharedPrefsStorage.setBool('checkForUpdate', value);
    checkForUpdate = value;
    notifyListeners();
  }

  void setDownloadOverWifiOnly(bool value) {
    SharedPrefsStorage.setBool('downloadOverWifiOnly', value);
    downloadOverWifiOnly = value;
    notifyListeners();
  }

  void setQuitting(bool value) {
    quitting = value;
    notifyListeners();
  }

  void setNetworkAvailable(bool value) {
    networkAvailable = value;
    notifyListeners();
  }

  void quit() async {
    await engine.dispose();
    await windowManager.destroy();
  }
}
