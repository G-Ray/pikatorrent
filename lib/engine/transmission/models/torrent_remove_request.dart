const method = 'torrent-remove';

class TorrentRemoveRequest {
  final TorrentRemoveRequestArguments arguments;

  TorrentRemoveRequest({required this.arguments});

  Map<String, dynamic> toJson() =>
      {'method': method, 'arguments': arguments.toJson()};
}

class TorrentRemoveRequestArguments {
  final List<int>? ids;
  final bool deleteLocalData;

  TorrentRemoveRequestArguments(
      {required this.ids, required this.deleteLocalData});

  Map<String, dynamic> toJson() {
    final json = <String, dynamic>{};

    if (ids != null) {
      json['ids'] = ids;
    }

    if (deleteLocalData) {
      json['delete-local-data'] = true;
    }

    return json;
  }
}
