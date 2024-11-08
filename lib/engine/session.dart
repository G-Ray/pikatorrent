class SessionBase {
  final String? downloadDir;
  final bool? downloadQueueEnabled;
  final int? downloadQueueSize;

  SessionBase(
      {this.downloadDir, this.downloadQueueEnabled, this.downloadQueueSize});
}

// BitTorrent session abstraction
abstract class Session extends SessionBase {
  Session(
      {super.downloadDir, super.downloadQueueEnabled, super.downloadQueueSize});

  // Update a session
  Future<void> update(SessionBase session);
}
