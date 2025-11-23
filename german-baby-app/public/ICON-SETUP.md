# App Icon Setup

The PWA requires two icon sizes for installation:
- `icon-192.png` (192x192 pixels)
- `icon-512.png` (512x512 pixels)

## Quick Setup Options

### Option 1: Use Online Icon Generator (Recommended)
1. Go to https://www.pwabuilder.com/imageGenerator
2. Upload any image with 🇩🇪 flag emoji and 👶 baby emoji (or German/baby themed image)
3. Download the generated icons
4. Copy `icon-192.png` and `icon-512.png` to `/public/` folder

### Option 2: Use Favicon.io
1. Go to https://favicon.io/favicon-generator/
2. Settings:
   - Text: "DE" or "🇩🇪👶"
   - Background: Rounded, #3B82F6 (blue)
   - Font: Any clear font
3. Download and extract
4. Rename the 192x192 and 512x512 files to `icon-192.png` and `icon-512.png`
5. Copy to `/public/` folder

### Option 3: Create Simple Placeholder Icons
For testing, create simple colored squares:

```bash
# Install ImageMagick if not installed (on Mac: brew install imagemagick)

# Create 192x192 icon
convert -size 192x192 xc:#3B82F6 -gravity center -pointsize 80 -fill white -annotate +0+0 "🇩🇪\n👶" public/icon-192.png

# Create 512x512 icon
convert -size 512x512 xc:#3B82F6 -gravity center -pointsize 220 -fill white -annotate +0+0 "🇩🇪\n👶" public/icon-512.png
```

## Temporary Placeholder (For Testing Only)

If you want to test the PWA without icons immediately, you can create simple solid color placeholders:

```bash
cd public
# Create solid blue placeholders
convert -size 192x192 xc:#3B82F6 icon-192.png
convert -size 512x512 xc:#3B82F6 icon-512.png
```

The app will work without icons, but won't look professional when installed.

## Verification

After adding icons, check they're accessible:
- Visit http://localhost:5173/icon-192.png
- Visit http://localhost:5173/icon-512.png

Both should display your icons.
