class TorrentSetRequest {
  final method = 'torrent-set';
  final TorrentSetRequestArguments arguments;

  TorrentSetRequest({required this.arguments});

  Map<String, dynamic> toJson() =>
      {'method': method, 'arguments': arguments.toJson()};
}

class TorrentSetRequestArguments {
  final List<int>? ids;
  final List<String>? labels;

  TorrentSetRequestArguments({this.ids, required this.labels});

  Map<String, dynamic> toJson() {
    final json = <String, dynamic>{};

    if (ids != null) {
      json['ids'] = ids;
    }

    if (labels != null) {
      json['labels'] = labels;
    }

    return json;
  }
}
