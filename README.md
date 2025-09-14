# PikaTorrent

<img src="./assets/logo.svg" alt="PikaTorrent logo" width="64"/>

Just pick a Torrent. Stream and download on all your devices.

<a href="https://discord.gg/6HxCV4aGdy">
  <img src="https://img.shields.io/badge/Join_us_on_discord-gray?logo=discord" />
</a>

## Why a new torrent client ?

In 2025, torrent clients should not be reserved for advanced users. PikaTorrent is a next-generation torrent client offering a beautiful, lightweight, and cross-platform app that you can install on all your devices.
PikaTorrent also allows you to stream media, think of it like WebTorrent desktop, but also available on Android & iOS.

## Installation

To receive updates automatically and ensure the app handles links shares correctly, installation through app stores is recommended.

| Windows | Linux | MacOS | Android | iOS |
| ------- | ----- | ----- | ------- | --- |
| [Microsoft Store](https://apps.microsoft.com/detail/9n9gjq9bdjw3?mode=direct) | [Flathub](https://flathub.org/apps/com.pikatorrent.PikaTorrent) | [.dmg](https://github.com/G-Ray/pikatorrent/releases) | [Play Store](https://play.google.com/store/apps/details?id=com.pikatorrent.PikaTorrent) | - |
| [.zip](https://github.com/G-Ray/pikatorrent/releases) | [.zip*](https://github.com/G-Ray/pikatorrent/releases) | [.zip](https://github.com/G-Ray/pikatorrent/releases) | [.apk](https://github.com/G-Ray/pikatorrent/releases) | [.ipa (experimental)](https://github.com/G-Ray/pikatorrent/releases) |

**\*** .zip for linux needs `mpv` to be installed on you OS. Other dependencies might be required.

The releases are currently considered beta. Features might changes and things could break. Please use issues to report bugs or features requests.

## Screenshots

| Desktop                                                  | Mobile                                                 |
| -------------------------------------------------------- | ------------------------------------------------------ |
| ![Desktop - Light mode](./screenshots/desktop-light.png) | ![Mobile - Light mode](./screenshots/mobile-light.png) |
| ![Desktop - Dark mode](./screenshots/desktop-dark.png)   | ![Mobile - Dark mode](./screenshots/mobile-dark.png)   |

## Development

See [docs/development.md](./docs/development.md)

## Upgrade to >= v0.10.0

PikaTorrent has been rewritten from scratch for v0.10.0. If you already use a previous release, upgrading to v0.10.0 will most likely not display your previous torrents.

If you want to migrate your torrents :

- Windows: Copy `%APPDATA%\pikatorrent\Config\transmission` to `%APPDATA%\pikatorrent\com.pikatorrent\PikaTorrent`)
- Linux: Copy `~/.config/pikatorrent/transmission` to `~/.local/share/pikatorrent/transmission`)

After that, It's probably safe to remove these folders :

- Windows: `%APPDATA%\pikatorrent`
- Linux: `~/.config/pikatorrent`

## Localization

![Weblate project translated](https://img.shields.io/weblate/progress/pikatorrent)

Would you like to contribute to translations into other language(s) ?
Please visite [Weblate](https://hosted.weblate.org/projects/pikatorrent).

## License

GPL-3.0
