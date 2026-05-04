import 'package:jaspr/jaspr.dart';
import 'package:jaspr_content/components/github_button.dart';
import 'package:jaspr_content/components/header.dart' as content;
import 'package:jaspr_content/components/theme_toggle.dart';

class Header extends StatelessComponent {
  const Header({super.key});

  @override
  Component build(BuildContext context) {
    return content.Header(
      logo: '/images/logo.svg',
      title: 'PikaTorrent',
      leading: const [],
      items: [
        ThemeToggle(),
        GitHubButton(repo: 'G-Ray/pikatorrent'),
      ],
    );
  }
}
