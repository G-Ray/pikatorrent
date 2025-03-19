import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:pikatorrent/utils/device.dart';
import 'package:share_plus/share_plus.dart';

String appUri = kDebugMode && isDesktop()
    ? 'http://localhost:3000/'
    : 'https://www.pikatorrent.com/';

createAppLink(String link) {
  Uri uri = Uri(fragment: Uri(queryParameters: {'magnet': link}).toString());
  String fragmentString = uri.toString().substring(2); // Remove leading #?
  final appLink = Uri.encodeFull('$appUri#$fragmentString');

  return appLink;
}

/// get torrent link from an app link created with createAppLink
getTorrentLink(String appLink) {
  String fragment = appLink.replaceFirst('$appUri#', '');
  Uri uri = Uri(query: fragment);
  return uri.queryParameters['magnet'];
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
