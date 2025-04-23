import 'package:flutter/material.dart';
import 'package:pikatorrent/models/app.dart';
import 'package:pikatorrent/models/torrents.dart';
import 'package:provider/provider.dart';
import 'package:window_manager/window_manager.dart';

void closeApp(BuildContext context) async {
  final appModel = Provider.of<AppModel>(context, listen: false);
  final torrentModel = Provider.of<TorrentsModel>(context, listen: false);
  torrentModel.stopTimer();
  appModel.setQuitting(true);

  bool isPreventClose = await windowManager.isPreventClose();
  if (isPreventClose) {
    appModel.quit();
  }
}
