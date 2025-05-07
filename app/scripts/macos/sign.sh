#!/bin/bash

set -e

usage() {
    echo "Usage: $0 <apple_developer_id_application>"
    exit 1
}

APPLE_DEVELOPER_ID_APPLICATION=$1

if [ -z "$1" ]
  then
    usage
fi

codesign --deep --force --verbose --options runtime --timestamp --sign "$APPLE_DEVELOPER_ID_APPLICATION" build/macos/Build/Products/Release/*.app
find build/macos/Build/Products/Release/*.app -type d -name "*.framework" -exec codesign --force --verbose --options runtime --timestamp --sign "$APPLE_DEVELOPER_ID_APPLICATION" {} \;
find build/macos/Build/Products/Release/*.app -type f -exec codesign --force --verbose --options runtime --timestamp --sign "$APPLE_DEVELOPER_ID_APPLICATION" {} \;
codesign --verify --deep --strict --verbose build/macos/Build/Products/Release/*.app