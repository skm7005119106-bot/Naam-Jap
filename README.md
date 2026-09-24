# Naam Jap — Naam Smaran v41

Mobile-first offline PWA for Naam Jap / Naam Smaran.

## v39 additions
- Divine / Light / Dark / System appearance themes
- Naam-specific Jap themes: Auto, Radha, Krishna, Ram, Shiv, Divine Gold
- Large scrollable mobile layout
- Inspirational Naam Smaran section with rotating daily-style guidance
- Haptic tap feedback toggle
- Optional screen-awake mode during Jap
- Startup renders state/themes/counters before the app shell is revealed
- Offline service worker cache bumped to v39

## Counting
- Current Mala is always 0–108.
- Every accepted tap = exactly 1 Jap.
- 108 accepted Jap = 1 Mala.
- Total Jap is lifetime Naam-wise subtotal and does not reset.
- Large certificates remain at 1,008 / 10,008 / 1,08,000 / 10,00,000 and custom Sankalp targets.

## Android use without Android Studio
1. Upload all files to the repository root.
2. Enable GitHub Pages from the `main` branch.
3. Open the Pages URL in Chrome.
4. Chrome menu → **Add to Home screen / Install app**.
5. Launch Naam Jap from the Android Home Screen for the standalone app shell.


## v40 updates
- Minimum readable UI text is 18px or larger.
- Home now includes expandable Naam Jap education sections.
- Launch blessing/inspiration appears briefly after app startup.
- Home is fully vertical-scrollable; educational content uses tap-to-expand cards.
- Existing Divine/Light/Dark/System themes and Naam themes are retained.

## v41 updates
- Base text size increased app-wide (body, cards, lists, history, settings, buttons) for easier reading.
- Progress bars and the top bar are taller and more visible.
- Bottom navigation tabs are bigger and each tab now has its own colour (Home blue, Jap saffron, Naam purple, Profile green), visible even when not selected.
- App-open welcome popup: a centred "🙏 Welcome / स्वागत है" card with a rotating blessing line (e.g. "आपका दिन शुभ हो, ईश्वर आपका कल्याण करें") appears over a dimmed backdrop; tap it, tap outside it, or wait ~4 seconds to dismiss.
- Fixed a service-worker cache bug: the offline cache list didn't exactly match the files the app actually requests (mismatched version query strings), so app.js and manifest.json could fail to load from cache when offline. Cache keys are now consistent and bumped to v41.
