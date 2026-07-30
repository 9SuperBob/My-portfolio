# Fixed Navbar Design

## Goal

Keep the portfolio Navbar visible at the top of the viewport while visitors scroll in either direction.

## Layout

- Navbar uses fixed positioning at the top edge, full viewport width, and a high stacking order.
- The main page receives top padding equal to `--navbar-height`, preserving the current first viewport and preventing the Navbar from covering content.
- The Navbar surface uses the shared monochrome palette so it remains opaque and legible in light and dark modes.

## Verification

- Extend the Hero verifier to require the fixed Navbar class and the main top-padding offset.
- Run the focused verifier and Vite production build.
