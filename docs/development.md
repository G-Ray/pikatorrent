## app

The end-user frontend `app`, deployed as a desktop, mobile (native) app, or on a web server.

## node

The `node` is a server binary which can be install on a headless server. It is also included in the desktop app.

It can be installed with `npm install -g pikatorrent`, and started with `pikatorrent node`.

## hub

The signaling server to establish webrtc connections. This service allows `app` & `node` to join and communicate with webrtc.
You should not need to use it, a public instance is hosted on hub.pikatorrent.com.
