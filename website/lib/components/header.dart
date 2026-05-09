import 'package:jaspr/dom.dart';
import 'package:jaspr/jaspr.dart';
import 'package:jaspr_content/components/github_button.dart';
import 'package:jaspr_content/components/theme_toggle.dart';

class Header extends StatelessComponent {
  const Header({super.key});

  @override
  Component build(BuildContext context) {
    return Component.fragment([
      Document.head(children: [Style(styles: _styles)]),
      header(classes: 'header', [
        div(classes: 'header-inner', [
          a(classes: 'header-title', href: '/', [
            img(src: '/images/logo.svg', alt: 'PikaTorrent logo'),
            span(classes: 'header-wordmark', [
              span(classes: 'pika', [Component.text('Pika')]),
              Component.text('Torrent'),
            ]),
          ]),
          div(classes: 'header-content', [
            div(classes: 'header-items', [
              ThemeToggle(),
              GitHubButton(repo: 'G-Ray/pikatorrent'),
            ]),
          ]),
        ]),
      ]),
    ]);
  }

  static List<StyleRule> get _styles => [
    css('.header', [
      css('&').styles(
        border: Border.only(
          bottom: BorderSide(color: Color('#0000000d'), width: 1.px),
        ),
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
      css('.header-title', [
        css('&').styles(
          display: Display.inlineFlex,
          alignItems: AlignItems.center,
          gap: Gap.column(.75.rem),
          textDecoration: TextDecoration.none,
          raw: {'color': 'inherit'},
        ),
        css('img').styles(height: 2.rem, width: Unit.auto),
        css('.header-wordmark').styles(
          fontSize: 1.375.rem,
          fontWeight: FontWeight.w800,
          raw: {'letter-spacing': '-0.02em'},
        ),
        css('.header-wordmark .pika').styles(color: Color('#FFEB3B')),
      ]),
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
