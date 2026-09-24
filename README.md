# Naam Jap — v33 Final Gesture-Air Polish

## Final mobile UI/UX rebuild
This version keeps the existing Naam Jap functionality and upgrades the experience for a polished mobile/PWA feel.

### Major fixes
- Removed the JavaScript `requestFullscreen()` call that caused Android Chrome's **"To exit full screen, drag from the top..."** system message.
- Fullscreen is now controlled by the installed PWA manifest instead of a first-click browser fullscreen transition.
- Removed the duplicate `click + pointerup` counting handlers. The Jap circle now has one click path, so one user activation produces exactly one Jap.
- Added a tiny 70ms browser-event dedupe only to prevent duplicate events from the same gesture.
- Existing older data migrates to v8 and defaults fast-tap protection to Off so normal fast Jap practice is not silently skipped.

### Jap experience
- Large centered Jap circle with stable sizing.
- Every accepted circle click immediately updates the visible counter, Mala count, progress and saved data.
- Dynamic selected Naam inside the circle.
- Clear `1 click = 1 Jap` instruction.
- Motivational live guidance after starting: begin now, stay with the Naam, continue one click at a time.
- Subtle tap ripple/flash instead of game-like effects.
- Large Undo / Pause / Finish controls.
- 108-Mala completion sound and milestone certificate logic retained.

### Premium navigation
The six tiny bottom tabs were merged into a cleaner 4-tab mobile navigation:
- Home — Today
- Jap — Start
- Naam — Choose
- Profile — Progress

Sankalp is available from Profile and Settings is available from the premium top-right gear. Both secondary pages include a Profile back button. This gives each navigation target more space and larger labels/icons.

### Typography / layout
- Full-width mobile layout.
- Larger readable body text, headings, buttons and form controls.
- Stable responsive sizes rather than a click-triggered viewport resize.
- Jap circle uses the available screen without pushing controls off-screen.
- Scroll remains available whenever content exceeds the viewport.

### PWA
- `display: fullscreen` is used in the manifest, with standalone/minimal-ui fallbacks.
- Updated service-worker cache name to v33.
- No page-triggered Fullscreen API call, so the Android browser fullscreen system toast is not requested by the app.

## Important
A normal GitHub Pages browser tab can still show the browser's own address/status UI. True app-style fullscreen is provided when the site is installed/launched as a PWA and the browser supports the manifest display mode.
