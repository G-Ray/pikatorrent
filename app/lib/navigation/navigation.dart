import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import 'package:pikatorrent/navigation/add_torrent_button.dart';
import 'package:pikatorrent/utils/device.dart';
import 'package:yaru/widgets.dart';

class Destination {
  const Destination(this.label, this.icon, this.selectedIcon);

  final String label;
  final Widget icon;
  final Widget selectedIcon;
}

const List<Destination> destinations = <Destination>[
  Destination('Torrents', Icon(Icons.electric_bolt, size: 28),
      Icon(Icons.electric_bolt, size: 28)),
  // Destination('Search', Icon(Icons.search_outlined), Icon(Icons.search)),
  Destination('Settings', Icon(Icons.settings, size: 28),
      Icon(Icons.settings, size: 28)),
  // Destination(
  //     'About', Icon(Icons.question_mark_outlined), Icon(Icons.question_mark)),
];

class Navigation extends StatefulWidget {
  const Navigation({super.key, required this.child});

  final Widget child;

  @override
  State<Navigation> createState() => _Navigation();
}

class _Navigation extends State<Navigation> {
  int screenIndex = 0;
  late bool showNavigationRail;

  @override
  void initState() {
    super.initState();
  }

  void _handleNavigationBarDestinationSelected(int selectedIndex) {
    if (selectedIndex == 0) {
      context.go('/torrents');
    }

    if (selectedIndex == 2) {
      context.go('/settings');
    }
  }

  void _handleNavigationRailDestinationSelected(int selectedIndex) {
    if (selectedIndex == 0) {
      context.go('/torrents');
    }

    if (selectedIndex == 1) {
      context.go('/settings');
    }
  }

  static int _calculateNavigationRailSelectedIndex(BuildContext context) {
    final String location = GoRouterState.of(context).uri.path;

    if (location == '/settings') {
      return 1;
    }

    // torrents
    return 0;
  }

  static int _calculateNavigationBarSelectedIndex(BuildContext context) {
    final String location = GoRouterState.of(context).uri.path;

    if (location == '/settings') {
      return 2;
    }

    // torrents
    return 0;
  }

  YaruWindowTitleBar buildWindowTitleBar(BuildContext context) {
    return YaruWindowTitleBar(
      backgroundColor: Theme.of(context).scaffoldBackgroundColor,
      border: BorderSide.none,
      // FIXME: Depends of platform and gnome settings
      isMaximizable: false,
      isMinimizable: false,
    );
  }

  // Mobile Navigation
  Widget buildBottomBarScaffold(BuildContext context) {
    return Scaffold(
      appBar: isDesktop()
          ? buildWindowTitleBar(context)
          : AppBar(
              toolbarHeight: 0,
            ),
      body: Column(children: [
        Expanded(child: widget.child),
        const Divider(thickness: 1, height: 1)
      ]),
      bottomNavigationBar: NavigationBar(
        labelBehavior: NavigationDestinationLabelBehavior.alwaysHide,
        selectedIndex: _calculateNavigationBarSelectedIndex(context),
        onDestinationSelected: _handleNavigationBarDestinationSelected,
        destinations: [
          ...destinations.getRange(0, 1).map(
            (destination) {
              return NavigationDestination(
                label: destination.label,
                icon: destination.icon,
                selectedIcon: destination.selectedIcon,
                tooltip: destination.label,
              );
            },
          ),
          const AddTorrentButton(),
          ...destinations.getRange(1, 2).map(
            (destination) {
              return NavigationDestination(
                label: destination.label,
                icon: destination.icon,
                selectedIcon: destination.selectedIcon,
                tooltip: destination.label,
              );
            },
          ),
        ],
      ),
    );
  }

  // Desktop Navigation
  Widget buildNavigationRailScaffold(BuildContext context) {
    return SafeArea(
      child: Scaffold(
        appBar: AppBar(
          toolbarHeight: 0,
        ),
        body: Row(
          children: <Widget>[
            NavigationRail(
              leading: const Padding(
                padding: EdgeInsets.symmetric(vertical: 4),
                child: AddTorrentButton(),
              ),
              destinations: destinations.map(
                (Destination destination) {
                  return NavigationRailDestination(
                    label: Text(destination.label),
                    icon: destination.icon,
                    selectedIcon: destination.selectedIcon,
                  );
                },
              ).toList(),
              selectedIndex: _calculateNavigationRailSelectedIndex(context),
              useIndicator: true,
              onDestinationSelected: _handleNavigationRailDestinationSelected,
            ),
            const VerticalDivider(thickness: 1, width: 1),
            Expanded(
                child: Column(children: [
              if (isDesktop()) buildWindowTitleBar(context),
              Expanded(child: widget.child)
            ]))
          ],
        ),
      ),
    );
  }

  @override
  void didChangeDependencies() {
    super.didChangeDependencies();
    showNavigationRail = !isMobileSize(context);
  }

  @override
  Widget build(BuildContext context) {
    return showNavigationRail
        ? buildNavigationRailScaffold(context) // Desktop
        : buildBottomBarScaffold(context); // Mobile
  }
}
