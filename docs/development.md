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
export MACOSX_DEPLOYMENT_TARGET=10.14 # Should be same as defined in /app/macos/Runner.xcodeproj
./vcpkg/bootstrap-vcpkg.sh
flutter run # start the app in development mode
```

## Windows:

```powershell
git clone --recurse-submodules git@github.com:G-Ray/pikatorrent.git
cd pikatorrent/app
$Env:VCPKG_ROOT="$(pwd)/vcpkg"
$Env:VCPKG_MANIFEST_DIR="$(pwd)"
# Workaround for https://gitlab.kitware.com/cmake/cmake/-/issues/25936
$Env:TRANSMISSION_PREFIX="C:\Users\[YOUR_USER]\transmission-prefix"
.\vcpkg\bootstrap-vcpkg.bat
flutter run
```