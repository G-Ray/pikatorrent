# Release

1. Increase version field in `app/pubspec.yaml`. Increase build number by `+1`.
   Bump at least the patch number too: the Microsoft Store derives the MSIX version
   from `major.minor.patch` and rejects a submission that is not strictly greater.
1. Add the release notes as
   `app/android/fastlane/metadata/android/en-US/changelogs/<buildNumber>.txt`.
   The file is named after the build number (Android `versionCode`) and is used for
   both the Play Store "what's new" and the GitHub release body.
1. Update `app/linux/packaging/com.pikatorrent.PikaTorrent.metainfo.xml` to add a
   release note entry.
1. Create commit & tag with format `vx.y.z`.
1. `git push && git push origin tag vx.y.z`

CI then builds every platform, uploads the bundle to the Play Store production track
along with the whole listing from `app/android/fastlane/metadata/` (descriptions, icon
and screenshots), and publishes the GitHub release with the changelog as its body.

The release goes live as soon as the build finishes: the website and the in-app update
checker both read `releases/latest`, so users are offered the new version immediately.

1. Check the published release binaries.
1. Submit the `.msix` from the `pikatorrent-windows` artifact to the Microsoft Store.
1. Deploy website from github actions as preview.
1. Manually check download links are correct on the website preview url, then deploy
   website to production.

## Store listing

The Play Store listing (descriptions, icon, screenshots) lives in
`app/android/fastlane/metadata/` and is pushed on every release, so keep it up to date
there rather than editing it in the Play Console — the repository always wins.
