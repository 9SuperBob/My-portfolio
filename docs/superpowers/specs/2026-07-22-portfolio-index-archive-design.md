# Portfolio Index Archive Design

## Goal

Create a responsive, black-and-white personal portfolio homepage using React, JavaScript, Tailwind CSS, and Motion. The page will use editable placeholder content until the owner supplies real profile and project information.

## Visual direction

The page is an editorial portfolio index: generous white space, black typography, thin dividers, compact metadata, and project rows rather than cards. It takes broad inspiration from the restrained hierarchy and work-first pacing of the supplied reference, without reproducing its content or layout.

Visual thesis: a quiet monochrome archive that feels like a designer's current work index.

## Information architecture

1. **Navbar** — name mark, Work/About/Contact anchor links, and a small current-year label.
2. **Hero** — placeholder name, role, short introduction, and a location/availability line.
3. **Work index** — three numbered project rows with title, discipline, and year. Hovering or focusing a row reveals its associated image preview on larger screens; on touch and small screens, previews remain visible in normal document flow.
4. **About** — concise biography and a services list.
5. **Footer** — contact invitation, placeholder email, social links, copyright, and a back-to-top action.

## Component boundaries

- `src/components/Navbar.jsx`: semantic site header and mobile navigation toggle.
- `src/components/Footer.jsx`: contact and social footer content.
- `src/components/ProjectIndex.jsx`: project data and interactive work-index rows.
- `src/App.jsx`: assembles sections and owns page-level content.
- `src/index.css`: Tailwind layers, typography, motion-reduction behavior, and any small shared effects.

Project data stays as an in-file JavaScript array in `ProjectIndex.jsx`, making names, categories, dates, and images easy to replace later without changing layout logic.

## Interaction and motion

- Hero content enters with a short staggered opacity and vertical-translate transition.
- Project rows receive a restrained background/text inversion and preview-image reveal on hover or keyboard focus.
- Major sections reveal when entering the viewport.
- All animation respects `prefers-reduced-motion`; the same content remains available without motion.

Motion will be the only new UI dependency. Native anchor navigation and CSS handle the remaining interactions.

## Responsive and accessible behavior

- Desktop uses a multi-column metadata grid for the project index with an adjacent preview area.
- Small screens collapse rows to a readable vertical layout and retain visible previews.
- Navigation is keyboard-accessible; the mobile menu exposes an explicit button state.
- Project interaction uses focus-visible states, semantic links, descriptive image alt text, and sufficient monochrome contrast.

## Verification

After implementation: install dependencies, run the production build, inspect the page at desktop and mobile widths, and confirm keyboard navigation, project preview behavior, and reduced-motion behavior.
