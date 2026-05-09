import 'package:jaspr/dom.dart';
import 'package:jaspr/jaspr.dart';

class Button extends StatelessComponent {
  const Button({
    required this.label,
    this.sub,
    this.icon,
    this.trailing,
    this.href,
    this.onClick,
    super.key,
  });

  final String label;
  final String? sub;
  final Component? icon;
  final Component? trailing;
  final String? href;
  final VoidCallback? onClick;

  @override
  Component build(BuildContext context) {
    final children = [
      if (icon != null) icon!,
      span(classes: 'btn-label', [
        span(classes: 'btn-main', [Component.text(label)]),
        if (sub != null) span(classes: 'btn-sub', [Component.text(sub!)]),
      ]),
      if (trailing != null) trailing!,
    ];

    if (href != null) {
      return a(classes: 'btn-primary', href: href!, children);
    }
    return button(
      classes: 'btn-primary',
      type: ButtonType.button,
      onClick: onClick,
      children,
    );
  }

  @css
  static List<StyleRule> get styles => [
    css('.btn-primary', [
      css('&').styles(
        display: Display.inlineFlex,
        alignItems: AlignItems.center,
        gap: Gap.column(12.px),
        padding: Padding.symmetric(horizontal: 26.px, vertical: 16.px),
        border: Border.unset,
        radius: BorderRadius.circular(14.px),
        cursor: Cursor.pointer,
        fontWeight: FontWeight.w700,
        textDecoration: TextDecoration.none,
        raw: {
          'background': '#FFEB3B',
          'color': '#1A1714',
          'font-size': '16.5px',
          'font-family': 'inherit',
          'letter-spacing': '-0.01em',
          'box-shadow': '0 12px 32px -8px rgba(255,235,59,0.55)',
        },
      ),
      css('svg').styles(width: 20.px, height: 20.px),
      css('.btn-label').styles(
        display: Display.flex,
        flexDirection: FlexDirection.column,
        alignItems: AlignItems.start,
        raw: {'line-height': '1.1'},
      ),
      css('.btn-main').styles(raw: {'white-space': 'nowrap'}),
      css('.btn-sub').styles(
        display: Display.block,
        fontWeight: FontWeight.w500,
        margin: Margin.only(top: 3.px),
        raw: {
          'font-size': '11.5px',
          'opacity': '0.65',
          'white-space': 'nowrap',
        },
      ),
    ]),
  ];
}
