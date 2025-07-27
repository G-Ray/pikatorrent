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
  final bool? speedLimitDownEnabled;
  final bool? speedLimitUpEnabled;
  final int? speedLimitDown;
  final int? speedLimitUp;

  SessionSetRequestArguments(
      {this.downloadDir,
      this.downloadQueueEnabled,
      this.downloadQueueSize,
      this.peerPort,
      this.speedLimitDownEnabled,
      this.speedLimitUpEnabled,
      this.speedLimitDown,
      this.speedLimitUp});

  Map<String, dynamic> toJson() {
    final json = <String, dynamic>{};

    if (downloadDir != null) json['download-dir'] = downloadDir;
    if (downloadQueueEnabled != null) {
      json['download-queue-enabled'] = downloadQueueEnabled;
    }
    if (downloadQueueSize != null) {
      json['download-queue-size'] = downloadQueueSize;
    }
    if (peerPort != null) {
      json['peer-port'] = peerPort;
    }
    if (speedLimitDownEnabled != null) {
      json['speed-limit-down-enabled'] = speedLimitDownEnabled;
    }
    if (speedLimitUpEnabled != null) {
      json['speed-limit-up-enabled'] = speedLimitUpEnabled;
    }
    if (speedLimitDown != null) {
      json['speed-limit-down'] = speedLimitDown;
    }
    if (speedLimitUp != null) {
      json['speed-limit-up'] = speedLimitUp;
    }

    return json;
  }
}
