import 'package:pikatorrent/engine/transmission/models/torrent.dart';

class TorrentAddResponse {
  final TorrentAddResponseArguments arguments;
  final String result;

  TorrentAddResponse(this.arguments, this.result);

  TorrentAddResponse.fromJson(Map<String, dynamic> json)
      : arguments = TorrentAddResponseArguments.fromJson(json['arguments']),
        result = json['result'] as String;
}

class TorrentAddResponseArguments {
  final TransmissionTorrent? torrentAdded;
  final TransmissionTorrent? torrentDuplicate;

  TorrentAddResponseArguments(this.torrentAdded, this.torrentDuplicate);

  TorrentAddResponseArguments.fromJson(Map<String, dynamic> json)
      : torrentAdded = json['torrent-added'] != null
            ? TransmissionTorrent.fromJson(json['torrent-added'])
            : null,
        torrentDuplicate = json['torrent-duplicate'] != null
            ? TransmissionTorrent.fromJson(json['torrent-duplicate'])
            : null;
}
