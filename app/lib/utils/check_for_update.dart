import 'dart:convert';
import 'package:flutter/material.dart';
import 'package:pub_semver/pub_semver.dart';
import 'package:http/http.dart' as http;

const String _githubApiUrl =
    'https://api.github.com/repos/G-Ray/pikatorrent/releases';

// Returns the latest update version, or null
Future<String?> checkForUpdate(String version) async {
  try {
    final response = await http.get(Uri.parse(_githubApiUrl));

    if (response.statusCode == 200) {
      final List<dynamic> data = jsonDecode(response.body);
      // Remove leading 'v' from tag name
      final String latestVersionString = data.first['tag_name'].substring(1);

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
