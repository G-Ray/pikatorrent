# Release

1. Increase version field in `app/pubspec.yaml`. Increase build number by `+1`.
1. Update `app/linux/packaging/metainfo.xml` to add a release note entry.
1. Update `app/metadata` to add a release note entry and screenshots.
1. Update APP_VERSION in site/.env. Update screenshots and features.
1. Create commit & tag with format `vx.y.z`.
1. `git push && git push origin tag vx.y.z`
1. Manually test the generated release binaries.
1. Deploy website from github actions as preview.
1. Manually check download links are correct on the website preview url, then deploy website to production.
