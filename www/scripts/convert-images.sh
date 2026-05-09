#!/usr/bin/env bash
# Convert PNGs from ../screenshots/ to AVIF in web/images/ using avifenc (libavif).
# avifenc preserves the PNG alpha channel, unlike ffmpeg + libaom-av1.
#
# Install:
#   Fedora:  sudo dnf install libavif-tools
#   Debian:  sudo apt install libavif-bin
#   macOS:   brew install libavif
#
# Usage:
#   bash scripts/convert-images.sh
set -euo pipefail

cd "$(dirname "$0")/.."

SRC_DIR="../screenshots"
OUT_DIR="web/images"

mkdir -p "$OUT_DIR"

for png in "$SRC_DIR"/*.png; do
  [ -f "$png" ] || continue
  base="$(basename "$png" .png)"
  avif="$OUT_DIR/$base.avif"
  avifenc --min 24 --max 32 --speed 4 "$png" "$avif"
  echo "$png -> $avif"
done
