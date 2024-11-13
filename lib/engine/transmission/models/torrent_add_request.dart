class TorrentAddRequest {
  final method = 'torrent-add';
  final TorrentAddRequestArguments arguments;

  TorrentAddRequest({required this.arguments});

  Map<String, dynamic> toJson() =>
      {'method': method, 'arguments': arguments.toJson()};
}

class TorrentAddRequestArguments {
  final String filename;
  final String? downloadDir;

  TorrentAddRequestArguments({required this.filename, this.downloadDir});

  Map<String, dynamic> toJson() {
    final json = <String, dynamic>{'filename': filename};

    if (downloadDir != null) {
      json['download-dir'] = downloadDir;
    }

    return json;
  }
}
