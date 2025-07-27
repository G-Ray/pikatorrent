class SessionGetResponse {
  final SessionGetResponseArguments arguments;
  final String result;

  SessionGetResponse(this.arguments, this.result);

  SessionGetResponse.fromJson(Map<String, dynamic> json)
      : arguments = SessionGetResponseArguments.fromJson(json['arguments']),
        result = json['result'] as String;
}

class SessionGetResponseArguments {
  final String? downloadDir;
  final bool? downloadQueueEnabled;
  final int? downloadQueueSize;
  final int? peerPort;
  final bool? speedLimitDownEnabled;
  final bool? speedLimitUpEnabled;
  final int? speedLimitDown;
  final int? speedLimitUp;

  SessionGetResponseArguments.fromJson(Map<String, dynamic> json)
      : downloadDir = json['download-dir'],
        downloadQueueEnabled = json['download-queue-enabled'],
        downloadQueueSize = json['download-queue-size'],
        peerPort = json['peer-port'],
        speedLimitDownEnabled = json['speed-limit-down-enabled'],
        speedLimitUpEnabled = json['speed-limit-up-enabled'],
        speedLimitDown = json['speed-limit-down'],
        speedLimitUp = json['speed-limit-up'];
}
