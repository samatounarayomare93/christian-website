# Copilot Instructions for Soul Guidance Website

## Project Overview
- This is a static, professional Christian ministry website built with HTML, CSS, and vanilla JavaScript.
- Key files: `index.html` (main page), `styles.css` (design), `script.js` (interactivity).
- All files must remain in the same folder for correct local and production operation.

## Architecture & Patterns
- No frameworks or build tools; all logic is in plain JS and CSS.
- Animations use AOS (Animate On Scroll) and Font Awesome for icons (via CDN).
- Responsive design is implemented via CSS Grid, Flexbox, and media queries.
- Accessibility and SEO are prioritized: semantic HTML, ARIA attributes, meta tags.
- Multi-language typography (Arabic/English) is supported via Google Fonts.

## Developer Workflows
- **Local Testing:** Open `index.html` directly in a browser. No build step required.
- **Deployment:** Follow `DEPLOYMENT_GUIDE.md` for GitHub Pages, Netlify, or Vercel. No server-side code.
- **Customization:**
  - Colors: Edit CSS variables in `styles.css`.
  - Content: Update text in `index.html`.
  - Contact info: Update in both HTML and JS.
  - Functionality: Edit `script.js`.
- **Testing:** Use `TESTING_CHECKLIST.md` for manual QA. Check for console errors and verify all links/buttons.

## Conventions & Integration
- Keep all assets (CSS, JS, images) referenced with relative paths.
- Use semantic HTML and descriptive class names for maintainability.
- All interactive elements (modals, menus, forms) are handled in `script.js`.
- No external dependencies except CDN libraries (Font Awesome, AOS, Google Fonts).
- For new features, follow the card-based, glassmorphism design in `styles.css`.

## Key Files & Directories
- `index.html`: Main entry point, contains all page sections.
- `styles.css`: Centralized styling, including variables for easy theme changes.
- `script.js`: Handles all JS logic (modals, menu, form validation, etc.).
- `DEPLOYMENT_GUIDE.md`: Step-by-step deployment instructions.
- `TESTING_CHECKLIST.md`: Manual testing guide for pre-launch QA.

## Examples
- To add a new prayer card: Edit the relevant section in `index.html`, style in `styles.css`, and add interactivity in `script.js`.
- To change the color scheme: Update CSS variables at the top of `styles.css`.
- To add a new button: Add HTML markup, style with a `.button` class, and handle click logic in `script.js`.

## Troubleshooting
- If CSS/JS is not loading, verify all files are in the same folder and paths are correct.
- For mobile issues, check media queries in `styles.css` and JS event listeners in `script.js`.
- For deployment errors, consult `DEPLOYMENT_GUIDE.md` and ensure all assets are referenced with relative paths.

---
For further details, see `README.md`, `DEPLOYMENT_GUIDE.md`, and `TESTING_CHECKLIST.md`.
