import 'package:jaspr/dom.dart';
import 'package:jaspr/jaspr.dart';
import 'package:jaspr_content/jaspr_content.dart';

import '../components/footer.dart';
import '../components/header.dart';

class HomeLayout extends PageLayoutBase {
  const HomeLayout();

  @override
  Pattern get name => 'home';

  @override
  Iterable<Component> buildHead(Page page) sync* {
    yield* super.buildHead(page);

    final pageData = page.data.page;
    final description = pageData['description']?.toString();
    final image = pageData['image']?.toString();

    yield link(rel: 'icon', type: 'image/svg+xml', href: '/images/logo.svg');
    yield meta(name: 'theme-color', content: '#FFEB3B');
    yield meta(attributes: {'property': 'og:type'}, content: 'website');
    yield meta(
      attributes: {'property': 'og:site_name'},
      content: 'PikaTorrent',
    );
    yield meta(name: 'twitter:card', content: 'summary_large_image');
    if (description != null) {
      yield meta(name: 'twitter:description', content: description);
    }
    if (image != null) {
      yield meta(name: 'twitter:image', content: image);
    }
  }

  @override
  Component buildBody(Page page, Component child) {
    return Component.fragment([
      div(classes: 'bg-grid', []),
      div(classes: 'site', [
        const Header(),
        main_(classes: 'site-main', [child]),
        const Footer(),
      ]),
    ]);
  }

  @css
  static List<StyleRule> get styles => [
    css(':root').styles(raw: {
      '--bg': '#FDFDFB',
      '--bg-2': '#F6F4EC',
      '--surface': '#FFFFFF',
      '--ink': '#1A1714',
      '--ink-2': '#4A453E',
      '--ink-3': '#8A8378',
      '--line': 'rgba(26,23,20,0.08)',
      '--line-2': 'rgba(26,23,20,0.14)',
      '--yellow': '#FFEB3B',
      '--yellow-deep': '#F5DD30',
      '--grid': 'rgba(26,23,20,0.05)',
      '--gradient-tl': 'rgba(255,235,59,0.55)',
      '--gradient-br': 'rgba(255,150,30,0.40)',
    }),
    css('[data-theme="dark"]').styles(raw: {
      '--bg': '#0D0C0A',
      '--bg-2': '#15130F',
      '--surface': '#1A1814',
      '--ink': '#FFFCF2',
      '--ink-2': '#C8C2B5',
      '--ink-3': '#7C7569',
      '--line': 'rgba(255,252,242,0.08)',
      '--line-2': 'rgba(255,252,242,0.16)',
      '--grid': 'rgba(255,252,242,0.04)',
      '--gradient-tl': 'rgba(255,235,59,0.32)',
      '--gradient-br': 'rgba(255,150,30,0.22)',
    }),
    css('body').styles(raw: {
      'background': 'var(--bg)',
      'color': 'var(--ink)',
      'position': 'relative',
      'overflow-x': 'hidden',
    }),
    css('body::before').styles(raw: {
      'content': '""',
      'position': 'fixed',
      'inset': '0',
      'pointer-events': 'none',
      'z-index': '-1',
      'background':
          'radial-gradient(ellipse 55% 50% at 0% 0%, var(--gradient-tl), transparent 65%),'
          'radial-gradient(ellipse 55% 50% at 100% 100%, var(--gradient-br), transparent 65%),'
          'linear-gradient(135deg, var(--bg) 0%, var(--bg) 100%)',
    }),
    css('.bg-grid').styles(raw: {
      'position': 'fixed',
      'inset': '0',
      'z-index': '0',
      'pointer-events': 'none',
      'background-image':
          'linear-gradient(var(--grid) 1px, transparent 1px),'
          'linear-gradient(90deg, var(--grid) 1px, transparent 1px)',
      'background-size': '56px 56px',
      '-webkit-mask-image':
          'radial-gradient(ellipse 80% 60% at 50% 30%, #000 30%, transparent 80%)',
      'mask-image':
          'radial-gradient(ellipse 80% 60% at 50% 30%, #000 30%, transparent 80%)',
    }),
    css('.site').styles(raw: {'position': 'relative', 'z-index': '1'}),
  ];
}
