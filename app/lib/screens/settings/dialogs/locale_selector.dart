import 'package:flutter/material.dart';
import 'package:pikatorrent/l10n/app_localizations.dart';
import 'package:pikatorrent/models/app.dart';
import 'package:provider/provider.dart';

import 'package:pikatorrent/constants/locales.dart';

class LocaleSelector extends StatefulWidget {
  const LocaleSelector({super.key});

  @override
  State<LocaleSelector> createState() => _LocaleSelectorState();
}

class _LocaleSelectorState extends State<LocaleSelector> {
  handleChange(String? locale) {
    if (locale == null) return;
    Provider.of<AppModel>(context, listen: false).setLocale(locale);
    Navigator.of(context).pop();
  }

  @override
  Widget build(BuildContext context) {
    return Consumer<AppModel>(builder: (context, app, child) {
      var groupValue = app.locale;
      return Column(
        mainAxisSize: MainAxisSize.min,
        children: [
          ...AppLocalizations.supportedLocales.map((locale) {
            return RadioListTile<String>(
                title:
                    Text(localeNames[locale.toString()] ?? locale.toString()),
                value: locale.toString(),
                groupValue: groupValue,
                onChanged: handleChange);
          })
        ],
      );
    });
  }
}
