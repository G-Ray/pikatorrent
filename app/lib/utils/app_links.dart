import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:pikatorrent/utils/device.dart';
import 'package:share_plus/share_plus.dart';

const appUri = 'https://www.pikatorrent.com/';

createAppLink(String link) {
  return Uri.encodeFull('$appUri#$link');
}

/// get torrent link from an app link created with createAppLink
getTorrentLink(String appLink) {
  return appLink.replaceFirst('$appUri#', '');
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
