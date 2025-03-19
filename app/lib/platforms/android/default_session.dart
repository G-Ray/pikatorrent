import 'package:external_path/external_path.dart';

import 'package:pikatorrent/engine/engine.dart';
import 'package:pikatorrent/engine/session.dart';

initDefaultDownloadDir(Engine engine) async {
  var session = await engine.fetchSession();
  var downloadDir = await ExternalPath.getExternalStoragePublicDirectory(
      ExternalPath.DIRECTORY_DOWNLOAD);

  // Default download directory set by transmission is not correct.
  // See tr_getDefaultDownloadDir() in platform.cc
  if (session.downloadDir != downloadDir) {
    var sessionUpdate = SessionBase(downloadDir: downloadDir);
    await session.update(sessionUpdate);
  }
}
