import 'dart:io';

import 'package:flutter/material.dart';
import 'package:pikatorrent/engine/engine.dart';
import 'package:pikatorrent/engine/transmission/transmission.dart';
import 'package:pikatorrent/models/app.dart';
import 'package:pikatorrent/models/session.dart';
import 'package:pikatorrent/models/torrents.dart';
import 'package:pikatorrent/navigation/router.dart';
import 'package:pikatorrent/platforms/android/foreground_service.dart';
import 'package:pikatorrent/utils/device.dart';
import 'package:provider/provider.dart';
import 'package:window_manager/window_manager.dart';
import 'package:yaru/yaru.dart';

final lightColorScheme = ColorScheme.fromSeed(
    seedColor: Colors.yellow,
    brightness: Brightness.light,
    dynamicSchemeVariant: DynamicSchemeVariant.rainbow);

final darkColorScheme = ColorScheme.fromSeed(
    seedColor: Colors.yellow,
    brightness: Brightness.dark,
    dynamicSchemeVariant: DynamicSchemeVariant.rainbow);

final _lightTheme = ThemeData(
    colorScheme: lightColorScheme,
    useMaterial3: true,
    navigationBarTheme: const NavigationBarThemeData(
        backgroundColor: Colors.transparent,
        indicatorColor: Colors.transparent),
    navigationRailTheme:
        const NavigationRailThemeData(indicatorColor: Colors.transparent),
    bottomSheetTheme:
        BottomSheetThemeData(backgroundColor: lightColorScheme.surface),
    chipTheme: ChipThemeData(
        shape: RoundedRectangleBorder(
      borderRadius: BorderRadius.circular(32.0), // Adjust the radius as needed
    )));

final _darkTheme = ThemeData(
    colorScheme: darkColorScheme,
    useMaterial3: true,
    navigationBarTheme: const NavigationBarThemeData(
        backgroundColor: Colors.transparent,
        indicatorColor: Colors.transparent),
    navigationRailTheme:
        const NavigationRailThemeData(indicatorColor: Colors.transparent),
    bottomSheetTheme:
        BottomSheetThemeData(backgroundColor: darkColorScheme.surface),
    chipTheme: ChipThemeData(
        shape: RoundedRectangleBorder(
      borderRadius: BorderRadius.circular(32.0), // Adjust the radius as needed
    )));

// Initialize torrents engine, we use transmission
Engine engine = TransmissionEngine();

void main() async {
  WidgetsFlutterBinding.ensureInitialized();

  if (isDesktop()) {
    await YaruWindowTitleBar.ensureInitialized();
    // Must add this line.
    await windowManager.ensureInitialized();

    WindowOptions windowOptions =
        const WindowOptions(minimumSize: Size(360, 360));

    windowManager.waitUntilReadyToShow(windowOptions, () async {
      await windowManager.show();
      await windowManager.focus();
    });
  }

  await engine.init();

  if (Platform.isAndroid) {
    try {
      await createForegroundService();
    } catch (e) {
      // Android does not allow to start a foreground service
      // while app is in background. This can happen in development
      // when live reloading.
      debugPrint(e.toString());
    }
  }

  runApp(const PikaTorrent());
}

class PikaTorrent extends StatelessWidget {
  const PikaTorrent({super.key});

  // App root
  @override
  Widget build(BuildContext context) {
    return MultiProvider(
      providers: [
        ChangeNotifierProvider(create: (context) => AppModel()),
        ChangeNotifierProvider(create: (context) => TorrentsModel()),
        ChangeNotifierProvider(create: (context) => SessionModel())
      ],
      child: Consumer<AppModel>(
          builder: (context, app, child) => MaterialApp.router(
                title: 'PikaTorrent',
                theme: _lightTheme,
                darkTheme: _darkTheme,
                themeMode: app.theme,
                routerConfig: router,
              )),
    );
  }
}
