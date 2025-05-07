#!/bin/bash

set -e

usage() {
    echo "Usage: $0 --key-id <key_id> --key <path_to_p8_file> --issuer <issuer>"
    exit 1
}

while [[ "$#" -gt 0 ]]; do
    case $1 in
        --key-id) KEY_ID="$2"; shift ;;
        --key) KEY="$2"; shift ;;
        --issuer) ISSUER="$2"; shift ;;
        *) echo "Unknown parameter passed: $1"; usage ;;
    esac
    shift
done

if [ -z "$KEY_ID" ] || [ -z "$KEY" ] || [ -z "$ISSUER" ]; then
    usage
fi

# Compress
ditto -c -k --sequesterRsrc --keepParent build/macos/Build/Products/Release/*.app build/macos/Build/Products/Release/release.app.zip
xcrun notarytool store-credentials --key-id "$KEY_ID" --key "$KEY" --issuer "$ISSUER" --validate notorization_profile
xcrun notarytool submit --keychain-profile "notorization_profile" --progress --wait build/macos/Build/Products/Release/release.app.zip
# Staple 
xcrun stapler staple build/macos/Build/Products/Release/*.app