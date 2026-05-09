import 'package:jaspr/dom.dart';
import 'package:jaspr/jaspr.dart';
import 'package:jaspr_content/components/github_button.dart';
import 'package:jaspr_content/components/theme_toggle.dart';

import 'wordmark.dart';

class Header extends StatelessComponent {
  const Header({super.key});

  @override
  Component build(BuildContext context) {
    return header(classes: 'header', [
      div(classes: 'header-inner', [
        a(classes: 'header-title', href: '/', [const Wordmark()]),
        div(classes: 'header-content', [
          div(classes: 'header-items', [
            ThemeToggle(),
            GitHubButton(repo: 'G-Ray/pikatorrent'),
          ]),
        ]),
      ]),
    ]);
  }

  @css
  static List<StyleRule> get styles => [
    css('.header', [
      css('&').styles(
        border: Border.only(
          bottom: BorderSide(color: Color('#0000000d'), width: 1.px),
        ),
        raw: {
          'background': 'var(--bg)',
          'z-index': '20',
        },
      ),
      css('.header-inner', [
        css('&').styles(
          height: 4.rem,
          maxWidth: 1240.px,
          display: Display.flex,
          alignItems: AlignItems.center,
          gap: Gap.column(1.rem),
          padding: Padding.symmetric(horizontal: 1.rem, vertical: .25.rem),
          margin: Margin.symmetric(horizontal: Unit.auto),
        ),
        css.media(MediaQuery.all(minWidth: 768.px), [
          css('&').styles(padding: Padding.symmetric(horizontal: 2.5.rem)),
        ]),
      ]),
      css('.header-title').styles(
        textDecoration: TextDecoration.none,
        raw: {'color': 'inherit'},
      ),
      css('.header-content', [
        css('&').styles(
          display: Display.flex,
          flex: Flex(grow: 1),
          justifyContent: JustifyContent.end,
        ),
      ]),
      css('.header-items', [
        css('&').styles(
          display: Display.flex,
          gap: Gap.column(0.25.rem),
        ),
      ]),
    ]),
  ];
}
