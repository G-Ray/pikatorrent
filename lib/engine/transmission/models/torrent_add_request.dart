class TorrentAddRequest {
  final method = 'torrent-add';
  final TorrentAddRequestArguments arguments;

  TorrentAddRequest({required this.arguments});

  Map<String, dynamic> toJson() =>
      {'method': method, 'arguments': arguments.toJson()};
}

class TorrentAddRequestArguments {
  final String filename;

  TorrentAddRequestArguments(this.filename);

  Map<String, dynamic> toJson() {
    final json = <String, dynamic>{'filename': filename};

    return json;
  }
}
