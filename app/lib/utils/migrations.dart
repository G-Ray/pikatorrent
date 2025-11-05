import 'dart:io';

import 'package:flutter/foundation.dart';
import 'package:path_provider/path_provider.dart';
import 'package:path/path.dart' as path;
import 'package:pikatorrent/main.dart';

/// Run all migrations for app updates.
/// This should be called on app startup after engine initialization.
Future<void> runMigrations() async {
  await cleanupLegacyStreamingStateFile();
  await resetAllFilePriorities();
}

/// Clean up legacy session state file from old streaming implementation.
/// This can be removed in future versions after users have migrated.
/// TODO: Remove this cleanup after a few releases (added in v1.x.x)
Future<void> cleanupLegacyStreamingStateFile() async {
  try {
    final filePath = path.join((await getApplicationSupportDirectory()).path,
        'torrents_resume_status.json');
    final file = File(filePath);
    if (await file.exists()) {
      debugPrint('Removing legacy streaming state file: $filePath');
      await file.delete();
    }
  } catch (e) {
    debugPrint('Error cleaning up legacy streaming state file: $e');
  }
}

/// Reset all file priorities to normal on startup.
/// This ensures that if the app crashed during streaming, file priorities
/// are restored to normal state.
Future<void> resetAllFilePriorities() async {
  try {
    final torrents = await engine.fetchTorrents();
    debugPrint('Resetting file priorities for ${torrents.length} torrents');

    for (final torrent in torrents) {
      if (torrent.files.isNotEmpty) {
        final allFileIndices =
            List.generate(torrent.files.length, (index) => index);
        await torrent.setFilesPriority(priorityNormal: allFileIndices);
      }
    }

    debugPrint('File priorities reset completed');
  } catch (e) {
    debugPrint('Error resetting file priorities: $e');
  }
}
