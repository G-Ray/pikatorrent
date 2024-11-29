import 'dart:async';

import 'package:flutter/material.dart';
import 'package:pikatorrent/engine/session.dart';
import 'package:pikatorrent/main.dart';

const refreshIntervalSeconds = 5;

class SessionModel extends ChangeNotifier {
  Session? session;

  SessionModel() {
    _startSessionFetching();
  }

  Future fetchSession() async {
    session = await engine.fetchSession();
    notifyListeners();
  }

  void _startSessionFetching() async {
    fetchSession();
    Timer.periodic(const Duration(seconds: refreshIntervalSeconds), (timer) {
      fetchSession();
    });
  }
}
