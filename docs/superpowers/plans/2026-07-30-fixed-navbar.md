# Fixed Navbar Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Keep the Navbar visible during scrolling without obscuring page content.

**Architecture:** Navbar receives fixed positioning and the shared monochrome surface. `App.jsx` offsets the main page by the existing `--navbar-height`. The Hero keeps its current viewport-height calculation because the main offset restores the original document flow space.

**Tech Stack:** React, Tailwind CSS, Vite, Node.js.

## Global Constraints

- Navbar stays fixed to the top edge at every viewport width.
- Navbar uses `var(--surface)` and `var(--ink)` for its opaque theme-aware surface.
- Main content begins below `--navbar-height`.

---

### Task 1: Verify and apply the fixed Navbar layout

**Files:**
- Modify: `scripts/verify-hero.mjs`
- Modify: `src/components/Navbar.jsx`
- Modify: `src/App.jsx`

**Interfaces:**
- Consumes: `--navbar-height` from `src/index.css`.
- Produces: a fixed, top-layer Navbar and a main content offset equal to the Navbar height.

- [ ] **Step 1: Write the failing verifier assertions**

```js
assert.match(navbarSource, /fixed\s+inset-x-0\s+top-0\s+z-50/);
assert.match(navbarSource, /bg-\[var\(--surface\)\]\s+text-\[var\(--ink\)\]/);
assert.match(appSource, /pt-\[var\(--navbar-height\)\]/);
```

- [ ] **Step 2: Run the focused verifier**

Run: `node scripts/verify-hero.mjs`

Expected: FAIL because the Navbar is currently in normal document flow and main has no top offset.

- [ ] **Step 3: Add the fixed Navbar and main offset**

```jsx
<header className="fixed inset-x-0 top-0 z-50 bg-[var(--surface)] text-[var(--ink)] ...">
<main className="pt-[var(--navbar-height)] ...">
```

- [ ] **Step 4: Run focused verification and production build**

Run: `node scripts/verify-hero.mjs && npm run build`

Expected: exit code 0.
