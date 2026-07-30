# Theme Transition Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Animate colour changes when visitors switch themes.

**Architecture:** A global CSS declaration transitions the four palette-related visual properties. Existing reduced-motion styles override its duration.

**Tech Stack:** CSS, Vite, Node.js.

## Global Constraints

- Transition duration is 350ms using `ease-in-out`.
- Only background, text, border, and outline colours transition.

---

### Task 1: Add and verify the palette transition

**Files:**
- Modify: `src/index.css`
- Modify: `scripts/verify-theme-toggle.mjs`

**Interfaces:**
- Consumes: all page elements and pseudo-elements.
- Produces: a 350ms eased transition for theme colours.

- [ ] **Step 1: Require the transition in the verifier**

```js
assert.match(stylesSource, /transition:\s*background-color 350ms ease-in-out, color 350ms ease-in-out, border-color 350ms ease-in-out, outline-color 350ms ease-in-out/);
```

- [ ] **Step 2: Run the verifier to confirm it fails**

Run: `node scripts/verify-theme-toggle.mjs`

Expected: FAIL because no shared palette transition exists.

- [ ] **Step 3: Add the shared CSS rule**

```css
html *, html *::before, html *::after {
  transition: background-color 350ms ease-in-out, color 350ms ease-in-out, border-color 350ms ease-in-out, outline-color 350ms ease-in-out;
}
```

- [ ] **Step 4: Run focused verification and production build**

Run: `node scripts/verify-theme-toggle.mjs && npm run build`

Expected: exit code 0.
