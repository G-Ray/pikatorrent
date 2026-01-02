import 'dart:async';

import 'package:async/async.dart';
import 'package:pikatorrent/engine/file.dart';
import 'package:pikatorrent/engine/torrent.dart';
import 'package:pikatorrent/main.dart';

class CancellationException implements Exception {}

/// Waits for a specified list of pieces to be downloaded.
///
/// [torrent] - The torrent containing the pieces
/// [neededPieces] - List of piece indices to wait for
/// [onCancelled] - Optional callback to check if operation should be cancelled
Future<void> waitForPiecesList({
  required Torrent torrent,
  required List<int> neededPieces,
  bool Function()? onCancelled,
}) async {
  final waitForPiecesCompleter = Completer();

  Future<void> testPiecesComplete(Timer? timer) async {
    if (onCancelled != null && onCancelled()) {
      timer?.cancel();
      if (!waitForPiecesCompleter.isCompleted) {
        waitForPiecesCompleter.completeError(CancellationException());
      }
      return;
    }

    // Refresh torrent data
    final Torrent t = await engine.fetchTorrent(torrent.id);
    final hasLoaded = t.hasLoadedPieces(neededPieces);

    if (hasLoaded) {
      if (timer != null) {
        timer.cancel();
      }

      if (!waitForPiecesCompleter.isCompleted) {
        waitForPiecesCompleter.complete();
      }
    }
  }

  await testPiecesComplete(null);

  if (!waitForPiecesCompleter.isCompleted) {
    Timer.periodic(const Duration(seconds: 1), testPiecesComplete);
  }

  return waitForPiecesCompleter.future;
}

/// Waits for a specified number of pieces to be downloaded for a given file.
///
/// [torrent] - The torrent containing the file
/// [file] - The file to wait for
/// [pieceCount] - Number of pieces to wait for (starting from file.beginPiece)
/// [cancelableCompleter] - Optional completer to support cancellation
Future<void> waitForPieces({
  required Torrent torrent,
  required File file,
  required int pieceCount,
  CancelableCompleter? cancelableCompleter,
}) async {
  List<int> neededPieces = [];
  final endPiece = (file.beginPiece + pieceCount).clamp(0, file.endPiece);
  for (int i = file.beginPiece; i < endPiece; i++) {
    neededPieces.add(i);
  }

  await waitForPiecesList(
    torrent: torrent,
    neededPieces: neededPieces,
    onCancelled: cancelableCompleter != null
        ? () => cancelableCompleter.isCanceled
        : null,
  );
}
