import 'package:flutter/material.dart';
import 'package:pikatorrent/models/app.dart';
import 'package:provider/provider.dart';

class ThemeSelector extends StatefulWidget {
  const ThemeSelector({super.key});

  @override
  State<ThemeSelector> createState() => _ThemeSelectorState();
}

class _ThemeSelectorState extends State<ThemeSelector> {
  handleChange(ThemeMode? newTheme) {
    if (newTheme == null) return;
    Provider.of<AppModel>(context, listen: false).setTheme(newTheme);
    Navigator.of(context).pop();
  }

  @override
  Widget build(BuildContext context) {
    return Consumer<AppModel>(builder: (context, app, child) {
      var groupValue = app.theme;
      return Column(
        mainAxisSize: MainAxisSize.min,
        children: <Widget>[
          RadioListTile<ThemeMode>(
              title: const Text('System'),
              value: ThemeMode.system,
              groupValue: groupValue,
              onChanged: handleChange),
          RadioListTile<ThemeMode>(
              title: const Text('Light'),
              value: ThemeMode.light,
              groupValue: groupValue,
              onChanged: handleChange),
          RadioListTile<ThemeMode>(
              title: const Text('Dark'),
              value: ThemeMode.dark,
              groupValue: groupValue,
              onChanged: handleChange),
        ],
      );
    });
  }
}
