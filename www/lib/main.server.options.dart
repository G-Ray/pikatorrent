// dart format off
// ignore_for_file: type=lint

// GENERATED FILE, DO NOT MODIFY
// Generated with jaspr_builder

import 'package:jaspr/server.dart';
import 'package:jaspr_content/components/github_button.dart' as _github_button;
import 'package:jaspr_content/components/theme_toggle.dart' as _theme_toggle;
import 'package:website/components/button.dart' as _button;
import 'package:website/components/download_button.dart' as _download_button;
import 'package:website/components/features.dart' as _features;
import 'package:website/components/footer.dart' as _footer;
import 'package:website/components/header.dart' as _header;
import 'package:website/components/hero.dart' as _hero;
import 'package:website/components/showcase.dart' as _showcase;
import 'package:website/components/wordmark.dart' as _wordmark;
import 'package:website/layouts/home_layout.dart' as _home_layout;

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
    _download_button.DownloadButton:
        ClientTarget<_download_button.DownloadButton>('download_button'),
  },
  styles: () => [
    ..._github_button.GitHubButton.styles,
    ..._theme_toggle.ThemeToggleState.styles,
    ..._button.Button.styles,
    ..._download_button.DownloadButton.styles,
    ..._features.Features.styles,
    ..._footer.Footer.styles,
    ..._header.Header.styles,
    ..._hero.Hero.styles,
    ..._showcase.Showcase.styles,
    ..._wordmark.Wordmark.styles,
    ..._home_layout.HomeLayout.styles,
  ],
);

Map<String, Object?> __github_buttonGitHubButton(
  _github_button.GitHubButton c,
) => {'repo': c.repo};
