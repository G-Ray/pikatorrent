class SessionBase {
  final String? downloadDir;
  final bool? downloadQueueEnabled;
  final int? downloadQueueSize;
  final int? peerPort;
  final bool? speedLimitDownEnabled;
  final bool? speedLimitUpEnabled;
  final int? speedLimitDown;
  final int? speedLimitUp;

  SessionBase(
      {this.downloadDir,
      this.downloadQueueEnabled,
      this.downloadQueueSize,
      this.peerPort,
      this.speedLimitDownEnabled,
      this.speedLimitUpEnabled,
      this.speedLimitDown,
      this.speedLimitUp});
}

// BitTorrent session abstraction
abstract class Session extends SessionBase {
  Session(
      {super.downloadDir,
      super.downloadQueueEnabled,
      super.downloadQueueSize,
      super.peerPort,
      super.speedLimitDownEnabled,
      super.speedLimitUpEnabled,
      super.speedLimitDown,
      super.speedLimitUp});

  // Update a session
  Future<void> update(SessionBase session);
}
