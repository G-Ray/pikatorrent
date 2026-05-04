import 'package:jaspr/server.dart';
import 'package:jaspr_content/jaspr_content.dart';

import 'layouts/home_layout.dart';
import 'main.server.options.dart';

void main() {
  Jaspr.initializeApp(options: defaultServerOptions);

  runApp(
    ContentApp(
      parsers: [
        MarkdownParser(),
      ],
      layouts: [
        const HomeLayout(),
      ],
    ),
  );
}
