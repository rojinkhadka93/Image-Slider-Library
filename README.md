# Vanilla JavaScript Image Slider Library

A responsive image slider built with semantic HTML, CSS transitions, and a small ES6 class.

## Files
- `index.html` — component markup and four sample image slides.
- `style.css` — responsive layout, overflow mask, track transition, controls, and reduced-motion support.
- `slider.js` — dynamic dots, previous/next controls, direct dot navigation, wrapping, keyboard support, and resize handling.
- `screenshots/` — report figures showing source code and the application layout.

## Run locally
Open `index.html` in a modern browser. An internet connection is required to load the sample Unsplash images. The slider code itself uses no third-party JavaScript libraries.

## Publish with GitHub Pages
1. Create a public repository on GitHub, for example `image-slider-library`.
2. Upload `index.html`, `style.css`, `slider.js`, `README.md`, and the `screenshots` folder.
3. In repository **Settings → Pages**, select deployment from the `main` branch and the root folder.
4. Save and wait for GitHub Pages to publish the site. The final URL will appear in the Pages settings.

## Note about looping
The requested wrapping is implemented with modular index arithmetic. The track moves in the direction implied by Next/Previous, though the last-to-first wrap travels across the full track distance rather than using cloned slides for a physically seamless carousel illusion.
