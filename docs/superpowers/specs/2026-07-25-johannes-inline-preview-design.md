# Johannes Inline Preview Design

## Goal

Show the local Johannes Vermeer image beneath the project's Link Project section when its accordion item is opened.

## Scope

- Apply the inline image only to project `01` (Johannes Vermeer).
- Keep project rows 02–04 and the existing right-side hover preview unchanged.
- Use the already imported local asset at `src/picture/johannes vermeer1.png`.

## Behavior

The existing row button continues to toggle the project's details. When project 01 is open, a responsive `motion.img` is rendered directly after its Link Project block. The image uses the project's `image` value and a descriptive alt label. Closing the row removes the inline image with the rest of the details.

## Verification

Extend the existing static project-index verification to assert that the inline image is conditional on `project.number === "01"`, placed after the project link, and uses `project.image`. Then run the full test script and production build.
