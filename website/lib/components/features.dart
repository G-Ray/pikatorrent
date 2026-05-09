import 'package:jaspr/dom.dart';
import 'package:jaspr/jaspr.dart';
import 'package:jaspr_lucide/jaspr_lucide.dart' as lucide;

class _Feature {
  const _Feature(this.title, this.description, this.iconBuilder, {this.trailing});
  final String title;
  final String description;
  final Component Function() iconBuilder;
  final Component? trailing;
}

const _iconSize = 18;

List<_Feature> get _features => <_Feature>[
  _Feature(
    'Streaming support.',
    'Watch video the moment a torrent starts — with subtitle support and audio tracks selection.',
    () => lucide.CirclePlay(width: _iconSize.px, height: _iconSize.px),
  ),
  _Feature(
    'Share with friends',
    'Send a torrent to anyone with a single link.',
    () => lucide.Share2(width: _iconSize.px, height: _iconSize.px),
  ),
  _Feature(
    'On all your devices',
    'Native apps for Windows, Linux, macOS, Android and iOS.',
    () => lucide.MonitorSmartphone(width: _iconSize.px, height: _iconSize.px),
  ),
  _Feature(
    "A UI you'll actually enjoy",
    'Modern, uncluttered, and dark-mode support.',
    () => lucide.Palette(width: _iconSize.px, height: _iconSize.px),
  ),
  _Feature(
    'Tag and organize',
    'Add custom tags to your torrents and browse your torrents in seconds.',
    () => lucide.Tag(width: _iconSize.px, height: _iconSize.px),
  ),
  _Feature(
    'Pick what you want',
    "Select individual files to download or pause — don't waste bandwidth on what you don't need.",
    () => lucide.ListChecks(width: _iconSize.px, height: _iconSize.px),
  ),
  _Feature(
    'Browse inside torrents',
    'Explore and open files directly without leaving the app.',
    () => lucide.FolderOpen(width: _iconSize.px, height: _iconSize.px),
  ),
  _Feature(
    'Built on (lib)Transmission',
    'A battle-tested engine under the hood means low CPU, low memory usage. We also contribute back to Transmission source code.',
    () => lucide.Cpu(width: _iconSize.px, height: _iconSize.px),
    trailing: lucide.Heart(width: 14.px, height: 14.px),
  ),
  _Feature(
    'Open source, forever',
    "GPL-3.0 licensed. No telemetry, no ads, no surprises.",
    () => lucide.GitBranch(width: _iconSize.px, height: _iconSize.px),
  ),
];

class Features extends StatelessComponent {
  const Features({super.key});

  @override
  Component build(BuildContext context) {
    return section(classes: 'features', id: 'features', [
      div(classes: 'feat-grid', [
        for (var i = 0; i < _features.length; i++) _featureCard(i + 1, _features[i]),
      ]),
    ]);
  }

  Component _featureCard(int n, _Feature f) {
    return div(classes: 'feat', [
      span(classes: 'feat-num', [
        Component.text(n.toString().padLeft(2, '0')),
      ]),
      div(classes: 'feat-ico', [f.iconBuilder()]),
      h3(classes: 'feat-title', [Component.text(f.title)]),
      p(classes: 'feat-desc', [
        Component.text(f.description),
        if (f.trailing != null) ...[
          Component.text(' '),
          span(classes: 'feat-desc-icon', [f.trailing!]),
        ],
      ]),
    ]);
  }

  @css
  static List<StyleRule> get styles => [
    css('.features', [
      css('&').styles(
        position: Position.relative(),
        maxWidth: 1240.px,
        margin: Margin.symmetric(horizontal: Unit.auto),
        padding: Padding.symmetric(horizontal: 2.rem),
        raw: {'padding-block': '40px 100px'},
      ),
      css('.feat-grid').styles(
        display: Display.grid,
        gap: Gap(column: 20.px, row: 20.px),
        raw: {'grid-template-columns': 'repeat(3, 1fr)'},
      ),
      css('.feat', [
        css('&').styles(
          position: Position.relative(),
          padding: Padding.all(20.px),
          radius: BorderRadius.circular(14.px),
          overflow: Overflow.hidden,
          raw: {
            'background': 'var(--surface)',
            'border': '1px solid var(--line)',
          },
        ),
        css('.feat-num').styles(
          position: Position.absolute(top: 14.px, right: 16.px),
          fontWeight: FontWeight.w500,
          raw: {
            'font-family': "'JetBrains Mono', ui-monospace, monospace",
            'font-size': '11px',
            'color': 'var(--ink-3)',
          },
        ),
        css('.feat-ico').styles(
          display: Display.grid,
          width: 36.px,
          height: 36.px,
          margin: Margin.only(bottom: 14.px),
          radius: BorderRadius.circular(10.px),
          raw: {
            'background': 'var(--yellow)',
            'place-items': 'center',
            'color': 'var(--ink)',
          },
        ),
        css('.feat-title').styles(
          margin: Margin.only(bottom: 6.px),
          fontWeight: FontWeight.w700,
          raw: {'font-size': '17px', 'letter-spacing': '-0.02em'},
        ),
        css('.feat-desc').styles(
          margin: Margin.zero,
          raw: {
            'color': 'var(--ink-2)',
            'font-size': '13.5px',
            'line-height': '1.5',
          },
        ),
        css('.feat-desc-icon').styles(
          display: Display.inlineFlex,
          raw: {
            'vertical-align': '-2px',
            'color': '#E0245E',
          },
        ),
      ]),
    ]),
    css.media(MediaQuery.all(maxWidth: 880.px), [
      css('.features .feat-grid').styles(
        raw: {
          'grid-template-columns': 'repeat(2, 1fr)',
        },
      ),
    ]),
    css.media(MediaQuery.all(maxWidth: 580.px), [
      css('.features .feat-grid').styles(
        raw: {
          'grid-template-columns': '1fr',
        },
      ),
    ]),
  ];
}
