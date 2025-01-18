# Development

You will need the flutter SDK to be installed on your platform.
Follow the guide at https://docs.flutter.dev/get-started/install.
You will

You might need to install `cmake`, `openssl`, `curl` and other depencies in order
to compile the project.

For MacOS:

```sh
brew install pkgconf cmake ninja
```

```sh
git clone --recurse-submodules git@github.com:G-Ray/pikatorrent.git pikatorrent
cd pikatorrent/app
./vcpkg/bootstrap-vcpkg.sh # .bat for Windows
export VCPKG_ROOT=/absolut/path/to/./app/vcpkg
flutter run # optionally specify --dart-define-from-file=.env
```
