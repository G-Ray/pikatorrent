import 'dart:io';

import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import 'package:pikatorrent/navigation/add_torrent_button.dart';
import 'package:pikatorrent/utils/device.dart';
import 'package:pikatorrent/utils/theme.dart';
import 'package:pikatorrent/widgets/window_title_bar.dart';

class Destination {
  const Destination(this.label, this.icon, this.selectedIcon);

  final String label;
  final Widget icon;
  final Widget selectedIcon;
}

class GradientIcon extends StatelessWidget {
  final IconData icon;
  final double size;
  final Gradient gradient;

  const GradientIcon({
    super.key,
    required this.icon,
    required this.size,
    required this.gradient,
  });

  @override
  Widget build(BuildContext context) {
    return ShaderMask(
      shaderCallback: (Rect bounds) {
        return gradient.createShader(bounds);
      },
      child: SizedBox(
        width: size,
        height: size,
        child: Icon(
          icon,
          size: size,
          color: Colors.white, // Use white as the color
        ),
      ),
    );
  }
}

const List<Destination> destinations = <Destination>[
  Destination(
      'Torrents',
      Icon(Icons.cloud_download_outlined, size: 36),
      GradientIcon(
          icon: Icons.cloud_download_outlined,
          size: 36,
          gradient: LinearGradient(
            colors: gradientColors,
            begin: Alignment.topLeft,
            end: Alignment.bottomRight,
          ))),
  Destination(
      'Settings',
      Icon(Icons.tune, size: 36),
      GradientIcon(
          icon: Icons.tune,
          size: 36,
          gradient: LinearGradient(
            colors: gradientColors,
            begin: Alignment.topLeft,
            end: Alignment.bottomRight,
          ))),
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

  // Mobile Navigation
  Widget buildBottomBarScaffold(BuildContext context) {
    return Scaffold(
      appBar: isDesktop()
          ? const WindowTitleBar()
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
              leading: Padding(
                padding: Platform.isMacOS
                    ? const EdgeInsets.only(
                        top: 20, bottom: 4, left: 4, right: 4)
                    : const EdgeInsets.symmetric(vertical: 4),
                child: const AddTorrentButton(),
              ),
              destinations: destinations.map(
                (Destination destination) {
                  return NavigationRailDestination(
                    label: Text(destination.label),
                    icon: Tooltip(
                        message: destination.label, child: destination.icon),
                    selectedIcon: Tooltip(
                        message: destination.label,
                        child: destination.selectedIcon),
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
              if (isDesktop()) const WindowTitleBar(),
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
