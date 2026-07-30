# Skills & Tools Section Design

## Goal

Replace the existing placeholder skills section with a focused, responsive Skills & Tools section for the portfolio.

## Visual direction

The section continues the site's editorial monochrome language: a thin top divider, generous spacing, black typography, and restrained hover inversions. It does not use card-heavy UI.

Visual thesis: a clear, practical inventory of the technologies and working tools behind the portfolio projects.

## Structure

- Create `src/components/SkillsTools.jsx` as the dedicated section component.
- Render the section after About and before the project index in `src/App.jsx`.
- Use a short heading and supporting sentence.
- Present two responsive columns: `Tech Stack` and `Tools`.
- Tech Stack items: HTML, CSS, JavaScript, React, Tailwind CSS.
- Tool items: GitHub, Figma, VS Code, Vite.

## Interaction and accessibility

- Each skill is a semantic list item with a subtle black/white hover state on pointer devices.
- The two columns stack on small screens and remain readable at 320px wide.
- The section uses sufficient monochrome contrast and respects the existing global reduced-motion rules.

## Verification

- Run `npm run build` after implementation.
- Confirm that `SkillsTools.jsx` is imported and rendered, and the layout is responsive through Tailwind breakpoints.
