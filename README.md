# Naam Jap — Naam Smaran

A fresh, offline-first spiritual Naam/Japa counting PWA designed for mobile Android use and GitHub Pages hosting.

## Architecture

- **Vanilla HTML/CSS/JavaScript:** no build step and no backend required for core features.
- **IndexedDB:** structured persistent local data with a schema version so app updates do not reset user data.
- **Offline-first PWA:** manifest + versioned service worker. Navigation uses network-first with an offline fallback, while versioned static assets prevent an old cached stylesheet from being silently paired with new HTML.
- **Defensive rendering:** user-entered Naam is escaped before insertion into HTML.
- **Japa engine:** one pointerdown action produces one count, with configurable tap protection. State is persisted after successful counts and before unload when a session is active.
- **Certificate system:** milestones unlock only when stored counts reach them; certificates are local achievements and are not externally verified.

## Included features

- Hindi / English onboarding and UI
- Default Naam library + custom Naam + favourites
- 108 Jap = 1 Mala
- Dedicated Jap mode with Undo, Pause, Finish, sound and vibration controls
- Daily history and Naam-wise totals
- Sankalp targets and deadlines
- Automatic local milestone certificates
- JSON backup / restore validation
- Profile and statistics
- Dark mode and screen-wake-lock support where the browser permits it
- PWA standalone manifest and offline shell

## GitHub Pages deployment

1. Extract the ZIP.
2. Open your GitHub repository.
3. Upload/replace all project files while preserving the `icons/` folder.
4. Commit the changes.
5. Open **Settings → Pages** and select your repository branch/folder as the Pages source.
6. Open the published Pages URL in Chrome on Android.
7. Test onboarding, counting, refresh, backup/restore, and offline mode.
8. To install as an Android-style PWA in Chrome, use Chrome's **Add to Home screen / Install app** option when offered.

## Android volume buttons

A browser/PWA cannot reliably intercept Android hardware volume buttons as a counting input. The web app therefore does not pretend to support it. A future native Android wrapper can bridge volume-button events to the existing counting function.

## Important data note

Data is stored locally on the device/browser. Clearing site/app storage can remove it. Export a JSON backup before changing devices or clearing browser data.
