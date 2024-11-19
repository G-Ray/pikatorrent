import 'dart:io';

import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import 'package:pikatorrent/engine/engine.dart';
import 'package:pikatorrent/engine/transmission/transmission.dart';
import 'package:pikatorrent/models/app.dart';
import 'package:pikatorrent/models/session.dart';
import 'package:pikatorrent/models/torrents.dart';
import 'package:pikatorrent/navigation/navigation.dart';
import 'package:pikatorrent/platforms/android/foreground_service.dart';
import 'package:pikatorrent/screens/settings/settings.dart';
import 'package:pikatorrent/screens/torrents/torrents.dart';
import 'package:pikatorrent/utils/device.dart';
import 'package:provider/provider.dart';
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
    navigationBarTheme:
        NavigationBarThemeData(backgroundColor: lightColorScheme.surface),
    bottomSheetTheme:
        BottomSheetThemeData(backgroundColor: lightColorScheme.surface),
    chipTheme: ChipThemeData(
        shape: RoundedRectangleBorder(
      borderRadius: BorderRadius.circular(32.0), // Adjust the radius as needed
    )));

final _darkTheme = ThemeData(
    colorScheme: darkColorScheme,
    useMaterial3: true,
    navigationBarTheme:
        NavigationBarThemeData(backgroundColor: darkColorScheme.surface),
    bottomSheetTheme:
        BottomSheetThemeData(backgroundColor: darkColorScheme.surface),
    chipTheme: ChipThemeData(
        shape: RoundedRectangleBorder(
      borderRadius: BorderRadius.circular(32.0), // Adjust the radius as needed
    )));

final GlobalKey<NavigatorState> _rootNavigatorKey = GlobalKey<NavigatorState>();

final GlobalKey<NavigatorState> _shellNavigatorKey =
    GlobalKey<NavigatorState>();

// GoRouter configuration
final _router = GoRouter(
  navigatorKey: _rootNavigatorKey,
  initialLocation: '/torrents',
  routes: [
    ShellRoute(
        navigatorKey: _shellNavigatorKey,
        builder: (context, state, child) => Navigation(child: child),
        routes: [
          GoRoute(
            path: '/torrents',
            pageBuilder: (context, state) {
              return NoTransitionPage(
                  key: state.pageKey, child: const TorrentsScreen());
            },
          ),
          GoRoute(
            path: '/settings',
            pageBuilder: (context, state) {
              return NoTransitionPage(
                  key: state.pageKey,
                  child: const Center(child: SettingsScreen()));
            },
          ),
        ])
  ],
);

// Initialize torrents engine, we use transmission
Engine engine = TransmissionEngine();

void main() async {
  if (isDesktop()) {
    await YaruWindowTitleBar.ensureInitialized();
  }
  WidgetsFlutterBinding.ensureInitialized();

  engine.init();

  if (Platform.isAndroid) {
    createForegroundService();
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
                routerConfig: _router,
              )),
    );
  }
}
