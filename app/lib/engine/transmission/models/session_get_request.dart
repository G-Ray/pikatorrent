enum SessionField {
  downloadDir,
  downloadQueueEnabled,
  downloadQueueSize,
  peerPort,
  speedLimitDownEnabled,
  speedLimitUpEnabled,
  speedLimitDown,
  speedLimitUp,
}

class SessionGetRequest {
  final method = 'session-get';
  final SessionGetRequestArguments arguments;

  SessionGetRequest({required this.arguments});

  Map<String, dynamic> toJson() =>
      {'method': method, 'arguments': arguments.toJson()};
}

class SessionGetRequestArguments {
  final List<SessionField> fields;

  SessionGetRequestArguments({required this.fields});

  Map<String, dynamic> toJson() {
    final json = <String, dynamic>{
      'fields': fields.map((field) {
        return switch (field) {
          SessionField.downloadDir => 'download-dir',
          SessionField.downloadQueueEnabled => 'download-queue-enabled',
          SessionField.downloadQueueSize => 'download-queue-size',
          SessionField.peerPort => 'peer-port',
          SessionField.speedLimitDownEnabled => 'speed-limit-down-enabled',
          SessionField.speedLimitUpEnabled => 'speed-limit-up-enabled',
          SessionField.speedLimitDown => 'speed-limit-down',
          SessionField.speedLimitUp => 'speed-limit-up'
        };
      }).toList()
    };

    return json;
  }
}
