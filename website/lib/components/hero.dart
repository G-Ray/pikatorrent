import 'package:jaspr/dom.dart';
import 'package:jaspr/jaspr.dart';

import 'wordmark.dart';

class Hero extends StatelessComponent {
  const Hero({super.key});

  @override
  Component build(BuildContext context) {
    return Component.fragment([
      Document.head(children: [Style(styles: _styles)]),
      section(classes: 'hero', [
        const Wordmark(large: true),
        h2(classes: 'hero-tagline', [Component.text('Just pick a Torrent')]),
        h3(classes: 'hero-subtitle', [
          Component.text('Stream and download torrents on all your devices.'),
        ]),
      ]),
    ]);
  }

  static List<StyleRule> get _styles => [
    css('.hero', [
      css('&').styles(
        display: Display.flex,
        flexDirection: FlexDirection.column,
        alignItems: AlignItems.center,
        padding: Padding.symmetric(vertical: 2.rem),
        raw: {'text-align': 'center'},
      ),
      css('.hero-tagline').styles(
        margin: Margin.only(top: 1.rem, bottom: .5.rem),
        fontWeight: FontWeight.bold,
      ),
      css('.hero-subtitle').styles(
        margin: Margin.zero,
        fontWeight: FontWeight.normal,
      ),
    ]),
  ];
}
