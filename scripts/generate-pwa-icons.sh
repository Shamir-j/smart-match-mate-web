#!/bin/bash

# PWA Icon Generator Script for One Night Stand
# This script creates all required PWA icon sizes from a source image

echo "🎨 Creating PWA icons for One Night Stand..."

# Create icons directory if it doesn't exist
mkdir -p public/icons

# Note: This script requires ImageMagick to be installed
# Install with: sudo apt-get install imagemagick (Ubuntu/Debian)
# or brew install imagemagick (macOS)

# Check if ImageMagick is installed
if ! command -v convert &> /dev/null; then
    echo "❌ ImageMagick not found. Please install ImageMagick first."
    echo "Ubuntu/Debian: sudo apt-get install imagemagick"
    echo "macOS: brew install imagemagick"
    exit 1
fi

# Source image (you should replace this with your actual logo)
SOURCE_IMAGE="public/apple-touch-icon.png"

if [ ! -f "$SOURCE_IMAGE" ]; then
    echo "❌ Source image not found: $SOURCE_IMAGE"
    echo "Please provide a high-quality source image (at least 512x512px)"
    exit 1
fi

echo "📱 Generating PWA icons..."

# PWA Icons
convert "$SOURCE_IMAGE" -resize 16x16 public/icons/icon-16x16.png
convert "$SOURCE_IMAGE" -resize 32x32 public/icons/icon-32x32.png
convert "$SOURCE_IMAGE" -resize 48x48 public/icons/icon-48x48.png
convert "$SOURCE_IMAGE" -resize 72x72 public/icons/icon-72x72.png
convert "$SOURCE_IMAGE" -resize 96x96 public/icons/icon-96x96.png
convert "$SOURCE_IMAGE" -resize 128x128 public/icons/icon-128x128.png
convert "$SOURCE_IMAGE" -resize 144x144 public/icons/icon-144x144.png
convert "$SOURCE_IMAGE" -resize 152x152 public/icons/icon-152x152.png
convert "$SOURCE_IMAGE" -resize 167x167 public/icons/icon-167x167.png
convert "$SOURCE_IMAGE" -resize 180x180 public/icons/icon-180x180.png
convert "$SOURCE_IMAGE" -resize 192x192 public/icons/icon-192x192.png
convert "$SOURCE_IMAGE" -resize 384x384 public/icons/icon-384x384.png
convert "$SOURCE_IMAGE" -resize 512x512 public/icons/icon-512x512.png

echo "🍎 Generating Apple-specific icons..."

# Apple Touch Icons
convert "$SOURCE_IMAGE" -resize 57x57 public/icons/apple-touch-icon-57x57.png
convert "$SOURCE_IMAGE" -resize 60x60 public/icons/apple-touch-icon-60x60.png
convert "$SOURCE_IMAGE" -resize 72x72 public/icons/apple-touch-icon-72x72.png
convert "$SOURCE_IMAGE" -resize 76x76 public/icons/apple-touch-icon-76x76.png
convert "$SOURCE_IMAGE" -resize 114x114 public/icons/apple-touch-icon-114x114.png
convert "$SOURCE_IMAGE" -resize 120x120 public/icons/apple-touch-icon-120x120.png
convert "$SOURCE_IMAGE" -resize 144x144 public/icons/apple-touch-icon-144x144.png
convert "$SOURCE_IMAGE" -resize 152x152 public/icons/apple-touch-icon-152x152.png
convert "$SOURCE_IMAGE" -resize 167x167 public/icons/apple-touch-icon-167x167.png
convert "$SOURCE_IMAGE" -resize 180x180 public/icons/apple-touch-icon-180x180.png

echo "🖥️ Generating Windows MS Tile icons..."

# Microsoft Tile Icons
convert "$SOURCE_IMAGE" -resize 70x70 public/icons/mstile-70x70.png
convert "$SOURCE_IMAGE" -resize 150x150 public/icons/mstile-150x150.png
convert "$SOURCE_IMAGE" -resize 310x150 -background "#FF3A8A" -gravity center -extent 310x150 public/icons/mstile-310x150.png
convert "$SOURCE_IMAGE" -resize 310x310 public/icons/mstile-310x310.png

echo "📱 Generating Apple Splash Screens..."

# Apple Splash Screens (Launch Images)
convert "$SOURCE_IMAGE" -resize 640x1136 -background "#000000" -gravity center -extent 640x1136 public/icons/apple-splash-640x1136.png
convert "$SOURCE_IMAGE" -resize 750x1334 -background "#000000" -gravity center -extent 750x1334 public/icons/apple-splash-750x1334.png
convert "$SOURCE_IMAGE" -resize 1242x2208 -background "#000000" -gravity center -extent 1242x2208 public/icons/apple-splash-1242x2208.png

echo "🔍 Generating Shortcut icons..."

# Shortcut Icons
convert "$SOURCE_IMAGE" -resize 192x192 public/icons/shortcut-download.png
convert "$SOURCE_IMAGE" -resize 192x192 public/icons/shortcut-waitlist.png

echo "🌐 Generating favicon..."

# Generate favicon.ico with multiple sizes
convert "$SOURCE_IMAGE" \
    \( -clone 0 -resize 16x16 \) \
    \( -clone 0 -resize 32x32 \) \
    \( -clone 0 -resize 48x48 \) \
    -delete 0 public/favicon.ico

echo "🦄 Creating Safari pinned tab SVG..."

# Create a simple SVG for Safari pinned tab
cat > public/icons/safari-pinned-tab.svg << EOF
<svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
<g transform="translate(0,512) scale(0.1,-0.1)" fill="#000000" stroke="none">
<path d="M2560 5120 c-1413 0 -2560 -1147 -2560 -2560 0 -1413 1147 -2560 2560 -2560 1413 0 2560 1147 2560 2560 0 1413 -1147 2560 -2560 2560z"/>
</g>
</svg>
EOF

echo "✅ PWA icon generation complete!"
echo ""
echo "Generated icons:"
ls -la public/icons/
echo ""
echo "📝 Next steps:"
echo "1. Replace the source image with your actual logo"
echo "2. Run this script again to regenerate all icons"
echo "3. Test your PWA installation on different devices"
echo ""
echo "🎉 Your PWA is now ready with all required icons!"