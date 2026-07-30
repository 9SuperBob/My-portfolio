# Full-Viewport Hero Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make the Hero fill the viewport area below the Navbar before the user scrolls to later sections.

**Architecture:** A shared CSS custom property represents the Navbar's occupied height. `Hero.jsx` consumes that property in its Tailwind arbitrary minimum-height value, preserving its existing Motion entrance and centered content. The existing Node verifier asserts the layout contract.

**Tech Stack:** React, Tailwind CSS, Motion, Vite, Node.js.

## Global Constraints

- Navbar remains in normal document flow and is excluded from the Hero's height.
- Hero uses `100svh` for stable mobile viewport sizing.
- Preserve Hero copy, centered layout, and reduced-motion behavior.

---

### Task 1: Add the full-height Hero contract

**Files:**
- Modify: `scripts/verify-hero.mjs`

**Interfaces:**
- Consumes: source text from `src/components/Hero.jsx` and `src/index.css`.
- Produces: an exit-zero check only when Hero references the shared Navbar height and uses the remaining small viewport height.

- [ ] **Step 1: Write the failing test**

Read `src/index.css` and assert the shared `--navbar-height` variable exists. Assert `Hero.jsx` contains `min-h-[calc(100svh-var(--navbar-height))]`.

- [ ] **Step 2: Run test to verify it fails**

Run: `node scripts/verify-hero.mjs`

Expected: FAIL because Hero currently uses `min-h-[72svh]` and no shared Navbar-height variable exists.

### Task 2: Make Hero fill the remaining viewport

**Files:**
- Modify: `src/index.css`
- Modify: `src/components/Hero.jsx`
- Test: `scripts/verify-hero.mjs`

**Interfaces:**
- Consumes: `--navbar-height` defined in the base HTML element.
- Produces: a Hero minimum height of `calc(100svh - var(--navbar-height))`.

- [ ] **Step 1: Define the Navbar height**

Inside the existing `html` base rule in `src/index.css`, add `--navbar-height: 4.5rem;`.

- [ ] **Step 2: Update the Hero section height**

Replace `min-h-[72svh]` in the `motion.section` class list with `min-h-[calc(100svh-var(--navbar-height))]`; leave existing padding, motion props, and content unchanged.

- [ ] **Step 3: Run focused verification**

Run: `node scripts/verify-hero.mjs`

Expected: exit code 0.

- [ ] **Step 4: Run production build**

Run: `npm run build`

Expected: Vite completes successfully.

- [ ] **Step 5: Commit the feature**

```bash
git add src/components/Hero.jsx src/index.css scripts/verify-hero.mjs
git commit -m "feat: make hero fill viewport"
```
