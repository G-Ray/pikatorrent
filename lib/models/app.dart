import 'package:flutter/material.dart';
import 'package:shared_preferences/shared_preferences.dart';

class AppModel extends ChangeNotifier {
  ThemeMode theme = ThemeMode.system;

  AppModel(ThemeMode initialTheme) {
    theme = initialTheme;
  }

  void setTheme(ThemeMode newTheme) async {
    final prefs = await SharedPreferences.getInstance();
    prefs.setString('theme', newTheme.name);
    theme = newTheme;
    notifyListeners();
  }
}