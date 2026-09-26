# Naam Jap — Naam Smaran v39

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


## Final XXL Readable Polish
- V40 remains the base build; existing features are preserved.
- Visible UI text is enlarged to 20px or more.
- Bottom navigation remains exactly Home / Jap / Naam / Profile, with larger icons, labels, borders and spacing.
- Jap circle enlarged responsively up to 390px while staying perfectly circular and preventing horizontal overflow.
- Startup splash is extended to about 5 seconds with a richer full-viewport animation.
- PWA remains fullscreen when launched as an installed PWA; browser address/URL chrome cannot be hidden by webpage code when opened as a normal Chrome tab.
- Certificate styling uses gold, blue, green and rose accents with full completion details.


## V40 FINAL — 40PX INTERACTION FIX
- All visible app UI text is enforced at 40px minimum, with major counters/headings larger.
- Four bottom navigation buttons remain, with large 40px labels and larger tap areas.
- Pull-to-refresh/overscroll is disabled while normal vertical page scrolling remains enabled.
- Browser double-tap/pinch zoom is suppressed through viewport/touch-action rules without disabling vertical scrolling.
- Jap counter uses one pointer interaction per physical tap; no JavaScript Fullscreen API is used.
- Service-worker cache version was bumped so GitHub Pages does not keep the old CSS/JS.

## V41 — Overlap fix + real APK build
- Consolidated 10 layers of stacked, conflicting `!important` font-size overrides (v30-v40) that had
  drifted back into the exact bug the original v29 rewrite was meant to prevent — small chips/badges/
  bottom-nav labels had been pushed up to heading-sized text and no longer fit their own boxes.
  Every affected element is now sized once with `clamp()` so it scales cleanly on any Android width.
- Jap counter circle is now capped by both width AND height (`min(vw,vh)`), so it can no longer grow
  taller than the available screen space and overlap the counter/buttons around it, on any aspect ratio.
- Added `.well-known/assetlinks.json` (placeholder) and `APK_BANANE_KA_TARIKA.md`: the real fix for the
  address-bar line is a Digital Asset Links file, not app code — see that guide for exact steps via
  pwabuilder.com to get a real, signed, installable `.apk`.
- Cache-busting version bumped to `v41-overlap-fix-1` so GitHub Pages / the installed app pick up the
  new CSS instead of serving the old cached one.
