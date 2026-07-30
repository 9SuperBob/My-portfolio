# Theme Overlay Transition Design

## Goal

Make theme switching visibly smooth when CSS variable changes are otherwise applied instantly.

## Behavior

- A fixed full-screen overlay in the destination theme colour fades in for 300ms.
- The document theme changes at the fully covered midpoint.
- The overlay fades out for 300ms, producing a 600ms full transition.
- Repeated presses are ignored during the transition; reduced-motion visitors switch immediately.
