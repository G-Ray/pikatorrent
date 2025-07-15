class SessionBase {
  final String? downloadDir;
  final bool? downloadQueueEnabled;
  final int? downloadQueueSize;
  final int? peerPort;

  SessionBase(
      {this.downloadDir,
      this.downloadQueueEnabled,
      this.downloadQueueSize,
      this.peerPort});
}

// BitTorrent session abstraction
abstract class Session extends SessionBase {
  Session(
      {super.downloadDir,
      super.downloadQueueEnabled,
      super.downloadQueueSize,
      super.peerPort});

  // Update a session
  Future<void> update(SessionBase session);
}
