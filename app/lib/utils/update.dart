import 'dart:convert';
import 'dart:io';
import 'package:flutter/foundation.dart';
import 'package:pub_semver/pub_semver.dart';
import 'package:http/http.dart' as http;

const String _githubApiUrl =
    'https://api.github.com/repos/G-Ray/pikatorrent/releases/latest';

// Returns the latest update version, or null
Future<String?> checkForUpdate(String version) async {
  if (isDistributedFromAppStore()) return null;

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
bool isDistributedFromAppStore() {
  if (kDebugMode) return false;

  return Platform.environment.containsKey('FLATPAK_ID') ||
      Platform.isWindows &&
          Platform.environment.containsKey('APPLICATION_HOMEPAGE');
}
