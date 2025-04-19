class TorrentSetLocationRequest {
  final method = 'torrent-set-location';
  final TorrentSetLocationArguments arguments;

  TorrentSetLocationRequest({required this.arguments});

  Map<String, dynamic> toJson() =>
      {'method': method, 'arguments': arguments.toJson()};
}

class TorrentSetLocationArguments {
  final List<int> ids;
  final String location;
  final bool move;

  TorrentSetLocationArguments(
      {required this.ids, required this.location, required this.move});

  Map<String, dynamic> toJson() {
    final json = <String, dynamic>{
      'ids': ids,
      'location': location,
      'move': move
    };

    return json;
  }
}
