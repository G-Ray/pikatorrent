# Building

## Android

to build a `.apk`:

```sh
npm ci
npm -w @pikatorrent/app run build:android:preview
```

to build a `.aab`:

```sh
npm ci
npm -w @pikatorrent/app run build:android:production
```

The built package will be available at the root folder.
