# System Architecture

## Current State (Monolithic)
- **`index.html`**: Entry point.
- **`script.js`**: Contains all logic (Profile, Analytics, Prayers).
- **`styles.css`**: Core styles.

## Proposed Modular State (Phase 24)
To be implemented when a build step (Webpack/Vite) is available.

```
/src
  /managers
    ProfileManager.js
    AnalyticsManager.js
    BadgeManager.js
  /components
    PrayerCard.js
  /utils
    i18n.js
  main.js (Imports all)
```

## Why Defer?
Splitting files now would require running a local server to handle ES Module CORS policies, which might complicate the "click-to-run" simplicity for the user.
