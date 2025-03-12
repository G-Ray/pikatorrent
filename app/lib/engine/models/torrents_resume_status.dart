import 'package:pikatorrent/engine/torrent.dart';

enum TorrentResumeState { stopped, started }

class TorrentsResumeStatus {
  final List<TorrentResumeStatus> torrents;

  TorrentsResumeStatus(this.torrents);

  TorrentsResumeStatus.fromJson(Map<String, dynamic> json)
      : torrents = (json['torrents'])
            .map<TorrentResumeStatus>(
                (jsonTorrent) => TorrentResumeStatus.fromJson(jsonTorrent))
            .toList();

  Map<String, dynamic> toJson() => {
        'torrents': torrents
            .map((t) => {
                  'name': t.name,
                  'status': t.status == TorrentResumeState.stopped
                      ? 'stopped'
                      : 'started',
                  'files': t.files.map((wanted) => wanted).toList()
                })
            .toList()
      };

  TorrentsResumeStatus.fromTorrents(List<Torrent> torrentsInstances)
      : torrents = torrentsInstances
            .map((torrent) => TorrentResumeStatus(
                torrent.name,
                torrent.status == TorrentStatus.stopped
                    ? TorrentResumeState.stopped
                    : TorrentResumeState.started,
                torrent.files.map((f) => f.wanted).toList()))
            .toList();
}

class TorrentResumeStatus {
  final String name; // id are not stable between sessions, so use names
  final TorrentResumeState status;
  final List<bool> files; // true if a file is wanted

  TorrentResumeStatus(this.name, this.status, this.files);

  TorrentResumeStatus.fromJson(Map<String, dynamic> jsonTorrent)
      : name = jsonTorrent['name'],
        status = jsonTorrent['status'] == TorrentResumeState.started.name
            ? TorrentResumeState.started
            : TorrentResumeState.stopped,
        files = (jsonTorrent['files'])
            .map<bool>((wanted) => wanted as bool)
            .toList();
}
