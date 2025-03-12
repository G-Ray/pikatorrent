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
  final List<TransmissionTorrentModel> torrents;

  TorrentGetResponseArguments(this.torrents);

  TorrentGetResponseArguments.fromJson(Map<String, dynamic> json)
      : torrents = (json['torrents'])
            .map<TransmissionTorrentModel>(
                (json) => TransmissionTorrentModel.fromJson(json))
            .toList();
}
