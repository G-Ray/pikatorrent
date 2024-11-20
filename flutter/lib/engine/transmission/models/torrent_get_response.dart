import 'package:pikatorrent/engine/transmission/models/torrent.dart';

class TorrentGetResponse {
  final TorrentGetResponseArguments arguments;
  final String result;

  TorrentGetResponse(this.arguments, this.result);

  TorrentGetResponse.fromJson(Map<String, dynamic> json)
      : arguments = TorrentGetResponseArguments.fromJson(json['arguments']),
        result = json['result'] as String;
}

class TorrentGetResponseArguments {
  final List<TransmissionTorrent> torrents;

  TorrentGetResponseArguments(this.torrents);

  TorrentGetResponseArguments.fromJson(Map<String, dynamic> json)
      : torrents = (json['torrents'])
            .map<TransmissionTorrent>(
                (json) => TransmissionTorrent.fromJson(json))
            .toList();
}
