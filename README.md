# KC Landing Tile

A custom WordPress block for creating square landing tiles with:

- background image
- overlay color and opacity
- hover zoom
- hover title color change
- optional shadow
- linked tile behavior

This block is designed for use inside WordPress block editor layouts and works well as part of a tile grid or landing page section.

## Features

- Square tile layout
- Image picker in the block sidebar
- Link field for turning the tile into a clickable card
- Overlay color control
- Overlay opacity control
- Hover zoom effect
- Shadow toggle
- Title text editable in the block
- Clean editor preview

## Requirements

- WordPress 6.x or newer
- PHP 7.4+
- Modern browser support
- Node.js / npm for development builds

## Installation

### As a plugin

1. Copy the `kc-landing-tile` folder into `wp-content/plugins/`
2. Activate the plugin in the WordPress admin
3. Add the **KC Landing Tile** block in the editor

## Development

If this repo uses the WordPress block build tooling, run:

```bash
npm install
npm start
```

To create a production build:

```bash
npm run build
```

## File structure

Typical structure:

```plaintext
kc-landing-tile/
├── kc-landing-tile.php
├── block.json
├── src/
├── build/
├── assets/
├── package.json
└── readme.md
```

## Usage

1. Add the KC Landing Tile block to a page or template
2. Choose an image in the block sidebar
3. Set the title and link
4. Adjust overlay opacity and color
5. Optionally enable shadow
6. Place multiple tiles inside a grid wrapper for a landing page section

## Notes

This block is intended to be used as part of a larger layout system.
For a grid of tiles, use a parent wrapper block or a pattern that contains multiple tile blocks.
The block is designed to stay flexible and theme-friendly.

## License

GPL-2.0-or-later