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
