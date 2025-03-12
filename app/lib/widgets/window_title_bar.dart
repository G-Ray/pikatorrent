import 'dart:io';

import 'package:flutter/material.dart';
import 'package:flutter/src/widgets/framework.dart';
import 'package:yaru/yaru.dart';

class WindowTitleBar extends YaruWindowTitleBar {
  const WindowTitleBar({super.key, super.leading, super.backgroundColor});

  @override
  Widget build(BuildContext context) {
    return YaruWindowTitleBar(
      leading: leading,
      backgroundColor:
          backgroundColor ?? Theme.of(context).scaffoldBackgroundColor,
      border: BorderSide.none,
      // FIXME: Depends Gnome settings on Linux
      isMaximizable: Platform.isWindows ? true : false,
      isMinimizable: Platform.isWindows ? true : false,
    );
  }
}
