import 'dart:async';

import 'package:connectivity_plus/connectivity_plus.dart';
import 'package:flutter/material.dart';
import 'package:pikatorrent/main.dart';
import 'package:pikatorrent/models/app.dart';
import 'package:provider/provider.dart';

late StreamSubscription<List<ConnectivityResult>> _connectivitySubscription;

// Check if network is connected to wifi (to be more precise, avoid mobile only network)
// See https://github.com/fluttercommunity/plus_plugins/issues/1472 for vpn check
bool isOnWifiNetwork(List<ConnectivityResult> result) {
  return !(result.every((r) => r == ConnectivityResult.mobile) ||
      result.every((r) => r == ConnectivityResult.vpn));
}

// listen to network changes
startConnectivityCheck(BuildContext context) {
  ScaffoldFeatureController? snackBar;

  _connectivitySubscription = Connectivity()
      .onConnectivityChanged
      .listen((List<ConnectivityResult> result) {
    if (!context.mounted) return;

    final appModel = Provider.of<AppModel>(context, listen: false);
    debugPrint('result ${result.toList()}');

    if (result.contains(ConnectivityResult.none)) {
      appModel.setNetworkAvailable(false);

      snackBar = ScaffoldMessenger.of(context).showSnackBar(const SnackBar(
        content: Text('Network unavailable.'),
        backgroundColor: Colors.orange,
        duration: Duration(days: 365), // Ideally, unlimited duration
      ));
    } else if (appModel.downloadOverWifiOnly && !isOnWifiNetwork(result)) {
      appModel.setNetworkAvailable(false);

      snackBar = ScaffoldMessenger.of(context).showSnackBar(const SnackBar(
        content: Text('Waiting for wifi...'),
        backgroundColor: Colors.orange,
        duration: Duration(days: 365), // Ideally, unlimited duration
      ));
    } else {
      // Close previous snackbar
      snackBar?.close();
      appModel.setNetworkAvailable(true);
    }

    debugPrint(
        'connectivity check: ${result.contains(ConnectivityResult.wifi)}');
  });
}

stopConnectivityCheck() {
  _connectivitySubscription.cancel();
}
