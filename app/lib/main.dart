import 'dart:io';

import 'package:flutter/material.dart';
import 'package:pikatorrent/engine/engine.dart';
import 'package:pikatorrent/engine/transmission/transmission.dart';
import 'package:pikatorrent/models/app.dart';
import 'package:pikatorrent/models/session.dart';
import 'package:pikatorrent/models/torrents.dart';
import 'package:pikatorrent/navigation/router.dart';
import 'package:pikatorrent/platforms/android/foreground_service.dart';
import 'package:pikatorrent/platforms/windows/register_app.dart';
import 'package:pikatorrent/utils/device.dart';
import 'package:pikatorrent/utils/notifications.dart';
import 'package:provider/provider.dart';
import 'package:window_manager/window_manager.dart';
import 'package:yaru/yaru.dart';
import 'package:media_kit/media_kit.dart';

final lightColorScheme = ColorScheme.fromSeed(
    seedColor: Colors.blue,
    brightness: Brightness.light,
    dynamicSchemeVariant: DynamicSchemeVariant.rainbow);

final darkColorScheme = ColorScheme.fromSeed(
    seedColor: Colors.blue,
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
  MediaKit.ensureInitialized();

  initializeNotifications();

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
  // Restore torrents state before last streaming started, in case the app
  // has been killed.
  await engine.restoreTorrentsResumeStatus();

  if (Platform.isAndroid) {
    try {
      await createForegroundService();
    } catch (e) {
      // Android does not allow to start a foreground service
      // while app is in background. This can happen in development
      // when live reloading.
      debugPrint(e.toString());
    }
  } else if (Platform.isWindows) {
    registerAppInRegistry();
  }

  runApp(const PikaTorrent());
}

class PikaTorrent extends StatelessWidget {
  const PikaTorrent({super.key});

  @override
  Widget build(BuildContext context) {
    return MultiProvider(
      providers: [
        ChangeNotifierProvider(create: (context) => AppModel()),
        ChangeNotifierProvider(create: (context) => TorrentsModel()),
        ChangeNotifierProvider(create: (context) => SessionModel())
      ],
      child: const PikaTorrentApp(),
    );
  }
}

class PikaTorrentApp extends StatefulWidget {
  const PikaTorrentApp({super.key});

  @override
  State<PikaTorrentApp> createState() => _PikaTorrentAppState();
}

class _PikaTorrentAppState extends State<PikaTorrentApp> with WindowListener {
  @override
  void initState() {
    super.initState();
    windowManager.addListener(this);
    _init();
  }

  @override
  void dispose() {
    windowManager.removeListener(this);
    super.dispose();
  }

  void _init() async {
    if (isDesktop()) {
      // Add this line to override the default close handler
      await windowManager.setPreventClose(true);
      setState(() {});
    }
  }

  @override
  void onWindowClose() async {
    windowManager.hide();
  }

  // App root
  @override
  Widget build(BuildContext context) {
    return Consumer<AppModel>(
        builder: (context, app, child) => MaterialApp.router(
              title: 'PikaTorrent',
              theme: _lightTheme,
              darkTheme: _darkTheme,
              themeMode: app.theme,
              routerConfig: router,
            ));
  }
}
