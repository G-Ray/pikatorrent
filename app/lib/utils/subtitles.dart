int countSlashesRegex(String text) {
  final regex = RegExp('/');
  return regex.allMatches(text).length;
}

String truncateFromLastSlash(String text) {
  int lastSlashIndex = text.lastIndexOf('/');
  if (lastSlashIndex != -1) {
    return text.substring(lastSlashIndex + 1);
  } else {
    return text;
  }
}

class ExternalSubtitle {
  final String url;
  final String name;

  ExternalSubtitle({required this.url, required this.name});
}
