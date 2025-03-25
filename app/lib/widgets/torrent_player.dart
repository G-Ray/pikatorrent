import 'package:flutter/material.dart';
import 'package:media_kit/media_kit.dart';
import 'package:media_kit_video/media_kit_video.dart';
import 'package:pikatorrent/engine/file.dart' as torrent_file;
import 'package:pikatorrent/engine/torrent.dart';
import 'package:pikatorrent/utils/device.dart' as device;
import 'package:pikatorrent/utils/streaming_server.dart';
// import 'package:pikatorrent/widgets/video_player/player/streaming_torrent_player.dart';
import 'package:pikatorrent/widgets/window_title_bar.dart';

const bufferSize = 2 * 1024 * 1024; // 4 MB

class TorrentPlayer extends StatefulWidget {
  final torrent_file.File file;
  final String filePath;
  final Torrent torrent;

  const TorrentPlayer(
      {super.key,
      required this.filePath,
      required this.torrent,
      required this.file});

  @override
  State<TorrentPlayer> createState() => TorrentPlayerState();
}

class TorrentPlayerState extends State<TorrentPlayer> {
  late final Player player;
  late StreamingServer server;
  final GlobalKey _videoComponentKey = GlobalKey();

  // Create a [VideoController] to handle video output from [Player].
  late final controller = VideoController(player,
      configuration: const VideoControllerConfiguration());

  @override
  void initState() {
    super.initState();
    initPlayer();
  }

  void initPlayer() async {
    player = Player(
        configuration: const PlayerConfiguration(bufferSize: bufferSize));

    await (player.platform as NativePlayer).setProperty('network-timeout', '0');
    player.stream.log.listen(
      (log) {
        debugPrint('mpv: ${log}');
      },
    );

    widget.torrent.startStreaming(widget.file);
    server = StreamingServer(
        filePath: widget.filePath,
        bufferSize: bufferSize * 2, // Download at least double of bufferSize
        torrent: widget.torrent,
        torrentFile: widget.file);

    server.start();
    String serverAdress = await server.getAddress();
    await player.open(Media(serverAdress));
    await player.setSubtitleTrack(SubtitleTrack.no());
    await player.play();
  }

  @override
  void dispose() {
    widget.torrent.stopStreaming();
    player.dispose();
    server.stop();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Theme(
        data: ThemeData.dark(),
        child: Scaffold(
          backgroundColor: Colors.black,
          appBar: device.isDesktop()
              ? const WindowTitleBar(
                  backgroundColor: Colors.black,
                )
              : AppBar(
                  toolbarHeight: 0,
                ),
          body: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Padding(
                padding: const EdgeInsets.only(left: 16.0),
                child: IconButton(
                  icon: const Icon(
                    Icons.arrow_back,
                    color: Colors.white,
                  ),
                  onPressed: () {
                    player.stop();
                    Navigator.pop(context);
                  },
                ),
              ),
              Expanded(
                child: device.isMobile()
                    ? MaterialVideoControlsTheme(
                        normal: const MaterialVideoControlsThemeData(
                            seekBarThumbColor: Colors.blue,
                            seekBarPositionColor: Colors.blue,
                            padding: EdgeInsets.only(bottom: 64)),
                        fullscreen: const MaterialVideoControlsThemeData(
                          seekBarThumbColor: Colors.blue,
                          seekBarPositionColor: Colors.blue,
                          padding: EdgeInsets.only(bottom: 64),
                        ),
                        child: Video(
                          key: _videoComponentKey,
                          controller: controller,
                          controls: MaterialVideoControls,
                        ),
                      )
                    : MaterialDesktopVideoControlsTheme(
                        normal: const MaterialDesktopVideoControlsThemeData(
                          seekBarThumbColor: Colors.blue,
                          seekBarPositionColor: Colors.blue,
                        ),
                        fullscreen: const MaterialDesktopVideoControlsThemeData(
                          seekBarThumbColor: Colors.blue,
                          seekBarPositionColor: Colors.blue,
                        ),
                        child: Video(
                          key: _videoComponentKey,
                          controller: controller,
                          controls: MaterialDesktopVideoControls,
                        ),
                      ),
              )
            ],
          ),
        ));
  }
}
