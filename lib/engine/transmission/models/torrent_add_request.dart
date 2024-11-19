class TorrentAddRequest {
  final method = 'torrent-add';
  final TorrentAddRequestArguments arguments;

  TorrentAddRequest({required this.arguments});

  Map<String, dynamic> toJson() =>
      {'method': method, 'arguments': arguments.toJson()};
}

class TorrentAddRequestArguments {
  final String? filename;
  final String? metainfo;
  final String? downloadDir;

  TorrentAddRequestArguments({this.filename, this.metainfo, this.downloadDir});

  Map<String, dynamic> toJson() {
    final json = <String, dynamic>{};

    if (filename != null) {
      json['filename'] = filename;
    }

    if (metainfo != null) {
      json['metainfo'] = metainfo;
    }

    if (downloadDir != null) {
      json['download-dir'] = downloadDir;
    }

    return json;
  }
}
