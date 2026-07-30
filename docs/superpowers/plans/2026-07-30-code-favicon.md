# Code Favicon Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Display the code-block SVG as the browser tab icon.

**Architecture:** `index.html` references the Vite-served SVG file in `src/picture/`; a small Node verifier protects the link contract.

**Tech Stack:** Vite, HTML, Node.js.

## Global Constraints

- Favicon source is `/src/picture/code-block-svgrepo-com.svg`.
- Favicon keeps `image/svg+xml` as its type.

---

### Task 1: Correct and verify the favicon path

**Files:**
- Modify: `index.html`
- Create: `scripts/verify-favicon.mjs`

**Interfaces:**
- Consumes: the SVG at `src/picture/code-block-svgrepo-com.svg`.
- Produces: an HTML icon link Vite can serve in development and production.

- [ ] **Step 1: Write the failing verifier**

```js
assert.match(html, /href="\/src\/picture\/code-block-svgrepo-com\.svg"/);
```

- [ ] **Step 2: Run focused verification**

Run: `node scripts/verify-favicon.mjs`

Expected: FAIL because the page currently points to the project root instead of `src/picture`.

- [ ] **Step 3: Update the icon link**

```html
<link rel="icon" type="image/svg+xml" href="/src/picture/code-block-svgrepo-com.svg" />
```

- [ ] **Step 4: Run focused verification and production build**

Run: `node scripts/verify-favicon.mjs && npm run build`

Expected: exit code 0.
