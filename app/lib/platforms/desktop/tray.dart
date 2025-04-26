// import 'package:flutter/material.dart' hide MenuItem;
import 'dart:io';

import 'package:flutter/widgets.dart';
import 'package:pikatorrent/utils/device.dart';
import 'package:pikatorrent/utils/lifecycle.dart';
import 'package:tray_manager/tray_manager.dart';
import 'package:window_manager/window_manager.dart';

initTray(BuildContext context) async {
  if (!isDesktop()) return;

  try {
    final listener = AppTrayListener(context: context);
    trayManager.addListener(listener);
    await trayManager.setIcon(
      Platform.isWindows ? 'assets/tray_icon.ico' : 'assets/tray_icon.png',
    );

    if (Platform.isWindows || Platform.isMacOS) {
      await trayManager.setToolTip('PikaTorrent');
    }

    Menu menu = Menu(
      items: [
        MenuItem(
          key: 'show_window',
          label: 'Show Window',
        ),
        MenuItem.separator(),
        MenuItem(
          key: 'exit_app',
          label: 'Exit App',
        ),
      ],
    );

    await trayManager.setContextMenu(menu);
  } catch (e) {
    debugPrint(e.toString());
  }
}

class AppTrayListener extends TrayListener {
  final BuildContext context;

  AppTrayListener({required this.context});

  @override
  void onTrayMenuItemClick(MenuItem menuItem) {
    debugPrint('onTrayMenuItemClick ${menuItem.key}');
    if (menuItem.key == 'show_window') {
      windowManager.focus();
    } else if (menuItem.key == 'exit_app') {
      windowManager.focus();
      closeApp(context);
    }
  }

  @override
  void onTrayIconMouseDown() {
    windowManager.focus();
  }

  @override
  @override
  void onTrayIconRightMouseDown() {
    // bringAppToFront should be set until 
    // https://github.com/leanflutter/tray_manager/issues/63 is resolved
    trayManager.popUpContextMenu(bringAppToFront: true);
  }
}
