#!/usr/bin/env bash
# Offline Windows build (runs on Linux or WSL; no npm packages needed).
# The usual build is `npm run dist` on Windows or the GitHub Actions workflow.
#
#   scripts/build-win-installer.sh <electron-win-x64-folder> <makensis> <nsis-plugins-dir> [patch-exe-command]
#
#   electron-win-x64-folder  the unzipped electron-vXX-win32-x64.zip (same version as package.json)
#   makensis                 NSIS compiler (NSISDIR must point to its data folder)
#   nsis-plugins-dir         folder holding nsProcess.dll and WinShell.dll (x86-unicode)
#   patch-exe-command        optional: command that sets the icon and version of the exe,
#                            called as: <cmd> <in.exe> <out.exe> <icon.ico> <version>
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
ELECTRON_DIR="$1"; MAKENSIS="$2"; PLUGINS="$3"; PATCH="${4:-}"
VERSION="$(node -p "require('$ROOT/package.json').version")"
STAGE="$ROOT/dist/win-unpacked"
OUT="$ROOT/dist/Control-ERP-Desktop-Setup-$VERSION.exe"
EXE="Control ERP Desktop.exe"

node "$ROOT/scripts/prepare-app.js"
rm -rf "$STAGE" && mkdir -p "$STAGE"
cp -a "$ELECTRON_DIR"/. "$STAGE"/
rm -f "$STAGE/resources/default_app.asar"
find "$STAGE/locales" -name '*.pak' ! -name 'en-US.pak' ! -name 'ar.pak' -delete
if [ -n "$PATCH" ]; then
  $PATCH "$STAGE/electron.exe" "$STAGE/$EXE" "$ROOT/build/icon.ico" "$VERSION"
  rm "$STAGE/electron.exe"
else
  mv "$STAGE/electron.exe" "$STAGE/$EXE"
fi

APP="$STAGE/resources/app"
mkdir -p "$APP/build"
cp -a "$ROOT/desktop" "$APP/desktop"
cp -a "$ROOT/app" "$APP/app"
cp "$ROOT/build/icon.ico" "$ROOT/build/icon.png" "$APP/build/"
node -e "
const p=require('$ROOT/package.json');
const keep={name:p.name,productName:p.productName,version:p.version,description:p.description,main:p.main,author:p.author,license:p.license};
require('fs').writeFileSync('$APP/package.json', JSON.stringify(keep,null,2));"

"$MAKENSIS" -V2 -X"!addplugindir /x86-unicode $PLUGINS" \
  -DVERSION="$VERSION" -DSTAGE="$STAGE" -DOUTFILE="$OUT" -DBUILDRES="$ROOT/build" \
  "$ROOT/installer/control-erp.nsi"
ls -la "$OUT"
