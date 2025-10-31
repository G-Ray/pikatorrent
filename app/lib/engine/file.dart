// Torrent file abstraction
class File {
  // File name
  final String name;
  // Size in bytes
  final int length;
  // completed size in bytes
  final int bytesCompleted;
  // True if the file should be downloaded
  final bool wanted;
  final int beginPiece;
  final int endPiece;

  File(
      {required this.name,
      required this.length,
      required this.bytesCompleted,
      required this.wanted,
      required this.beginPiece,
      required this.endPiece});
}
