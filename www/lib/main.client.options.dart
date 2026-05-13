// dart format off
// ignore_for_file: type=lint

// GENERATED FILE, DO NOT MODIFY
// Generated with jaspr_builder

import 'package:jaspr/client.dart';

import 'package:jaspr_content/components/github_button.dart'
    deferred as _github_button;
import 'package:jaspr_content/components/theme_toggle.dart'
    deferred as _theme_toggle;
import 'package:website/components/download_button.dart'
    deferred as _download_button;

/// Default [ClientOptions] for use with your Jaspr project.
///
/// Use this to initialize Jaspr **before** calling [runApp].
///
/// Example:
/// ```dart
/// import 'main.client.options.dart';
///
/// void main() {
///   Jaspr.initializeApp(
///     options: defaultClientOptions,
///   );
///
///   runApp(...);
/// }
/// ```
ClientOptions get defaultClientOptions => ClientOptions(
  clients: {
    'jaspr_content:github_button': ClientLoader(
      (p) => _github_button.GitHubButton(repo: p['repo'] as String),
      loader: _github_button.loadLibrary,
    ),
    'jaspr_content:theme_toggle': ClientLoader(
      (p) => _theme_toggle.ThemeToggle(),
      loader: _theme_toggle.loadLibrary,
    ),
    'download_button': ClientLoader(
      (p) => _download_button.DownloadButton(),
      loader: _download_button.loadLibrary,
    ),
  },
);
