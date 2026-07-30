# Forma Objects Accordion Design

## Goal

Make the first project row, **01 Forma Objects**, expandable so a visitor can reveal supporting project information directly below the row.

## Scope

- Only `01 Forma Objects` receives the new interaction.
- Rows `02 Common Ground` and `03 Sora Journal` retain their current preview behavior.
- The first row is converted from a link to a semantic button with `aria-expanded` and `aria-controls`.

## Interaction

- Activating the Forma Objects row toggles a single inline details region.
- The trigger displays `+` while closed and `−` while open.
- The details region sits immediately below the first row and contains a short description, services, and year/location text.
- The same interaction works with mouse, touch, Enter, and Space.
- Motion uses the existing Motion dependency and becomes immediate for visitors who prefer reduced motion.

## Layout

- Preserve the monochrome index layout, thin divider rules, typography, and desktop metadata columns.
- The text details use a responsive three-part grid below the row.
- On desktop, the inline text details appear beneath the row without replacing the adjacent hover-preview panel.

## Verification

- A source-level regression check confirms the Forma Objects trigger has a button, an expanded state, and a controlled details region.
- Run the regression check and `npm run build`.
- Confirm the first row opens and closes by pointer and keyboard; confirm other project rows still show their hover/focus preview.
