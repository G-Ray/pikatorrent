# Streaming

The app has currently basic support for streaming media files with Transmission's sequential feature.

High-level implementation:

1. Save current session state into a .json file
2. Set torrent to sequential mode
3. Pause other files and other torrents until this one is completed
   (Not perfect as current file could be slower than other downloads combined, but could improve buffering time)
4. Expose a local http server to handle streaming with requested ranges by the client. The streaming server wil priorize requested pieces and wait for them.
5. When player is closed, leave sequential mode and resume other downloads using the saved session state.
   Sequential mode should be disabled when the app is (re)started. If a crash happen, the app should
   recover the session state before sequential streaming has been enabled.
