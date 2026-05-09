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
  Component buildBody(Page page, Component child) {
    return Component.fragment([
      Document.head(children: [Style(styles: _styles)]),
      div(classes: 'bg-grid', []),
      div(classes: 'site', [
        const Header(),
        main_(classes: 'site-main', [child]),
        const Footer(),
      ]),
    ]);
  }

  static List<StyleRule> get _styles => [
    css(':root').styles(raw: {
      '--bg': '#FDFDFB',
      '--grid': 'rgba(26,23,20,0.05)',
      '--gradient-tl': 'rgba(255,235,59,0.55)',
      '--gradient-br': 'rgba(255,150,30,0.40)',
    }),
    css('[data-theme="dark"]').styles(raw: {
      '--bg': '#0D0C0A',
      '--grid': 'rgba(255,252,242,0.04)',
      '--gradient-tl': 'rgba(255,235,59,0.32)',
      '--gradient-br': 'rgba(255,150,30,0.22)',
    }),
    css('body').styles(raw: {
      'background': 'var(--bg)',
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
