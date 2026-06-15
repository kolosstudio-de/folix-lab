#!/bin/bash

# Create showroom directory
mkdir -p assets/img/showroom

echo "Converting DNG images to JPG..."
# Selected DNG files
DNG_FILES=(
  "IMG_3995(1).DNG"
  "IMG_3997(1).DNG"
  "IMG_4036.DNG"
  "IMG_4042(1).DNG"
  "IMG_4060.DNG"
  "IMG_4061.DNG"
  "IMG_4064.DNG"
  "IMG_4076.DNG"
)

# Convert DNG to JPG and resize to max 1920px width/height for web
for f in "${DNG_FILES[@]}"; do
  src="Folix-lab/$f"
  dest="assets/img/showroom/${f%.DNG}.jpg"
  if [ -f "$src" ]; then
    echo "Processing $src -> $dest"
    sips -s format jpeg -Z 1920 "$src" --out "$dest" > /dev/null
  else
    echo "File $src not found!"
  fi
done

echo "Converting MOV videos to MP4..."
# Selected MOV files
MOV_FILES=(
  "IMG_4001.MOV"
  "IMG_4004.MOV"
  "IMG_4019.MOV"
)

# Convert MOV to Web-optimized MP4 (720p to save size)
for f in "${MOV_FILES[@]}"; do
  src="Folix-lab/$f"
  dest="assets/img/showroom/${f%.MOV}.mp4"
  if [ -f "$src" ]; then
    echo "Processing $src -> $dest"
    ffmpeg -y -i "$src" -vcodec libx264 -crf 28 -preset fast -vf "scale=-2:720" -an "$dest" 2>/dev/null
  else
    echo "File $src not found!"
  fi
done

echo "Done processing media."
