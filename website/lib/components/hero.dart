import 'package:jaspr/dom.dart';
import 'package:jaspr/jaspr.dart';

class Hero extends StatelessComponent {
  const Hero({super.key});

  @override
  Component build(BuildContext context) {
    return Component.fragment([
      Document.head(children: [Style(styles: _styles)]),
      section(classes: 'hero', [
        div(classes: 'hero-brand', [
          img(
            classes: 'hero-logo',
            src: '/images/logo.svg',
            alt: 'pikatorrent logo',
          ),
          h1(classes: 'hero-title', [
            span(classes: 'hero-pika', [Component.text('Pika')]),
            span([Component.text('Torrent')]),
          ]),
        ]),
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
      css('.hero-brand').styles(
        display: Display.flex,
        alignItems: AlignItems.center,
        gap: Gap.column(1.rem),
      ),
      css('.hero-logo').styles(width: 6.rem, height: Unit.auto),
      css('.hero-title', [
        css('&').styles(
          margin: Margin.zero,
          fontSize: 3.rem,
          display: Display.inlineFlex,
        ),
        css('.hero-pika').styles(
          raw: {
            'background': 'linear-gradient(to right, rgb(255, 214, 0), rgb(255, 255, 0))',
            '-webkit-background-clip': 'text',
            'background-clip': 'text',
            '-webkit-text-fill-color': 'transparent',
            'color': 'transparent',
          },
        ),
      ]),
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
