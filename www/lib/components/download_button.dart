import 'dart:convert';

import 'package:http/http.dart' as http;
import 'package:jaspr/dom.dart';
import 'package:jaspr/jaspr.dart';
import 'package:jaspr_lucide/jaspr_lucide.dart' as lucide;
import 'package:universal_web/js_interop.dart';
import 'package:universal_web/web.dart' as web;

import 'button.dart';
import 'platform_icons.dart';

class _Platform {
  const _Platform(this.id, this.name, this.file, this.urlOf, this.icon);
  final String id;
  final String name;
  final String file;
  final String Function(String version) urlOf;
  final Component icon;
}

const _iconSize = 16;

String _release(String version, String suffix) =>
    'https://github.com/G-Ray/pikatorrent/releases/download/v$version/PikaTorrent-v$version$suffix';

final _platforms = <_Platform>[
  _Platform(
    'linux-flathub',
    'Linux',
    'Flathub',
    (_) => 'https://flathub.org/apps/com.pikatorrent.PikaTorrent',
    LinuxIcon(size: _iconSize),
  ),
  _Platform(
    'linux-x64',
    'Linux',
    '.zip x64',
    (v) => _release(v, '-linux-x64.zip'),
    LinuxIcon(size: _iconSize),
  ),
  _Platform(
    'linux-arm64',
    'Linux',
    '.zip arm64',
    (v) => _release(v, '-linux-arm64.zip'),
    LinuxIcon(size: _iconSize),
  ),
  _Platform(
    'macos-dmg',
    'macOS',
    '.dmg',
    (v) => _release(v, '-macos.dmg'),
    AppleIcon(size: _iconSize),
  ),
  _Platform(
    'macos-zip',
    'macOS',
    '.zip',
    (v) => _release(v, '-macos.app.zip'),
    AppleIcon(size: _iconSize),
  ),
  _Platform(
    'windows-store',
    'Windows',
    'Microsoft Store',
    (_) => 'https://apps.microsoft.com/detail/9n9gjq9bdjw3?mode=direct',
    WindowsIcon(size: _iconSize),
  ),
  _Platform(
    'windows-zip',
    'Windows',
    '.zip',
    (v) => _release(v, '-windows-x64.zip'),
    WindowsIcon(size: _iconSize),
  ),
  _Platform(
    'android-play',
    'Android',
    'Play Store',
    (_) => 'https://play.google.com/store/apps/details?id=com.pikatorrent.PikaTorrent',
    AndroidIcon(size: _iconSize),
  ),
  _Platform(
    'android-apk',
    'Android',
    '.apk',
    (v) => _release(v, '-android.apk'),
    AndroidIcon(size: _iconSize),
  ),
  _Platform(
    'ios-ipa',
    'iOS',
    '.ipa (experimental)',
    (v) => _release(v, '-ios.ipa'),
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
          'box-shadow': '0 30px 80px -30px rgba(40,30,0,0.25), 0 8px 24px -10px rgba(40,30,0,0.10)',
          'transform': 'translate(-50%, 4px)',
          'opacity': '0',
          'pointer-events': 'none',
          'transition': 'opacity .18s ease, transform .18s ease',
          'z-index': '10',
        },
      ),
      css('&.open .dl-menu').styles(
        raw: {
          'opacity': '1',
          'transform': 'translate(-50%, 0)',
          'pointer-events': 'auto',
        },
      ),
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
      css('.dl-menu-file').styles(
        raw: {
          'font-size': '11px',
          'color': 'var(--ink-3)',
          'margin-left': 'auto',
        },
      ),
      css('.dl-menu-sep').styles(
        height: 1.px,
        margin: Margin.symmetric(horizontal: 8.px, vertical: 6.px),
        raw: {'background': 'var(--line-2)'},
      ),
    ]),
    css('.dl-spinner').styles(
      display: Display.inlineFlex,
      raw: {
        'animation': 'dl-spin 0.9s linear infinite',
        'transform-origin': 'center',
      },
    ),
    css.keyframes('dl-spin', {
      'from': Styles(raw: {'transform': 'rotate(0deg)'}),
      'to': Styles(raw: {'transform': 'rotate(360deg)'}),
    }),
  ];
}

class _DownloadButtonState extends State<DownloadButton> {
  bool _open = false;
  String? _version;
  JSFunction? _outsideListener;

  @override
  void initState() {
    super.initState();
    if (kIsWeb) {
      _loadLatestVersion();
      _outsideListener = ((web.Event e) {
        if (!_open) return;
        final wrap = web.document.querySelector('.dl-wrap');
        final target = e.target;
        if (wrap == null || target == null) return;
        if (!wrap.contains(target as web.Node)) {
          setState(() => _open = false);
        }
      }).toJS;
      web.document.addEventListener('click', _outsideListener);
    }
  }

  @override
  void dispose() {
    if (kIsWeb && _outsideListener != null) {
      web.document.removeEventListener('click', _outsideListener);
    }
    super.dispose();
  }

  Future<void> _loadLatestVersion() async {
    try {
      final res = await http.get(
        Uri.https(
          'api.github.com',
          '/repos/G-Ray/pikatorrent/releases/latest',
        ),
      );
      if (res.statusCode != 200) return;
      final data = jsonDecode(res.body) as Map<String, dynamic>;
      final tag = (data['tag_name'] as String?) ?? '';
      final v = tag.startsWith('v') ? tag.substring(1) : tag;
      if (v.isNotEmpty) {
        setState(() => _version = v);
      }
    } catch (_) {
      // Stay in skeleton state if the fetch fails.
    }
  }

  void _toggle() => setState(() => _open = !_open);

  @override
  Component build(BuildContext context) {
    final version = _version;
    final loading = version == null;
    final trailing = loading
        ? span(
            classes: 'dl-spinner',
            [
              lucide.LoaderCircle(
                width: _iconSize.px,
                height: _iconSize.px,
              ),
            ],
          )
        : lucide.ChevronDown(width: _iconSize.px, height: _iconSize.px);

    return div(classes: _open ? 'dl-wrap open' : 'dl-wrap', [
      Button(
        label: 'Download PikaTorrent',
        sub: 'Choose your platform',
        icon: lucide.Download(width: _iconSize.px, height: _iconSize.px),
        trailing: trailing,
        onClick: loading ? null : _toggle,
      ),
      if (!loading) div(classes: 'dl-menu', _buildMenuItems(version)),
    ]);
  }

  List<Component> _buildMenuItems(String version) {
    final items = <Component>[];
    String? lastName;
    for (final p in _platforms) {
      if (lastName != null && lastName != p.name) {
        items.add(div(classes: 'dl-menu-sep', []));
      }
      items.add(
        a(href: p.urlOf(version), classes: 'dl-menu-item', [
          p.icon,
          span(classes: 'dl-menu-name', [Component.text(p.name)]),
          span(classes: 'dl-menu-file', [Component.text(p.file)]),
        ]),
      );
      lastName = p.name;
    }
    return items;
  }
}
