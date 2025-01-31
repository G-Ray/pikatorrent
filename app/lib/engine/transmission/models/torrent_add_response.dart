class TorrentAddResponse {
  final TorrentAddResponseArguments arguments;
  final String result;

  TorrentAddResponse(this.arguments, this.result);

  TorrentAddResponse.fromJson(Map<String, dynamic> json)
      : arguments = TorrentAddResponseArguments.fromJson(json['arguments']),
        result = json['result'] as String;
}

class TorrentAddResponseArguments {
  final bool torrentAdded;
  final bool torrentDuplicate;

  TorrentAddResponseArguments(this.torrentAdded, this.torrentDuplicate);

  TorrentAddResponseArguments.fromJson(Map<String, dynamic> json)
      : torrentAdded = json['torrent-added'] != null ? true : false,
        torrentDuplicate = json['torrent-duplicate'] != null ? true : false;
}
