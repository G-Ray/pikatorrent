import 'dart:io';

import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:package_info_plus/package_info_plus.dart';
import 'package:pikatorrent/main.dart';
import 'package:pikatorrent/platforms/android/foreground_service.dart';
import 'package:pikatorrent/platforms/desktop/tray.dart';
import 'package:pikatorrent/storage/shared_preferences.dart';
import 'package:pikatorrent/utils/device.dart';
import 'package:window_manager/window_manager.dart';

class AppModel extends ChangeNotifier {
  ThemeMode theme = ThemeMode.system;
  bool termsOfUseAccepted = false;
  bool checkForUpdate = true;
  bool loaded = false;
  bool quitting = false;
  String locale = 'en';
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
    locale = await SharedPrefsStorage.getString('locale') ?? locale;
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

  void setQuitting(bool value) {
    quitting = value;
    notifyListeners();
  }

  void setLocale(String value) {
    SharedPrefsStorage.setString('locale', value);
    locale = value;
    notifyListeners();
  }

  void quitGracefully() async {
    await engine.dispose();
    quit();
  }

  void quit() async {
    if (isDesktop()) {
      await closeTray();
      // See https://github.com/leanflutter/window_manager/issues/478
      // calling only close seems to crash the app on macos,
      // meanwhile calling destroy crashes on windows.
      if (Platform.isWindows) {
        await windowManager.setPreventClose(false);
        await windowManager.close();
      } else {
        await windowManager.destroy();
      }
    } else {
      if (Platform.isAndroid) {
        await stopForegroundService();
      }
      SystemNavigator.pop();
    }
  }
}
