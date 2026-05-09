// dart format off
// ignore_for_file: type=lint

// GENERATED FILE, DO NOT MODIFY
// Generated with jaspr_builder

import 'package:jaspr/server.dart';
import 'package:jaspr_content/components/github_button.dart' as _github_button;
import 'package:jaspr_content/components/theme_toggle.dart' as _theme_toggle;

/// Default [ServerOptions] for use with your Jaspr project.
///
/// Use this to initialize Jaspr **before** calling [runApp].
///
/// Example:
/// ```dart
/// import 'main.server.options.dart';
///
/// void main() {
///   Jaspr.initializeApp(
///     options: defaultServerOptions,
///   );
///
///   runApp(...);
/// }
/// ```
ServerOptions get defaultServerOptions => ServerOptions(
  clientId: 'main.client.dart.js',
  clients: {
    _github_button.GitHubButton: ClientTarget<_github_button.GitHubButton>(
      'jaspr_content:github_button',
      params: __github_buttonGitHubButton,
    ),
    _theme_toggle.ThemeToggle: ClientTarget<_theme_toggle.ThemeToggle>(
      'jaspr_content:theme_toggle',
    ),
  },
  styles: () => [
    ..._github_button.GitHubButton.styles,
    ..._theme_toggle.ThemeToggleState.styles,
  ],
);

Map<String, Object?> __github_buttonGitHubButton(
  _github_button.GitHubButton c,
) => {'repo': c.repo};
