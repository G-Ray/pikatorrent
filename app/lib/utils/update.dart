import 'dart:convert';
import 'dart:io';
import 'package:flutter/foundation.dart';
import 'package:pikatorrent/utils/device.dart';
import 'package:pub_semver/pub_semver.dart';
import 'package:http/http.dart' as http;
import 'package:store_checker/store_checker.dart';
import 'package:windows_store/windows_store.dart';

const String _githubApiUrl =
    'https://api.github.com/repos/G-Ray/pikatorrent/releases/latest';

// Returns the latest update version, or null
Future<String?> checkForUpdate(String version) async {
  if (await isDistributedFromAppStore()) return null;

  try {
    final response = await http.get(Uri.parse(_githubApiUrl));

    if (response.statusCode == 200) {
      final dynamic data = jsonDecode(response.body);
      // Remove leading 'v' from tag name
      final String latestVersionString = data['tag_name'].substring(1);

      final latestVersion = Version.parse(latestVersionString);
      final currentVersion = Version.parse(version);

      if (latestVersion > currentVersion) {
        return latestVersion.toString();
      }
    }
  } catch (e) {
    debugPrint('Error checking for new release: $e');
  }

  return null;
}

// Check if app is in release mode, and try to find out
// if it's distributed through an app store
Future<bool> isDistributedFromAppStore() async {
  if (kDebugMode) return false;

  if (isDesktop()) {
    if (Platform.isWindows) {
      // Check if app is installed through Microsoft Store
      final windowsStore = WindowsStoreApi();
      final license = await windowsStore.getAppLicenseAsync();
      return license.isActive;
    }

    return Platform.environment.containsKey('FLATPAK_ID');
  }

  Source installationSource = await StoreChecker.getSource;

  return switch (installationSource) {
    Source.IS_INSTALLED_FROM_LOCAL_SOURCE => false,
    Source.UNKNOWN => false,
    _ => true
  };
}
