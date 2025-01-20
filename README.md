# PikaTorrent ⚡

Torrent app for the 21st century.

PikaTorrent aims to be an easy to use, open source torrent client for everyone.

<a href="https://discord.gg/6HxCV4aGdy">
  <img src="https://img.shields.io/badge/Join_us_on_discord-gray?logo=discord" />
</a>

## Installation

Download [latest release](https://github.com/G-Ray/pikatorrent/releases). The releases are currently considered pre-release versions. Please open issues to report bugs or features requests.

You can join the open testing on Play Store : https://play.google.com/apps/testing/com.pikatorrent.PikaTorrent

We are in the process to publish the latest release to the app stores.

## Screenshots

| Desktop                                                  | Mobile                                                 |
| -------------------------------------------------------- | ------------------------------------------------------ |
| ![Desktop - Light mode](./screenshots/desktop-light.png) | ![Mobile - Light mode](./screenshots/mobile-light.png) |
| ![Desktop - Dark mode](./screenshots/desktop-dark.png)   | ![Mobile - Dark mode](./screenshots/mobile-dark.png)   |

## Upgrade to >= v0.10.0

PikaTorrent has been rewritten from scratch for v0.10.0. If you already use a previous release, upgrading to v0.10.0 will most likely not display your previous torrents.

If you want to migrate your torrents :

- Windows: Copy `%APPDATA%\pikatorrent\Config\transmission` to `%APPDATA%\pikatorrent\com.pikatorrent\PikaTorrent`)
- Linux: Copy `~/.config/pikatorrent/transmission` to `~/.local/share/pikatorrent/transmission`)

After that, It's probably safe to remove these folders :

- Windows: `%APPDATA%\pikatorrent`
- Linux: `~/.config/pikatorrent`

## Development

See [docs/development.md](./docs/development.md)

## Localization

PikaTorrent will soon be available in multiple languages. You will be able to contribute through weblate.

## License

GPL-3.0
