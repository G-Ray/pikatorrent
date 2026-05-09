import 'package:jaspr/dom.dart';
import 'package:jaspr/jaspr.dart';
import 'package:jaspr_lucide/jaspr_lucide.dart' as lucide;

import '../config.dart';
import 'button.dart';
import 'platform_icons.dart';

class _Platform {
  const _Platform(this.id, this.name, this.file, this.url, this.icon);
  final String id;
  final String name;
  final String file;
  final String url;
  final Component icon;
}

const _iconSize = 16;

const _releasePrefix =
    'https://github.com/G-Ray/pikatorrent/releases/download/v$appVersion/PikaTorrent-v$appVersion';

final _platforms = <_Platform>[
  _Platform(
    'windows-store',
    'Windows',
    'Microsoft Store',
    'https://apps.microsoft.com/detail/9n9gjq9bdjw3?mode=direct',
    WindowsIcon(size: _iconSize),
  ),
  _Platform(
    'windows-zip',
    'Windows',
    '.zip',
    '$_releasePrefix-windows-x64.zip',
    WindowsIcon(size: _iconSize),
  ),
  _Platform(
    'linux-flathub',
    'Linux',
    'Flathub',
    'https://flathub.org/apps/com.pikatorrent.PikaTorrent',
    LinuxIcon(size: _iconSize),
  ),
  _Platform(
    'linux-x64',
    'Linux',
    '.zip x64',
    '$_releasePrefix-linux-x64.zip',
    LinuxIcon(size: _iconSize),
  ),
  _Platform(
    'linux-arm64',
    'Linux',
    '.zip arm64',
    '$_releasePrefix-linux-arm64.zip',
    LinuxIcon(size: _iconSize),
  ),
  _Platform(
    'macos-dmg',
    'macOS',
    '.dmg',
    '$_releasePrefix-macos.dmg',
    AppleIcon(size: _iconSize),
  ),
  _Platform(
    'macos-zip',
    'macOS',
    '.zip',
    '$_releasePrefix-macos.app.zip',
    AppleIcon(size: _iconSize),
  ),
  _Platform(
    'android-play',
    'Android',
    'Play Store',
    'https://play.google.com/store/apps/details?id=com.pikatorrent.PikaTorrent',
    AndroidIcon(size: _iconSize),
  ),
  _Platform(
    'android-apk',
    'Android',
    '.apk',
    '$_releasePrefix-android.apk',
    AndroidIcon(size: _iconSize),
  ),
  _Platform(
    'ios-ipa',
    'iOS',
    '.ipa (experimental)',
    '$_releasePrefix-ios.ipa',
    AppleIcon(size: _iconSize),
  ),
];

@client
class DownloadButton extends StatefulComponent {
  const DownloadButton({super.key});

  @override
  State<DownloadButton> createState() => _DownloadButtonState();

  @css
  static List<StyleRule> get styles => [
    css('.dl-wrap', [
      css('&').styles(
        position: Position.relative(),
        display: Display.inlineBlock,
      ),
      css('.dl-menu').styles(
        position: Position.absolute(top: 100.percent, left: 50.percent),
        margin: Margin.only(top: 8.px),
        padding: Padding.all(6.px),
        radius: BorderRadius.circular(14.px),
        raw: {
          'min-width': '220px',
          'background': 'var(--bg)',
          'border': '1px solid rgba(26,23,20,0.14)',
          'box-shadow':
              '0 30px 80px -30px rgba(40,30,0,0.25), 0 8px 24px -10px rgba(40,30,0,0.10)',
          'transform': 'translate(-50%, 4px)',
          'opacity': '0',
          'pointer-events': 'none',
          'transition': 'opacity .18s ease, transform .18s ease',
          'z-index': '10',
        },
      ),
      css('&.open .dl-menu').styles(raw: {
        'opacity': '1',
        'transform': 'translate(-50%, 0)',
        'pointer-events': 'auto',
      }),
      css('.dl-menu-item', [
        css('&').styles(
          display: Display.flex,
          alignItems: AlignItems.center,
          gap: Gap.column(10.px),
          padding: Padding.symmetric(horizontal: 12.px, vertical: 10.px),
          radius: BorderRadius.circular(9.px),
          textDecoration: TextDecoration.none,
          fontWeight: FontWeight.w500,
          raw: {'color': 'var(--ink)', 'font-size': '14.5px'},
        ),
        css('&:hover').styles(raw: {'background': 'rgba(26,23,20,0.05)'}),
        css('svg').styles(
          width: _iconSize.px,
          height: _iconSize.px,
          raw: {'opacity': '0.7'},
        ),
      ]),
      css('.dl-menu-name').styles(
        fontWeight: FontWeight.w700,
        raw: {'flex': '1', 'text-align': 'left'},
      ),
      css('.dl-menu-file').styles(raw: {
        'font-size': '11px',
        'color': 'var(--ink-3)',
        'margin-left': 'auto',
      }),
    ]),
  ];
}

class _DownloadButtonState extends State<DownloadButton> {
  bool _open = false;

  void _toggle() => setState(() => _open = !_open);

  @override
  Component build(BuildContext context) {
    return div(classes: _open ? 'dl-wrap open' : 'dl-wrap', [
      Button(
        label: 'Download PikaTorrent',
        sub: 'Choose your platform',
        icon: lucide.Download(width: _iconSize.px, height: _iconSize.px),
        trailing: lucide.ChevronDown(
          width: _iconSize.px,
          height: _iconSize.px,
        ),
        onClick: _toggle,
      ),
      div(classes: 'dl-menu', [
        for (final p in _platforms)
          a(href: p.url, classes: 'dl-menu-item', [
            p.icon,
            span(classes: 'dl-menu-name', [Component.text(p.name)]),
            span(classes: 'dl-menu-file', [Component.text(p.file)]),
          ]),
      ]),
    ]);
  }
}

