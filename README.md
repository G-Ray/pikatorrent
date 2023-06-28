# ⚡ PikaTorrent ⚡

A next generation BitTorrent client. 🕶️

⚠️ PikaTorrent is not stable yet.
You can download the [latest release](https://github.com/G-Ray/pikatorrent/releases) and report issues you encounter.
Desktop apps (Linux & Windows) might not be automatically updated yet.

Link the mobile app with the desktop app or a server instance to control it from anywhere ! (still experimental)

<picture>
  <source media="(prefers-color-scheme: light)" srcset="https://github.com/G-Ray/pikatorrent/assets/2981774/65f493db-ad9c-4477-9fa1-47df4c997fdd" />
  <source media="(prefers-color-scheme: dark)" srcset="https://github.com/G-Ray/pikatorrent/assets/2981774/0e8d8bf0-91fe-4d36-8bdd-c70af4291773" />
  <img alt="desktop app screenshot" src="https://github.com/G-Ray/pikatorrent/assets/2981774/65f493db-ad9c-4477-9fa1-47df4c997fdd" height="auto" width="720px" />
</picture>

<picture>
  <source media="(prefers-color-scheme: light)" srcset="https://github.com/G-Ray/pikatorrent/assets/2981774/637e321d-595f-4840-8fb2-db6996621834" />
  <source media="(prefers-color-scheme: dark)" srcset="https://github.com/G-Ray/pikatorrent/assets/2981774/041e10c2-b17d-4002-8f23-cdd1d75bbbda" />
  <img alt="mobile app screenshot" src="https://github.com/G-Ray/pikatorrent/assets/2981774/637e321d-595f-4840-8fb2-db6996621834" height="auto" width="200px" />
</picture>

## app

The end-user frontend `app`, deployed as a desktop, mobile (native) app, or on a web server.

## node

The `node` is a server binary which can be install on a headless server. It is also included in the desktop app.

It can be installed with `npm install -g pikatorrent`, and started with `pikatorrent node`.

## hub

The signaling server to establish webrtc connections. This service allows `app` & `node` to join and communicate with webrtc.
You should not need to use it, a public instance is hosted on hub.pikatorrent.com.

## License

GPL-3.0
