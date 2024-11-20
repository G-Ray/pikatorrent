enum SessionField { downloadDir, downloadQueueEnabled, downloadQueueSize }

class SessionGetRequest {
  final method = 'session-get';
  final SessionGetRequestArguments arguments;

  SessionGetRequest({required this.arguments});

  Map<String, dynamic> toJson() =>
      {'method': method, 'arguments': arguments.toJson()};
}

class SessionGetRequestArguments {
  final List<SessionField> fields;

  SessionGetRequestArguments({required this.fields});

  Map<String, dynamic> toJson() {
    final json = <String, dynamic>{
      'fields': fields.map((field) {
        return switch (field) {
          SessionField.downloadDir => 'download-dir',
          SessionField.downloadQueueEnabled => 'download-queue-enabled',
          SessionField.downloadQueueSize => 'download-queue-size'
        };
      }).toList()
    };

    return json;
  }
}
