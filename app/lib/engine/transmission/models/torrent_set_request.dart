class TorrentSetRequest {
  final method = 'torrent-set';
  final TorrentSetRequestArguments arguments;

  TorrentSetRequest({required this.arguments});

  Map<String, dynamic> toJson() =>
      {'method': method, 'arguments': arguments.toJson()};
}

class TorrentSetRequestArguments {
  final List<int> ids;
  final List<String>? labels;
  final List<int>? filesWanted;
  final List<int>? filesUnwanted;

  TorrentSetRequestArguments(
      {required this.ids, this.labels, this.filesWanted, this.filesUnwanted});

  Map<String, dynamic> toJson() {
    final json = <String, dynamic>{};

    json['ids'] = ids;

    if (labels != null) {
      json['labels'] = labels;
    }

    if (filesWanted != null) {
      json['files-wanted'] = filesWanted;
    }

    if (filesUnwanted != null) {
      json['files-unwanted'] = filesUnwanted;
    }

    return json;
  }
}
