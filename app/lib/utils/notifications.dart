import 'package:flutter_local_notifications/flutter_local_notifications.dart';

enum NotificationsDetailsTypes { downloadsCompletedAndroidNotificationDetails }

const downloadsCompletedAndroidNotificationDetails = AndroidNotificationDetails(
    'downloads_completed', 'Downloads completed',
    channelDescription:
        'This channel is used for downloads completed notifications.');

FlutterLocalNotificationsPlugin flutterLocalNotificationsPlugin =
    FlutterLocalNotificationsPlugin();

_removeNotificationChannels() async {
  await flutterLocalNotificationsPlugin
      .resolvePlatformSpecificImplementation<
          AndroidFlutterLocalNotificationsPlugin>()
      ?.deleteNotificationChannel('downloads_completed');
}

Future<void> initializeNotifications() async {
  await _removeNotificationChannels();
  const AndroidInitializationSettings initializationSettingsAndroid =
      AndroidInitializationSettings('ic_stat_name');

  final List<DarwinNotificationCategory> darwinNotificationCategories =
      <DarwinNotificationCategory>[];

  final DarwinInitializationSettings initializationSettingsDarwin =
      DarwinInitializationSettings(
    requestAlertPermission: true,
    requestBadgePermission: false,
    requestSoundPermission: false,
    notificationCategories: darwinNotificationCategories,
  );

  final LinuxInitializationSettings initializationSettingsLinux =
      LinuxInitializationSettings(
    defaultActionName: 'Open notification',
    // TODO: Improve icon
    defaultIcon: AssetsLinuxIcon('assets/tray_icon.png'),
  );

  final InitializationSettings initializationSettings = InitializationSettings(
      android: initializationSettingsAndroid,
      iOS: initializationSettingsDarwin,
      macOS: initializationSettingsDarwin,
      linux: initializationSettingsLinux,
      windows: const WindowsInitializationSettings(
          appName: 'PikaTorrent',
          appUserModelId: 'com.pikatorrent.PikaTorrentt',
          // Todo: icon path, see https://github.com/MaikuB/flutter_local_notifications/issues/2605
          // iconPath: 'assets/tray_icon.ico',
          guid: '967649c9-c508-4d91-b3e4-5e65610b6cb7'));

  await flutterLocalNotificationsPlugin.initialize(
    initializationSettings,
  );
}

showNotification(
    {required String title,
    required String body,
    NotificationsDetailsTypes? notificationsDetailsType}) async {
  final androidNotificationDetails = switch (notificationsDetailsType) {
    NotificationsDetailsTypes.downloadsCompletedAndroidNotificationDetails =>
      downloadsCompletedAndroidNotificationDetails,
    _ => null
  };

  final NotificationDetails notificationDetails =
      NotificationDetails(android: androidNotificationDetails);

  flutterLocalNotificationsPlugin.show(0, title, body, notificationDetails,
      payload: null);
}
