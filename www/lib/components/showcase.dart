import 'package:jaspr/dom.dart';
import 'package:jaspr/jaspr.dart';

class Showcase extends StatelessComponent {
  const Showcase({super.key});

  @override
  Component build(BuildContext context) {
    return section(classes: 'showcase', id: 'screenshots', [
      div(classes: 'showcase-stage', [
        div(classes: 'desktop-hero', [
          img(
            classes: 'shot-light',
            src: '/images/desktop-light.avif',
            alt: 'PikaTorrent desktop',
          ),
          img(
            classes: 'shot-dark',
            src: '/images/desktop-dark.avif',
            alt: 'PikaTorrent desktop',
          ),
        ]),
        div(classes: 'mobile-float', [
          img(
            classes: 'shot-light',
            src: '/images/mobile-light.avif',
            alt: 'PikaTorrent mobile',
          ),
          img(
            classes: 'shot-dark',
            src: '/images/mobile-dark.avif',
            alt: 'PikaTorrent mobile',
          ),
        ]),
      ]),
      div(classes: 'player-below', [
        img(
          src: '/images/desktop-player.avif',
          alt: 'PikaTorrent built-in streaming player',
        ),
      ]),
      p(classes: 'player-caption', [
        Component.text('Built-in streaming player · Watch as it downloads'),
      ]),
    ]);
  }

  @css
  static List<StyleRule> get styles => [
    css('.showcase', [
      css('&').styles(
        maxWidth: 1240.px,
        margin: Margin.symmetric(horizontal: Unit.auto),
        padding: Padding.symmetric(horizontal: 2.rem),
        raw: {'padding-block': '24px 24px'},
      ),
      css('img').styles(
        display: Display.block,
        width: 100.percent,
        height: Unit.auto,
      ),
      css('.showcase-stage').styles(
        position: Position.relative(),
        maxWidth: 1100.px,
        margin: Margin.symmetric(horizontal: Unit.auto),
      ),
      css('.mobile-float').styles(
        position: Position.absolute(right: (-50).px, bottom: (-110).px),
        width: 360.px,
        zIndex: ZIndex(2),
        raw: {'transform': 'rotate(4deg)'},
      ),
      css('.player-below').styles(
        maxWidth: 1000.px,
        margin: Margin.only(top: 130.px, left: Unit.auto, right: Unit.auto),
      ),
      css('.player-caption').styles(
        margin: Margin.only(top: 20.px),
        fontWeight: FontWeight.w500,
        raw: {
          'text-align': 'center',
          'color': 'var(--ink-3)',
          'font-size': '13.5px',
          'font-family': "'JetBrains Mono', ui-monospace, monospace",
        },
      ),
    ]),
    // Light/dark image swap. Kept outside the .showcase nesting because
    // [data-theme="dark"] lives on <html>, an ancestor of .showcase.
    css('.showcase .shot-dark').styles(display: Display.none),
    css('[data-theme="dark"] .showcase .shot-light').styles(
      display: Display.none,
    ),
    css('[data-theme="dark"] .showcase .shot-dark').styles(
      display: Display.block,
    ),
    css.media(MediaQuery.all(maxWidth: 580.px), [
      css('.showcase .mobile-float').styles(
        width: 130.px,
        raw: {'right': '-8px', 'bottom': '-20px'},
      ),
    ]),
  ];
}
