import 'dart:io';

import 'package:device_info_plus/device_info_plus.dart';
import 'package:flutter/material.dart';

bool isMobileSize(BuildContext context) {
  return MediaQuery.sizeOf(context).width < 450;
}

bool isMobile() {
  return Platform.isAndroid || Platform.isIOS || Platform.isFuchsia;
}

bool isDesktop() {
  return Platform.isMacOS || Platform.isWindows || Platform.isLinux;
}

void showDeviceSheet(BuildContext context, String title, Widget child) {
  if (isMobileSize(context)) {
    showModalBottomSheet<void>(
        context: context,
        isScrollControlled: true,
        useRootNavigator: true,
        constraints: BoxConstraints(
            maxHeight: MediaQuery.of(context).size.height - 64,
            minWidth: MediaQuery.of(context).size.width),
        builder: (BuildContext context) {
          return Column(
              mainAxisSize: MainAxisSize.min,
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Padding(
                    padding: const EdgeInsets.symmetric(
                        vertical: 16.0, horizontal: 16.0),
                    child: Text(title,
                        overflow: TextOverflow.ellipsis,
                        maxLines: 1,
                        style: Theme.of(context).textTheme.titleLarge)),
                child
              ]);
        });
  } else {
    showGeneralDialog(
        context: context,
        barrierDismissible: true,
        barrierLabel: 'Side sheet',
        useRootNavigator: false,
        pageBuilder: (context, animation, secondaryAnimation) {
          return SlideTransition(
              position: Tween<Offset>(
                begin: const Offset(1, 0), // Starts from the right
                end: Offset.zero, // Ends at the center
              ).animate(animation),
              child: Align(
                alignment: Alignment.centerRight,
                child: SizedBox(
                    width: 500,
                    child: Container(
                      color: Theme.of(context).dialogBackgroundColor,
                      child: Column(
                          mainAxisSize: MainAxisSize.min,
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            Padding(
                                padding: const EdgeInsets.symmetric(
                                    vertical: 16.0, horizontal: 16.0),
                                child: Row(
                                  mainAxisAlignment:
                                      MainAxisAlignment.spaceBetween,
                                  children: [
                                    Expanded(
                                      child: Text(title,
                                          overflow: TextOverflow.ellipsis,
                                          style: Theme.of(context)
                                              .textTheme
                                              .titleLarge),
                                    ),
                                    IconButton(
                                        onPressed: () {
                                          Navigator.of(context).pop();
                                        },
                                        icon: const Icon(Icons.close))
                                  ],
                                )),
                            child
                          ]),
                    )),
              ));
        });
  }
}

Future<int> getAndroidSdkVersion() async {
  DeviceInfoPlugin deviceInfo = DeviceInfoPlugin();
  AndroidDeviceInfo androidInfo = await deviceInfo.androidInfo;
  return androidInfo.version.sdkInt;
}
