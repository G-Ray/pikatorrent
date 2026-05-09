import 'package:jaspr/dom.dart';
import 'package:jaspr/jaspr.dart';

class Wordmark extends StatelessComponent {
  const Wordmark({this.large = false, super.key});

  final bool large;

  @override
  Component build(BuildContext context) {
    return div(classes: large ? 'wordmark wordmark--lg' : 'wordmark', [
      img(
        classes: 'wordmark-mark',
        src: '/images/logo.svg',
        alt: 'PikaTorrent logo',
      ),
      span(classes: 'wordmark-word', [
        span(classes: 'wordmark-pika', [Component.text('Pika')]),
        Component.text('Torrent'),
      ]),
    ]);
  }

  @css
  static List<StyleRule> get styles => [
    css('.wordmark', [
      css('&').styles(
        display: Display.inlineFlex,
        alignItems: AlignItems.center,
        gap: Gap.column(.75.rem),
      ),
      css('.wordmark-mark').styles(height: 2.rem, width: Unit.auto),
      css('.wordmark-word').styles(
        fontSize: 1.375.rem,
        fontWeight: FontWeight.w800,
        raw: {'letter-spacing': '-0.02em'},
      ),
      css('.wordmark-pika').styles(color: Color('#FFEB3B')),
    ]),
    css('.wordmark--lg', [
      css('&').styles(gap: Gap.column(1.125.rem)),
      css('.wordmark-mark').styles(
        height: 5.25.rem,
        raw: {'filter': 'drop-shadow(0 8px 24px rgba(255,235,59,0.35))'},
      ),
      css('.wordmark-word').styles(
        raw: {
          'font-size': 'clamp(48px, 7vw, 84px)',
          'letter-spacing': '-0.04em',
          'line-height': '1',
        },
      ),
    ]),
  ];
}
