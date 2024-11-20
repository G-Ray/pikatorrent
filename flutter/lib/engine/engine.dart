import 'package:pikatorrent/engine/session.dart';
import 'package:pikatorrent/engine/torrent.dart';

enum TorrentAddedResponse { added, duplicated }

class TorrentAddError extends Error {}

/// BitTorrent engine abstraction.
abstract interface class Engine {
  // Initialise the engine
  void init();

  // Dispose the engine
  void dispose();

  // Add a torrent
  Future<TorrentAddedResponse> addTorrent(
      String? filename, String? metainfo, String? downloadDir);

  // Fetch all torrents
  Future<List<Torrent>> fetchTorrents();

  // Fetch a torrent details
  Future<Torrent> fetchTorrentDetails(int id);

  // Fetch session information (e.g. default download directory)
  Future<Session> fetchSession();

  // Reset torrents engine settings
  Future resetSettings();
}
