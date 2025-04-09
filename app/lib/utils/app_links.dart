import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:pikatorrent/utils/device.dart';
import 'package:share_plus/share_plus.dart';

enum Environment { production, preview, development }

final appUri = const String.fromEnvironment('APP_URL').isNotEmpty
    ? const String.fromEnvironment('APP_URL')
    : 'http://localhost:3000/';

createAppLink(String link) {
  Uri uri = Uri(fragment: Uri(queryParameters: {'magnet': link}).toString());
  String fragmentString =
      encodeToBase64(uri.toString().substring(2)); // Remove leading #?
  final appLink = Uri.encodeFull('$appUri#$fragmentString');

  return appLink;
}

/// get torrent link from an link which contains a fragment (#)
/// It does not matter if it's a https:// or pikatorrent:// link
getTorrentLink(String appLink) {
  final hashIndex = appLink.indexOf('#');
  if (hashIndex == -1) {
    return;
  }

  String fragment = decodeBase64(appLink.substring(hashIndex + 1));
  Uri uri = Uri(query: fragment);
  return uri.queryParameters['magnet'];
}

isAppLink(String appLink) {
  return appLink.startsWith(appUri);
}

shareLink(BuildContext context, String magnetLink) async {
  String link = createAppLink(magnetLink);

  if (isMobile()) {
    await Share.share(link);
  } else {
    Clipboard.setData(ClipboardData(text: link));
    ScaffoldMessenger.of(context).showSnackBar(const SnackBar(
      content: Text('Link copied'),
      backgroundColor: Colors.lightGreen,
    ));
  }
}

String encodeToBase64(String input) {
  return base64Encode(utf8.encode(input));
}

String decodeBase64(String input) {
  return utf8.decode(base64Decode(input));
}
