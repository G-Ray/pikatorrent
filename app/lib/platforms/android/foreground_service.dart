import 'package:flutter_local_notifications/flutter_local_notifications.dart';
import 'package:pikatorrent/navigation/router.dart';

const foregroundNotificationId = 1;

// When exiting the engine using the persistend notification,
// execution is in another flutter isolate, so we store a pref to
// check if we need to restart the engine if the app run in foreground again
const isEngineExitedPrefKey = 'isEngineExited';

FlutterLocalNotificationsPlugin flutterLocalNotificationsPlugin =
    FlutterLocalNotificationsPlugin();

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

void _onDidReceiveNotificationResponse(
    NotificationResponse notificationResponse) async {
  if (notificationResponse.actionId == 'exit') {
    rootNavigatorKey.currentState?.maybePop();
  }
}

createForegroundService() async {
  // Request runtime notifications permissions
  await flutterLocalNotificationsPlugin
      .resolvePlatformSpecificImplementation<
          AndroidFlutterLocalNotificationsPlugin>()
      ?.requestNotificationsPermission();

  const initializationSettings = InitializationSettings(
      android: AndroidInitializationSettings('ic_stat_name'));

  await flutterLocalNotificationsPlugin.initialize(initializationSettings,
      onDidReceiveNotificationResponse: _onDidReceiveNotificationResponse);

  await flutterLocalNotificationsPlugin
      .resolvePlatformSpecificImplementation<
          AndroidFlutterLocalNotificationsPlugin>()
      ?.stopForegroundService();

  await flutterLocalNotificationsPlugin
      .resolvePlatformSpecificImplementation<
          AndroidFlutterLocalNotificationsPlugin>()
      ?.deleteNotificationChannel('foreground_service_channel');

  await _startOrUpdateForegroundService('Running in the background...');
}

stopForegroundService() async {
  await flutterLocalNotificationsPlugin
      .resolvePlatformSpecificImplementation<
          AndroidFlutterLocalNotificationsPlugin>()
      ?.stopForegroundService();
}

_startOrUpdateForegroundService(
  String body,
) async {
  await flutterLocalNotificationsPlugin
      .resolvePlatformSpecificImplementation<
          AndroidFlutterLocalNotificationsPlugin>()
      ?.startForegroundService(foregroundNotificationId, 'PikaTorrent', body,
          notificationDetails: androidNotificationDetails,
          startType: AndroidServiceStartType.startRedeliverIntent);
}
