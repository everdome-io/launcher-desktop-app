#!/bin/sh

dmg_path="$1"
mount_path="/Volumes/my_dmg_mount"

mkdir -p "${mount_path}"
hdiutil attach "${dmg_path}" -mountpoint "${mount_path}"

app_file="$(find "${mount_path}" -maxdepth 1 -iname "*.app")"
target_path="/Applications/$(basename "${app_file}")"

ditto "${app_file}" "${target_path}"
hdiutil detach "${mount_path}"
