# Streaming

The app has support for streaming media files with a Transmission fork supporting sequential download feature, used by `flutter_libtransmission`.

High-level implementation:

1. Set streaming torrent to sequential mode
2. Set high priority on the streaming file and associated subtitle files. This should pause other downloads in lower priority.
3. Expose a local HTTP server to handle streaming with requested ranges by the client. The streaming server will prioritize requested pieces and wait for them.
4. When player is closed, leave sequential mode and reset file priorities to normal.
