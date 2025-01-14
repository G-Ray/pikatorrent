import 'package:flutter/services.dart';
import 'package:flutter_local_notifications/flutter_local_notifications.dart';
import 'package:pikatorrent/main.dart';

void onDidReceiveNotificationResponse(
    NotificationResponse notificationResponse) async {
  if (notificationResponse.actionId == 'exit') {
    // Close BitTorrent engine
    FlutterLocalNotificationsPlugin flutterLocalNotificationsPlugin =
        FlutterLocalNotificationsPlugin();
    await flutterLocalNotificationsPlugin
        .resolvePlatformSpecificImplementation<
            AndroidFlutterLocalNotificationsPlugin>()
        ?.stopForegroundService();
    // Exit app
    SystemNavigator.pop();
    engine.dispose();
  }
}

createForegroundService() async {
  FlutterLocalNotificationsPlugin flutterLocalNotificationsPlugin =
      FlutterLocalNotificationsPlugin();

  // Request runtime notifications permissions
  await flutterLocalNotificationsPlugin
      .resolvePlatformSpecificImplementation<
          AndroidFlutterLocalNotificationsPlugin>()
      ?.requestNotificationsPermission();

  const initializationSettings = InitializationSettings(
      android: AndroidInitializationSettings('ic_stat_name'));

  await flutterLocalNotificationsPlugin.initialize(initializationSettings,
      onDidReceiveNotificationResponse: onDidReceiveNotificationResponse);

  await flutterLocalNotificationsPlugin
      .resolvePlatformSpecificImplementation<
          AndroidFlutterLocalNotificationsPlugin>()
      ?.stopForegroundService();

  await flutterLocalNotificationsPlugin
      .resolvePlatformSpecificImplementation<
          AndroidFlutterLocalNotificationsPlugin>()
      ?.deleteNotificationChannel('foreground_service_channel');

  const androidNotificationDetails = AndroidNotificationDetails(
      'foreground_service_channel', 'Foreground Service Channel',
      channelDescription:
          'This channel is used for foreground service notifications.',
      importance: Importance.low,
      silent: true,
      ongoing: true,
      actions: [
        AndroidNotificationAction('exit', 'Exit', showsUserInterface: true)
      ]);

  await flutterLocalNotificationsPlugin
      .resolvePlatformSpecificImplementation<
          AndroidFlutterLocalNotificationsPlugin>()
      ?.startForegroundService(1, 'PikaTorrent', 'Running in the background...',
          notificationDetails: androidNotificationDetails);
}
