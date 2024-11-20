enum TorrentAction {
  start,
  startNow,
  stop,
  verify,
  reannounce
}

class TorrentActionRequest {
  final TorrentAction action;
  final TorrentActionRequestArguments arguments;

  TorrentActionRequest({required this.action, required this.arguments});

  Map<String, dynamic> toJson() {
    var method = switch (action) {
      TorrentAction.start => 'torrent-start',
      TorrentAction.startNow => 'torrent-start-now',
      TorrentAction.stop => 'torrent-stop',
      TorrentAction.verify => 'torrent-verify',
      TorrentAction.reannounce => 'reannounce'
    };

    return {'method': method, 'arguments': arguments.toJson()};
  }
}

class TorrentActionRequestArguments {
  final List<int>? ids;

  TorrentActionRequestArguments({this.ids});

  Map<String, dynamic> toJson() {
    final json = <String, dynamic>{};

    if (ids != null) {
      json['ids'] = ids;
    }

    return json;
  }
}
