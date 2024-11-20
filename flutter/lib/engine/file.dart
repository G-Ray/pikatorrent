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

  File(
      {required this.name,
        required this.length,
        required this.bytesCompleted,
        required this.wanted});
}