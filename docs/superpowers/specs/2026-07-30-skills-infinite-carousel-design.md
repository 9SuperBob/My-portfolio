# Skills Infinite Carousel Design

## Goal

Replace the two-column skills list in `SkillsTools.jsx` with one continuous marquee of outlined skill labels.

## Visual direction

The Skills & Tools heading and its supporting sentence remain. Beneath them, one full-width rail moves continuously from right to left. Each skill or tool is an outlined, monochrome label, matching the portfolio's editorial language.

## Content

The rail contains this ordered set:

- HTML
- CSS
- JavaScript
- React
- Tailwind CSS

- GitHub
- Figma
- VS Code
- Vite

The sequence is rendered twice so that its animation can restart without a visible gap.

## Implementation

- Keep `SkillsTools.jsx` as the single component for this section.
- Replace the existing `skillGroups` data with one `skills` array.
- Use semantic lists with the duplicated sequence marked `aria-hidden` so screen readers announce each label only once.
- Add a component-scoped animation that translates the rail by half of its duplicated width.
- Hide overflow at the carousel viewport and prevent labels from wrapping.
- Respect `prefers-reduced-motion` by disabling the animation and keeping the rail readable through horizontal scrolling.

## Verification

- Update `scripts/verify-skills-tools.mjs` to check all labels and the carousel/accessibility hooks.
- Run `npm test` and `npm run build`.
