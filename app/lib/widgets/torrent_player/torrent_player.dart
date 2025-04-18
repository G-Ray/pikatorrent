import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:media_kit/media_kit.dart';
import 'package:media_kit_video/media_kit_video.dart';
import 'package:pikatorrent/engine/file.dart' as torrent_file;
import 'package:pikatorrent/engine/torrent.dart';
import 'package:pikatorrent/utils/device.dart' as device;
import 'package:pikatorrent/utils/streaming_server.dart';
import 'package:pikatorrent/utils/subtitles.dart';
import 'package:pikatorrent/utils/subtitles_server.dart';
import 'package:pikatorrent/widgets/torrent_player/dialogs/subtitles_loading.dart';
import 'package:pikatorrent/widgets/torrent_player/dialogs/subtitles_selector.dart';
import 'package:pikatorrent/widgets/window_title_bar.dart';

const bufferSize = 2 * 1024 * 1024;

class TorrentPlayer extends StatefulWidget {
  final torrent_file.File file;
  final String filePath;
  final Torrent torrent;

  const TorrentPlayer({
    super.key,
    required this.filePath,
    required this.torrent,
    required this.file,
  });

  @override
  State<TorrentPlayer> createState() => TorrentPlayerState();
}

class StreamingPlayer extends Player {
  StreamingServer server;

  StreamingPlayer({required super.configuration, required this.server});

  @override
  Future<void> seek(Duration duration) {
    // Cancel previous request, which might block next seek command
    server.cancelRequest();
    return super.seek(duration);
  }
}

class TorrentPlayerState extends State<TorrentPlayer> {
  late final StreamingPlayer player;
  late StreamingServer server;
  late SubtitlesServer subsServer;
  final GlobalKey _videoComponentKey = GlobalKey();

  // Create a [VideoController] to handle video output from [Player].
  late final controller = VideoController(
    player,
    configuration: const VideoControllerConfiguration(),
  );

  @override
  void initState() {
    // Enter immersive mode
    SystemChrome.setEnabledSystemUIMode(SystemUiMode.immersive);
    super.initState();
    initPlayer();
  }

  @override
  void dispose() {
    widget.torrent.stopStreaming();
    player.dispose();
    server.stop();
    subsServer.stop();
    // leave immersive mode
    SystemChrome.setEnabledSystemUIMode(SystemUiMode.edgeToEdge);
    super.dispose();
  }

  void initPlayer() async {
    // Streaming server
    server = StreamingServer(
      filePath: widget.filePath,
      bufferSize: bufferSize,
      torrent: widget.torrent,
      torrentFile: widget.file,
    );

    player = StreamingPlayer(
        configuration: const PlayerConfiguration(bufferSize: bufferSize),
        server: server);

    await (player.platform as NativePlayer).setProperty('network-timeout', '0');
    await (player.platform as NativePlayer).setProperty('cache', 'no');

    player.stream.log.listen((log) {
      debugPrint('mpv: ${log}');
    });

    widget.torrent.startStreaming(widget.file);

    server.start();
    subsServer = SubtitlesServer(torrent: widget.torrent);
    subsServer.start();
    final serverAdress = await server.getAddress();
    final subtitlesServerAdress = await subsServer.getAddress();

    debugPrint('download subs');
    // Download subtitles first
    if (widget.torrent.progress != 1) {
      onSubtitlesLoading();

      await downloadSubtitles(widget.file, widget.torrent);

      if (mounted) {
        Navigator.pop(context);
      }
    }

    debugPrint('open player');
    await player.open(Media(serverAdress));
    final externalSubtitlesFiles =
        getExternalSubtitles(widget.file, widget.torrent);

    final externalSubtitles =
        externalSubtitlesFiles // TODO: support more formats
            .map((f) => ExternalSubtitle(
                name: truncateFromLastSlash(f.name),
                url: Uri.encodeFull('$subtitlesServerAdress/${f.name}')))
            .toList();

    // Load external subtitles to be able to select them
    for (final sub in externalSubtitles) {
      // TODO: Detect language from file name
      await player.setSubtitleTrack(
          SubtitleTrack.uri(sub.url, title: sub.name, language: 'en'));
    }

    await player.setSubtitleTrack(SubtitleTrack.no());

    await player.play();
  }

  onSubtitlesLoading() {
    showDialog(
        context: context,
        barrierDismissible: false,
        builder: (BuildContext context) => const SubtitlesLoadingDialog());
  }

  onSubtitlesClick() {
    showDialog(
      context: context,
      builder: (BuildContext context) {
        return SubtitlesSelectorDialog(
          subtitles: player.state.tracks.subtitle,
          currentValue: player.state.track.subtitle.id,
          onSubtitleSelected: (SubtitleTrack sub) async {
            await player.setSubtitleTrack(sub);
          },
        );
      },
    );
  }

  Widget _buildBackButton() {
    return IconButton(
      icon: const Icon(Icons.arrow_back, color: Colors.white),
      onPressed: () {
        player.stop();
        Navigator.pop(context);
      },
    );
  }

  @override
  Widget build(BuildContext context) {
    return Theme(
      data: ThemeData.dark(),
      child: SafeArea(
        child: Scaffold(
          backgroundColor: Colors.black,
          appBar: device.isDesktop()
              ? const WindowTitleBar(backgroundColor: Colors.black)
              : AppBar(toolbarHeight: 0),
          body: Stack(
            children: [
              device.isMobile()
                  ? MaterialVideoControlsTheme(
                      normal: MaterialVideoControlsThemeData(
                          seekBarThumbColor: Colors.blue,
                          seekBarPositionColor: Colors.blue,
                          padding: const EdgeInsets.only(bottom: 64),
                          topButtonBar: [
                            _buildBackButton()
                          ],
                          bottomButtonBar: [
                            const MaterialPositionIndicator(),
                            const Spacer(),
                            MaterialDesktopCustomButton(
                              icon: const Icon(Icons.subtitles),
                              onPressed: onSubtitlesClick,
                            ),
                          ]),
                      fullscreen: MaterialVideoControlsThemeData(
                          seekBarThumbColor: Colors.blue,
                          seekBarPositionColor: Colors.blue,
                          padding: const EdgeInsets.only(bottom: 64),
                          topButtonBar: [_buildBackButton()],
                          bottomButtonBar: [
                            const MaterialPositionIndicator(),
                            const Spacer(),
                            MaterialDesktopCustomButton(
                              icon: const Icon(Icons.subtitles),
                              onPressed: onSubtitlesClick,
                            ),
                          ]),
                      child: Video(
                        key: _videoComponentKey,
                        controller: controller,
                        controls: MaterialVideoControls,
                      ),
                    )
                  : MaterialDesktopVideoControlsTheme(
                      normal: MaterialDesktopVideoControlsThemeData(
                        seekBarThumbColor: Colors.blue,
                        seekBarPositionColor: Colors.blue,
                        topButtonBar: [_buildBackButton()],
                        bottomButtonBar: [
                          const MaterialDesktopSkipPreviousButton(),
                          const MaterialDesktopPlayOrPauseButton(),
                          const MaterialDesktopSkipNextButton(),
                          const MaterialDesktopVolumeButton(),
                          const MaterialDesktopPositionIndicator(),
                          const Spacer(),
                          MaterialDesktopCustomButton(
                            icon: const Icon(Icons.subtitles),
                            onPressed: onSubtitlesClick,
                          ),
                          const MaterialDesktopFullscreenButton(),
                        ],
                      ),
                      fullscreen: MaterialDesktopVideoControlsThemeData(
                        seekBarThumbColor: Colors.blue,
                        seekBarPositionColor: Colors.blue,
                        topButtonBar: [_buildBackButton()],
                        bottomButtonBar: [
                          const MaterialDesktopSkipPreviousButton(),
                          const MaterialDesktopPlayOrPauseButton(),
                          const MaterialDesktopSkipNextButton(),
                          const MaterialDesktopVolumeButton(),
                          const MaterialDesktopPositionIndicator(),
                          const Spacer(),
                          MaterialDesktopCustomButton(
                            icon: const Icon(Icons.subtitles),
                            onPressed: onSubtitlesClick,
                          ),
                          const MaterialDesktopFullscreenButton(),
                        ],
                      ),
                      child: Video(
                        key: _videoComponentKey,
                        controller: controller,
                        controls: MaterialDesktopVideoControls,
                      ),
                    ),
            ],
          ),
        ),
      ),
    );
  }
}
