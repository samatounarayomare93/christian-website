# Contributing to Soul Guidance

Thank you for your interest in contributing to **Soul Guidance** (إرشاد الروح). We welcome contributions from developers, designers, and prayer warriors alike.

## Code of Conduct
Please communicate with grace and patience. This is a spiritual platform; let our code reflect our values.

## Architecture
- **Frontend**: Vanilla HTML/CSS/JS (No framework).
- **Styling**: Vanilla CSS variables (`theme.css`, `styles.css`).
- **State Management**: `localStorage` via specialized Managers (`ProfileManager`, `AnalyticsManager`).

## Development Workflow
1.  **Clone the repo**.
2.  **Open `index.html`** in your browser (Live Server recommended).
3.  **Run Tests**: Open the console to see `tests.js` output.

## Key Components
- **`PrayerBook`**: Handles the main content area for prayers.
- **`ProfileManager`**: Handles user data and personalization.
- **`BadgeManager`**: Handles gamification logic.

## Pull Requests
- Ensure all code is bilingual-compatible (RTL/LTR).
- Verify no XSS vulnerabilities (sanitize all inputs).
- Run `tests.js` before submitting.

May your code be bug-free and blessed!
