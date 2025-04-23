import 'dart:async';

import 'package:connectivity_plus/connectivity_plus.dart';
import 'package:flutter/material.dart';

late StreamSubscription<List<ConnectivityResult>> _connectivitySubscription;

// listen to network changes
startConnectivityCheck(BuildContext context) {
  ScaffoldFeatureController? snackBar;

  _connectivitySubscription = Connectivity()
      .onConnectivityChanged
      .listen((List<ConnectivityResult> result) {
    if (!context.mounted) return;

    if (result.contains(ConnectivityResult.none)) {
      snackBar = ScaffoldMessenger.of(context).showSnackBar(const SnackBar(
        content: Text('Network unavailable.'),
        backgroundColor: Colors.orange,
        duration: Duration(days: 365), // Ideally, unlimited duration
      ));
    } else {
      // Close previous snackbar
      if (snackBar != null) {
        snackBar?.close();
        snackBar = ScaffoldMessenger.of(context).showSnackBar(const SnackBar(
          content: Text('You are back online'),
          backgroundColor: Colors.lightGreen,
        ));
      }
    }
  });
}

stopConnectivityCheck() {
  _connectivitySubscription.cancel();
}
