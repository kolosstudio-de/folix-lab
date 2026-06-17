#!/bin/bash

# Target directories
CAR_SRC="media/Car"
WERB_SRC="media/Werburg"
CAR_DEST="assets/img/gallery/car"
WERB_DEST="assets/img/gallery/werbung"

mkdir -p "$CAR_DEST"
mkdir -p "$WERB_DEST"

# Selected files based on sequence grouping
CAR_FILES=(
  "IMG_3412.HEIC"
  "IMG_3910.DNG"
  "IMG_3924.DNG"
  "IMG_3994.DNG"
  "IMG_4039.DNG"
  "IMG_4060.DNG"
  "0E423D69-0D58-4200-9A00-28F9AA2AA548.png"
  "5B1EACDF-CE8A-4636-9A47-CEC8D6F621AD.png"
  "72E42615-4BC9-4DBC-9D0E-BC9A4CE1B573.png"
  "8B7FAFB4-D716-4790-B11D-1353C884A5DA.png"
)

WERB_FILES=(
  "IMG_4173.DNG"
  "IMG_4186.JPG"
  "IMG_4190.JPG"
)

# Convert Car images
echo "Processing Car images..."
counter=1
for file in "${CAR_FILES[@]}"; do
  if [ -f "$CAR_SRC/$file" ]; then
    sips -s format jpeg "$CAR_SRC/$file" --out "$CAR_DEST/car_$counter.jpg" -Z 1600 > /dev/null
    echo "Converted $file to car_$counter.jpg"
    counter=$((counter + 1))
  else
    echo "File not found: $file"
  fi
done

# Convert Werbung images
echo "Processing Werbung images..."
counter=1
for file in "${WERB_FILES[@]}"; do
  if [ -f "$WERB_SRC/$file" ]; then
    sips -s format jpeg "$WERB_SRC/$file" --out "$WERB_DEST/werb_$counter.jpg" -Z 1600 > /dev/null
    echo "Converted $file to werb_$counter.jpg"
    counter=$((counter + 1))
  else
    echo "File not found: $file"
  fi
done

# Special palette photo
if [ -f "$WERB_SRC/707c346568d06a2bc04797dba5f13770.jpg" ]; then
  sips -s format jpeg "$WERB_SRC/707c346568d06a2bc04797dba5f13770.jpg" --out "assets/img/palette.jpg" -Z 1200 > /dev/null
  echo "Converted palette photo"
fi

echo "Done."
