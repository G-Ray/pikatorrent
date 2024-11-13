import 'dart:ui';

import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import 'package:pikatorrent/engine/engine.dart';
import 'package:pikatorrent/engine/transmission/transmission.dart';
import 'package:pikatorrent/models/app.dart';
import 'package:pikatorrent/models/torrents.dart';
import 'package:pikatorrent/navigation/navigation.dart';
import 'package:pikatorrent/screens/settings/settings.dart';
import 'package:pikatorrent/screens/torrents/torrents.dart';
import 'package:provider/provider.dart';
import 'package:shared_preferences/shared_preferences.dart';
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
      borderRadius: BorderRadius.circular(16.0), // Adjust the radius as needed
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
      borderRadius: BorderRadius.circular(16.0), // Adjust the radius as needed
    )));

final GlobalKey<NavigatorState> _rootNavigatorKey = GlobalKey<NavigatorState>();

final GlobalKey<NavigatorState> _shellNavigatorKey =
    GlobalKey<NavigatorState>();

class MyCustomScrollBehavior extends MaterialScrollBehavior {
  @override
  Set<PointerDeviceKind> get dragDevices => {
        PointerDeviceKind.touch,
        PointerDeviceKind.mouse,
      };
}

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
  await YaruWindowTitleBar.ensureInitialized();
  WidgetsFlutterBinding.ensureInitialized();

  engine.init();

  final prefs = await SharedPreferences.getInstance();
  var themeName = prefs.getString('theme') ?? ThemeMode.system.name;
  var theme = ThemeMode.values.firstWhere((e) => e.name == themeName);

  runApp(PikaTorrent(theme: theme));
}

class PikaTorrent extends StatefulWidget {
  final ThemeMode theme;

  const PikaTorrent({super.key, required this.theme});

  @override
  State<PikaTorrent> createState() => _PikaTorrent();
}

class _PikaTorrent extends State<PikaTorrent> {
  @override
  void initState() {
    super.initState();
  }

  // App root
  @override
  Widget build(BuildContext context) {
    return MultiProvider(
      providers: [
        ChangeNotifierProvider(create: (context) => AppModel(widget.theme)),
        ChangeNotifierProvider(create: (context) => TorrentsModel())
      ],
      child: Consumer<AppModel>(
          builder: (context, app, child) => MaterialApp.router(
                title: 'PikaTorrent',
                scrollBehavior: MyCustomScrollBehavior(),
                theme: _lightTheme,
                darkTheme: _darkTheme,
                themeMode: app.theme,
                routerConfig: _router,
              )),
    );
  }
}
