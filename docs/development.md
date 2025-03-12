# Development (WIP)

You will need the flutter SDK to be installed on your platform.
Follow the guide at https://docs.flutter.dev/get-started/install.

## Linux

You might need to install `cmake`, `openssl`, `curl`.

```sh
git clone --recurse-submodules git@github.com:G-Ray/pikatorrent.git
cd pikatorrent/app
flutter run # start the app in development mode
flutter build linux # release
```

## Android (Linux host)

Install & configure Android SDK/NDK first.

```sh
git clone --recurse-submodules git@github.com:G-Ray/pikatorrent.git
cd pikatorrent/app
export VCPKG_ROOT="$(pwd)/vcpkg"
export VCPKG_MANIFEST_DIR=$(pwd)
./vcpkg/bootstrap-vcpkg.sh
flutter devices # See available devices
flutter run -d {device} # start the app in development mode
```

## MacOS

```sh
git clone --recurse-submodules git@github.com:G-Ray/pikatorrent.git
cd pikatorrent/app
export VCPKG_ROOT="$(pwd)/vcpkg"
export VCPKG_MANIFEST_DIR=$(pwd)
./vcpkg/bootstrap-vcpkg.sh
flutter run # start the app in development mode
```

## For MacOS & Windows (WIP):

Refer to build steps in [.github/workflows/build-apps.yml](.github/workflows/build-apps.yml)
