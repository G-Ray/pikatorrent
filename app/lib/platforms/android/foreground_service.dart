import 'package:flutter/services.dart';
import 'package:flutter_local_notifications/flutter_local_notifications.dart';
import 'package:pikatorrent/main.dart';

void onDidReceiveNotificationResponse(
    NotificationResponse notificationResponse) async {
  if (notificationResponse.actionId == 'exit') {
    FlutterLocalNotificationsPlugin flutterLocalNotificationsPlugin =
        FlutterLocalNotificationsPlugin();
    await flutterLocalNotificationsPlugin
        .resolvePlatformSpecificImplementation<
            AndroidFlutterLocalNotificationsPlugin>()
        ?.stopForegroundService();
    // Close BitTorrent engine
    engine.dispose();
    // Exit app
    SystemNavigator.pop();
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
          notificationDetails: androidNotificationDetails,
          startType: AndroidServiceStartType.startRedeliverIntent);
}
