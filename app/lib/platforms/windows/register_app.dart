import 'dart:io';

import 'package:win32_registry/win32_registry.dart';

const String appName = 'PikaTorrent';
const String appCapabilityPath = 'Software\\$appName\\Capabilities';

Future<void> registerAppInRegistry() async {
  await registerAppCmd();
  await registerApp();
  await registerCapabilities();
}

Future<void> registerAppCmd() async {
  String appPath = Platform.resolvedExecutable;

  String protocolRegKey = 'Software\\Classes\\$appName';
  String protocolCmdRegKey = 'shell\\open\\command';
  RegistryValue protocolCmdRegValue = RegistryValue(
    '',
    RegistryValueType.string,
    '"$appPath" "%1"',
  );

  final regKey = Registry.currentUser.createKey(protocolRegKey);
  regKey.createKey(protocolCmdRegKey).createValue(protocolCmdRegValue);
}

Future<void> registerApp() async {
  String appRegKey = 'Software\\RegisteredApplications';
  RegistryValue appCapability = const RegistryValue(
    appName,
    RegistryValueType.string,
    appCapabilityPath,
  );

  final regKey = Registry.currentUser.createKey(appRegKey);
  regKey.createValue(appCapability);
}

Future<void> registerCapabilities() async {
  final regKey =
      Registry.currentUser.createKey('Software\\$appName\\Capabilities');
  regKey.createValue(const RegistryValue(
    'ApplicationDescription',
    RegistryValueType.string,
    'BitTorrent software',
  ));

  final fileRegKey = Registry.currentUser
      .createKey('Software\\$appName\\Capabilities\\FILEAssociations');
  fileRegKey.createValue(const RegistryValue(
    '.torrent',
    RegistryValueType.string,
    appName,
  ));

  final mimeRegKey = Registry.currentUser
      .createKey('Software\\$appName\\Capabilities\\MIMEAssociations');
  mimeRegKey.createValue(const RegistryValue(
    'application/x-bittorrent',
    RegistryValueType.string,
    appName,
  ));

  final urlRegKey = Registry.currentUser
      .createKey('Software\\$appName\\Capabilities\\URLAssociations');

  urlRegKey.createValue(const RegistryValue(
    'magnet',
    RegistryValueType.string,
    appName,
  ));

  await registerScheme('pikatorrent');
}


Future<void> registerScheme(String scheme) async {
  String appPath = Platform.resolvedExecutable;

  String protocolRegKey = 'Software\\Classes\\$scheme';
  RegistryValue protocolRegValue = const RegistryValue(
    'URL Protocol',
    RegistryValueType.string,
    '',
  );
  String protocolCmdRegKey = 'shell\\open\\command';
  RegistryValue protocolCmdRegValue = RegistryValue(
    '',
    RegistryValueType.string,
    '"$appPath" "%1"',
  );

  final regKey = Registry.currentUser.createKey(protocolRegKey);
  regKey.createValue(protocolRegValue);
  regKey.createKey(protocolCmdRegKey).createValue(protocolCmdRegValue);
}