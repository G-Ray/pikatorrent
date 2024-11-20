import 'package:pikatorrent/engine/transmission/models/torrent.dart';

class TorrentGetRequest {
  final method = 'torrent-get';
  final TorrentGetRequestArguments arguments;

  TorrentGetRequest({required this.arguments});

  Map<String, dynamic> toJson() =>
      {'method': method, 'arguments': arguments.toJson()};
}

class TorrentGetRequestArguments {
  final List<int>? ids;
  final List<TorrentField> fields;

  TorrentGetRequestArguments({this.ids, required this.fields});

  Map<String, dynamic> toJson() {
    final json = <String, dynamic>{
      'fields': fields.map((field) => field.name).toList()
    };

    if (ids != null) {
      json['ids'] = ids;
    }

    return json;
  }
}
