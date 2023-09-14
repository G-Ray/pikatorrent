# Development

Install dependencies:

```sh
npm i
```

## Desktop

```sh
npm run web # To Start the web server
npm run desktop # To start the electron app
```

## Android

First build a development release, and install it on the target device.

```sh
npm -w @pikatorrent/app run build:android:development
```

Send the `.apk` to the target device, and install the package.

You will need to rebuild & install the development package each time a native dependency has been installed or updated.
See https://docs.expo.dev/develop/development-builds/introduction.

```sh
npm run android
```

This will start the installed development with adb. Be sure to connect your target device to your computer.

## Hub

```sh
npm run cli hub
```

## Node

```sh
npm run cli node
```

## Website

```sh
npm run site
```

### Notes

`patch-package` is not compatible with lockfile version 3.
As a workaround, create a temporary v2 lockfile with npm i --lockfile-version 2

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
