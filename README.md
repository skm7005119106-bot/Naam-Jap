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
