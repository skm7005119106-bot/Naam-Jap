# Naam Jap — v41 Android/PWA Polish

- Large four-button bottom navigation: Home, Jap, Naam, Profile
- 18px minimum readable user-facing typography
- Enlarged Jap counter and controls
- Vertical scrolling retained
- Pull-to-refresh overscroll disabled via CSS overscroll behavior
- Double-tap zoom prevented inside the app
- Service worker cache bumped to v41
- No JavaScript requestFullscreen() call; installed PWA uses manifest display mode

For GitHub Pages, upload all files/folders to the repository root and commit the changes. After deployment, remove the old installed PWA once and install the new version again so Android refreshes the manifest/service worker.
