class SessionSetRequest {
  final method = 'session-set';
  final SessionSetRequestArguments arguments;

  SessionSetRequest({required this.arguments});

  Map<String, dynamic> toJson() =>
      {'method': method, 'arguments': arguments.toJson()};
}

class SessionSetRequestArguments {
  final String? downloadDir;
  final bool? downloadQueueEnabled;
  final int? downloadQueueSize;
  final int? peerPort;

  SessionSetRequestArguments(
      {this.downloadDir,
      this.downloadQueueEnabled,
      this.downloadQueueSize,
      this.peerPort});

  Map<String, dynamic> toJson() {
    final json = <String, dynamic>{};

    if (downloadDir != null) json['download-dir'] = downloadDir;
    if (downloadQueueEnabled != null)
      json['download-queue-enabled'] = downloadQueueEnabled;
    if (downloadQueueSize != null)
      json['download-queue-size'] = downloadQueueSize;
    if (peerPort != null) json['peer-port'] = peerPort;

    return json;
  }
}
