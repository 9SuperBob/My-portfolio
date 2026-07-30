# Code Favicon Design

## Goal

Display `code-block-svgrepo-com.svg` as the browser-tab icon when the portfolio runs locally or from its production build.

## Implementation

- Keep the SVG in `src/picture/`.
- Update the head icon link to use Vite's `/src/picture/code-block-svgrepo-com.svg` development and build-served path.
- Retain the SVG MIME type.

## Verification

- Add a Node verifier requiring the expected icon path in `index.html`.
- Run the focused verifier and Vite production build.
