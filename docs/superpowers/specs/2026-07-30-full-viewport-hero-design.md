# Full-Viewport Hero Design

## Goal

Make the Hero occupy the entire viewport area below the site Navbar so subsequent sections appear only after scrolling.

## Layout

- Keep the Navbar in normal document flow above the Hero.
- Give the Hero a minimum height of `calc(100svh - var(--navbar-height))`.
- Define `--navbar-height` in shared CSS for a consistent desktop and mobile calculation.
- Keep the existing Hero copy, right-aligned desktop composition, and vertical centering.

## Motion and accessibility

- Preserve the existing Motion entrance transition.
- Continue to respect reduced-motion settings through `useReducedMotion`.

## Verification

- Extend the Hero verification script to require the viewport-relative height contract.
- Run the focused Hero check and the Vite production build.
