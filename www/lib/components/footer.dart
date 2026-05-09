import 'package:jaspr/dom.dart';
import 'package:jaspr/jaspr.dart';

import 'wordmark.dart';

class Footer extends StatelessComponent {
  const Footer({super.key});

  @override
  Component build(BuildContext context) {
    return footer(classes: 'site-footer', [
      div(classes: 'site-footer-inner', [
        div(classes: 'site-footer-row', [
          div(classes: 'site-footer-brand', [
            const Wordmark(),
            p(classes: 'site-footer-blurb', [
              Component.text(
                'An open-source, cross-platform BitTorrent client. Stream and download on all your devices.',
              ),
            ]),
          ]),
          div(classes: 'site-footer-col', [
            h4([Component.text('Product')]),
            a(href: '#features', [Component.text('Features')]),
            a(href: '#screenshots', [Component.text('Screenshots')]),
            a(
              href: 'https://github.com/G-Ray/pikatorrent/releases',
              target: Target.blank,
              [Component.text('Releases')],
            ),
          ]),
          div(classes: 'site-footer-col', [
            h4([Component.text('Community')]),
            a(
              href: 'https://discord.gg/6HxCV4aGdy',
              target: Target.blank,
              [Component.text('Discord')],
            ),
            a(
              href: 'https://github.com/G-Ray/pikatorrent/issues',
              target: Target.blank,
              [Component.text('Report an issue')],
            ),
            a(
              href: 'https://hosted.weblate.org/projects/pikatorrent',
              target: Target.blank,
              [Component.text('Translations')],
            ),
          ]),
          div(classes: 'site-footer-col', [
            h4([Component.text('Legal')]),
            a(
              href: 'https://github.com/G-Ray/pikatorrent/blob/main/LICENSE',
              target: Target.blank,
              [Component.text('License (GPL-3.0)')],
            ),
          ]),
        ]),
        div(classes: 'site-footer-legal', [
          div([
            Component.text('© 2026 PikaTorrent · '),
            span(classes: 'site-footer-tag', [
              Component.text('GPL-3.0-or-later'),
            ]),
          ]),
        ]),
      ]),
    ]);
  }

  @css
  static List<StyleRule> get styles => [
    css('.site-footer', [
      css('&').styles(
        margin: Margin.only(top: 80.px),
        raw: {'border-top': '1px solid var(--line)'},
      ),
      css('.site-footer-inner').styles(
        maxWidth: 1240.px,
        margin: Margin.symmetric(horizontal: Unit.auto),
        padding: Padding.symmetric(horizontal: 2.rem),
        raw: {'padding-block': '56px 40px'},
      ),
      css('.site-footer-row').styles(
        display: Display.flex,
        gap: Gap(column: 40.px, row: 40.px),
        raw: {
          'justify-content': 'space-between',
          'align-items': 'flex-start',
          'flex-wrap': 'wrap',
        },
      ),
      css('.site-footer-brand', [
        css('&').styles(raw: {'flex': '1 1 320px'}),
        css('.site-footer-blurb').styles(
          margin: Margin.only(top: 14.px, bottom: 14.px),
          maxWidth: 320.px,
          raw: {
            'color': 'var(--ink-2)',
            'font-size': '14px',
            'line-height': '1.6',
          },
        ),
      ]),
      css('.site-footer-col', [
        css('h4').styles(
          margin: Margin.only(top: Unit.zero, bottom: 14.px),
          fontWeight: FontWeight.w600,
          raw: {
            'font-family': "'JetBrains Mono', ui-monospace, monospace",
            'font-size': '12px',
            'letter-spacing': '0.1em',
            'text-transform': 'uppercase',
            'color': 'var(--ink-3)',
          },
        ),
        css('a', [
          css('&').styles(
            display: Display.block,
            margin: Margin.only(bottom: 8.px),
            fontWeight: FontWeight.w500,
            textDecoration: TextDecoration.none,
            raw: {'color': 'var(--ink-2)', 'font-size': '14.5px'},
          ),
          css('&:hover').styles(raw: {'color': 'var(--yellow)'}),
        ]),
      ]),
      css('.site-footer-legal').styles(
        display: Display.flex,
        margin: Margin.only(top: 48.px),
        padding: Padding.only(top: 48.px),
        raw: {
          'border-top': '1px solid var(--line)',
          'justify-content': 'space-between',
          'align-items': 'center',
          'gap': '20px',
          'flex-wrap': 'wrap',
          'color': 'var(--ink-3)',
          'font-size': '13px',
        },
      ),
      css('.site-footer-tag').styles(
        display: Display.inlineFlex,
        alignItems: AlignItems.center,
        padding: Padding.symmetric(horizontal: 10.px, vertical: 4.px),
        radius: BorderRadius.circular(6.px),
        raw: {
          'background': 'var(--bg-2)',
          'font-family': "'JetBrains Mono', ui-monospace, monospace",
          'font-size': '12px',
        },
      ),
    ]),
  ];
}
