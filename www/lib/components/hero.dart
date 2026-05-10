import 'package:jaspr/dom.dart';
import 'package:jaspr/jaspr.dart';

import 'download_button.dart';
import 'wordmark.dart';

class Hero extends StatelessComponent {
  const Hero({super.key});

  @override
  Component build(BuildContext context) {
    return section(classes: 'hero', [
      const Wordmark(large: true),
      p(classes: 'hero-tagline', [
        Component.text('Just '),
        em([Component.text('pick a torrent')]),
        Component.text(', stream and download on all your devices.'),
      ]),
      const DownloadButton(),
      p(classes: 'hero-meta', [
        Component.text('free · open source · no ads · no tracking'),
      ]),
    ]);
  }

  @css
  static List<StyleRule> get styles => [
    css('.hero', [
      css('&').styles(
        display: Display.flex,
        flexDirection: FlexDirection.column,
        alignItems: AlignItems.center,
        padding: Padding.symmetric(vertical: 3.5.rem),
        raw: {'text-align': 'center'},
      ),
      css('.hero-tagline', [
        css('&').styles(
          margin: Margin.only(top: 1.75.rem, bottom: 2.5.rem),
          maxWidth: 820.px,
          fontWeight: FontWeight.w800,
          raw: {
            'font-size': 'clamp(26px, 3.4vw, 42px)',
            'color': 'var(--ink)',
            'line-height': '1.05',
            'letter-spacing': '-0.035em',
            'text-wrap': 'balance',
          },
        ),
        css('em').styles(
          padding: Padding.symmetric(horizontal: 4.px),
          raw: {
            'font-style': 'normal',
            'font-weight': 'inherit',
            'color': 'var(--ink)',
            'background':
                'linear-gradient(180deg, transparent 88%, var(--yellow) 88%)',
            'border-radius': '2px',
          },
        ),
      ]),
      css('.hero-meta').styles(
        margin: Margin.only(top: 1.125.rem, bottom: Unit.zero),
        raw: {
          'font-family': "'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, monospace",
          'font-size': '13px',
          'color': 'var(--ink-3)',
        },
      ),
    ]),
  ];
}

