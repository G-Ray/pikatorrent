# Folders structure

## apps/

### apps/app

The end-user frontend `app`, deployed as a desktop, mobile (native) app, or on a web server.

### apps/cli

The cli to host a `node` (pikatorrent backend) or to self-host the webrtc signaling `hub` available at https://www.npmjs.com/package/pikatorrent.

### apps/desktop

The electron code to run the `app` as a desktop app.

### apps/site

The website deployed at https://www.pikatorrent.com.

## packages/

### packages/node

The `node` is a server binary which can be install on a headless server. It is also included in the desktop app.

It can be installed with `npm install -g pikatorrent`, and started with `pikatorrent node`.

### packages/hub

The signaling server to establish webrtc connections. This service allows an `app` & `node` to join and communicate with webrtc.
You should not need to use it, a public instance is hosted on hub.pikatorrent.com.

# Development

Install dependencies:

```sh
npm i
```

## desktop app

```sh
npm run web # To Start the web server
npm run desktop # To start the electron app
```

## hub

```sh
npm run cli hub
```

## node

```sh
npm run cli node
```

## website

```sh
npm run site
```

### Notes

`patch-package` is not compatible with lockfile version 3.
As a workaround, create a temporary v2 lockfile with npm i --lockfile-version 2
