import 'package:flutter/material.dart';
import 'package:pikatorrent/storage/shared_preferences.dart';

class AppModel extends ChangeNotifier {
  ThemeMode theme = ThemeMode.system;

  AppModel() {
    _loadSettings();
  }

  _loadSettings() async {
    // Load theme
    var themeName =
        await SharedPrefsStorage.getString('theme') ?? ThemeMode.system.name;
    theme = ThemeMode.values.firstWhere((e) => e.name == themeName);

    notifyListeners();
  }

  void setTheme(ThemeMode value) async {
    SharedPrefsStorage.setString('theme', value.name);
    theme = value;
    notifyListeners();
  }
}
