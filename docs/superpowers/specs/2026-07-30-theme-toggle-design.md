# Theme Toggle Design

## Goal

Allow visitors to switch the portfolio between white and black themes, with their choice restored after a page refresh.

## Interface

- Add a clearly labelled button in the Navbar.
- In light mode, the button offers dark mode; in dark mode, it offers light mode.
- The control uses `aria-pressed` and an explicit accessible label.

## Theme behavior

- The application starts in light mode unless `localStorage` contains the saved value `dark`.
- The selected theme is applied to the document root as a `dark` class.
- Each change updates `localStorage` using the key `portfolio-theme`.
- Focus-visible styles remain legible in either theme.
- Light mode uses white surfaces with black text, borders, and hover fills across every section.
- Dark mode uses black surfaces with white text, borders, and hover fills across every section.
- Project-row Motion animation uses the same active theme colours; image pixels are not inverted.

## Architecture

- `App.jsx` owns the theme state and synchronizes it with the root document and local storage.
- `Navbar.jsx` receives the selected theme and toggle callback as props, keeping the switch close to primary navigation.
- Shared CSS supplies semantic foreground, background, border, and hover custom properties. Existing Tailwind utility colours are overridden at the root so every component, including utility-based borders and interactive states, follows the same monochrome palette.

## Verification

- A Node verifier asserts the persisted-state, document-class, accessible-button, palette, and project-row animation contracts.
- Run the focused verifier, all existing verifier scripts, and the Vite production build.
