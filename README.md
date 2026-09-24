Naam Jap v11 FIXED

Critical v10 rendering bug fixed:
- Sound control renderer accidentally shadowed the translation function, causing a JavaScript TypeError.
- That stopped render(), so Jap count could save but the visible counter stayed at 0 and Naam lists/other UI failed to refresh.
- Sound controls now use distinct variable names.
- Initial render is also guarded so one UI issue cannot blank the app.

Retained:
- Onboarding
- Naam list
- Jap counter and tap protection
- Profile + user-name certificates
- Sankalp
- Settings
- Custom sound controls
- Opening animation


## v14 update
- Polished startup animation with lotus pulse and blue/green loading dots.
- Removed the rotating ring/line-style loader.
- Preserves existing Naam Jap functionality and v12 UI improvements.


## v15 update
- Stronger Android-style bottom navigation with larger icons and labels.
- Refined cards, shadows, header polish and blue/green accents.
- Added service-worker cache version 15 to force the updated UI instead of stale cached CSS.
- Added CSS cache-busting for style.css.


## v16 final polish
- Refined branded startup animation with Om mark, short fade and blue/green accents.
- Removed the remaining line/ring loader styling.
- Added v16 cache-busting for reliable rollout.


## v17 update
- Increased bottom navigation icon size and touch area while keeping labels readable.


## v18 update
- Colourful certificate styling with blue/green/gold accents.
- Added a certificate Naam label helper so the Naam Jap used can be shown in certificate output when present in the certificate record.


## v19 update
- Certificate now prominently names the specific Naam Jap completed.
- Print/Save PDF certificate redesigned with blue, green and gold accents and a clear Naam Jap badge.


## v20 update
- Larger Naam Jap headings and counter.
- Larger central tap/jap button and Naam label.
- Increased usable screen width and reduced empty margins/space.


## v21 update
- Jap screen card and tap button enlarged to use the available phone screen better.
- Naam and Jap counter increased further for a more immersive counting screen.
- Reduced unused vertical space while keeping controls accessible.


## v22 update
- Increased the central Jap circle and typography further.
- Balanced vertical spacing so the Jap card feels fuller without crowding the controls.
- Reduced the perception of unused empty screen area.


## v23 update
- Enlarged the central Naam Jap circle substantially to use the phone width better.


## v24 update
- Increased app-wide readable typography and card text.
- Larger header, headings, counters, buttons and bottom navigation labels.
- Prevented navigation/button labels from wrapping into each other.
- Preserved responsive layout for phone screens.


## v25 update
- Clearly increased typography across Home, Jap, cards, stats and navigation.
- Corrected selectors for the actual stat/card elements.
- Preserved six-tab navigation without overlap/wrapping.
- Bumped service-worker/cache version to v25.


## v26 update
- Changed the layout to use the full phone width instead of a narrow centered content column.
- Cards, home sections and Jap screen now expand across the available viewport.
- Bottom navigation remains full-width and fixed.
- Preserved readable typography and the large Jap circle.

## v27 FINAL UI update
- Reworked the actual #mainApp > main and page layout instead of relying on generic selectors.
- Removed the 680px centered-column constraint.
- Home, Jap, Profile, Sankalp, Naam and Settings now use the full phone width.
- Increased typography and tap controls while preserving responsive six-tab navigation.
- Added a fresh stylesheet/cache version to prevent stale CSS from masking the update.

## v28 — Large Reference-Style UI
- Rebuilt the visible typography and Jap screen sizing to closely match the requested large-text reference.
- Increased Naam heading, session counter, buttons, instruction text and bottom navigation.
- Enlarged the central Jap circle substantially.
- Kept six-tab navigation responsive and non-overlapping.
- Removed the Jap card's forced tall empty minimum height.
- Bumped stylesheet and service-worker versions to v28.

## v29 — Real fixes (manifest, service worker, one clean stylesheet)
**Why it never went full-screen (v14–v28):** the app had no `manifest.json`,
no `icons/` folder, and `service-worker.js` was never registered from
`index.html`. Without a manifest + icons, Android/Chrome has nothing to
install as a standalone app, so "Add to Home screen" always opened it as a
normal browser tab with the address bar — no amount of CSS could fix that.
`service-worker.js` also listed `manifest.json` and the icon files in its
cache list even though they didn't exist, so `caches.addAll()` was failing
and the worker never activated.
- Added `manifest.json` (`display: standalone`, `display_override:
  ["fullscreen","standalone","minimal-ui"]`) plus generated `icons/icon-192.png`,
  `icons/icon-512.png`, `icons/icon-512-maskable.png`.
- Linked the manifest, apple/mobile PWA meta tags and icons in `index.html`,
  and registered `service-worker.js` (it was sitting in the project unused).
- `service-worker.js` now caches each asset independently so one missing
  file can't silently break offline install again.
- Added a small script that requests real Fullscreen API fullscreen once
  the app is launched from the installed home-screen icon.

**Why size changes kept looking like they "didn't apply":** `style.css` had
grown to ~1600 lines because v12–v28 each added new overriding rules at the
bottom instead of editing the original ones — the same element's font-size
ended up declared 5–8 times across different, inconsistent `@media`
breakpoints, so on some phone widths an older/smaller value was still the
one winning the cascade.
- Rewrote `style.css` as one consolidated file (~280 lines): every element's
  size is defined once, using `clamp()` for fluid scaling instead of stacked
  breakpoints, so text and icon sizes no longer depend on hitting an exact
  screen-width bucket. Sizes were also increased further (Naam heading,
  today's counter, Jap circle text, bottom-nav icons all bigger than v28).

**Small app.js fixes:**
- `session.undone` was reset without its field on every new Jap session,
  so Undo silently produced `NaN` internally (not visible, but wrong).
- Sankalp (custom goal) certificates only unlocked when the user opened
  Sankalp and manually pressed "Certificate check". They now auto-unlock
  on every tap, same as the 108/1,008/10,008/1,08,000 milestone
  certificates already did.

Bumped stylesheet/service-worker cache to v29.

**Note on true full-screen in a wrapped Android app:** the manifest fixes
full-screen for this as an installed PWA (open in Chrome → menu → "Add to
Home screen"/"Install app"). If this HTML is instead being wrapped into an
APK with a WebView-based builder, that tool's own "fullscreen /
hide status bar" setting (not this web code) is what controls the native
status/navigation bar.
