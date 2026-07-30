# Theme Transition Design

## Goal

Make switching between light and dark themes feel gradual rather than instantaneous.

## Behavior

- Theme-related background, text, border, and outline colours transition over 350ms with `ease-in-out`.
- The transition applies across the document, including fixed Navbar and interactive controls.
- Existing motion-reduction rules disable the visual transition for visitors who prefer reduced motion.

## Verification

- Extend the theme verifier to require the shared transition declaration.
- Run the focused verifier and Vite production build.
