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
    return div(classes: 'site', [
      const Header(),
      main_(classes: 'site-main', [child]),
      const Footer(),
    ]);
  }
}
