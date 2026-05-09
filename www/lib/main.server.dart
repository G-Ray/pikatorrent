import 'package:jaspr/dom.dart';
import 'package:jaspr/server.dart';
import 'package:jaspr_content/jaspr_content.dart';
import 'package:jaspr_content/theme.dart';

import 'components/features.dart';
import 'components/hero.dart';
import 'components/showcase.dart';
import 'layouts/home_layout.dart';
import 'main.server.options.dart';

void main() {
  Jaspr.initializeApp(options: defaultServerOptions);

  runApp(
    ContentApp(
      theme: ContentTheme(text: Color.variable('--ink')),
      parsers: [
        MarkdownParser(),
      ],
      layouts: [
        const HomeLayout(),
      ],
      components: [
        CustomComponent(
          pattern: RegExp(r'^Hero$'),
          builder: (_, __, ___) => const Hero(),
        ),
        CustomComponent(
          pattern: RegExp(r'^Showcase$'),
          builder: (_, __, ___) => const Showcase(),
        ),
        CustomComponent(
          pattern: RegExp(r'^Features$'),
          builder: (_, __, ___) => const Features(),
        ),
      ],
    ),
  );
}
