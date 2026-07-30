# Forma Objects Accordion Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add an accessible, inline expandable text-details panel for the Forma Objects project row.

**Architecture:** Keep project data in `ProjectIndex.jsx`. Add one local boolean state for the Forma Objects panel, rendering a semantic trigger button and a conditional Motion text-details region directly after its row. Preserve the current hover/focus preview system for all project rows.

**Tech Stack:** React, Motion, Tailwind CSS, Node.js assertions, Vite.

## Global Constraints

- Apply the accordion only to project number `01`.
- Use a semantic `<button>` with `aria-expanded` and `aria-controls`.
- Preserve reduced-motion support through the existing `useReducedMotion` hook.
- Do not add dependencies.

---

### Task 1: Verify and implement the Forma Objects accordion

**Files:**
- Create: `scripts/verify-forma-accordion.mjs`
- Modify: `src/components/ProjectIndex.jsx`

**Interfaces:**
- Consumes: `projects`, `useState`, `motion`, and `useReducedMotion` in `ProjectIndex.jsx`.
- Produces: A `button` trigger for project `01` which controls an element with `id="forma-objects-details"`.

- [ ] **Step 1: Write the failing regression check**

```js
assert.match(source, /const\s*\[isFormaOpen,\s*setIsFormaOpen\]\s*=\s*useState\(false\)/);
assert.match(source, /aria-expanded=\{isFormaOpen\}/);
assert.match(source, /aria-controls="forma-objects-details"/);
assert.match(source, /id="forma-objects-details"/);
```

- [ ] **Step 2: Run the regression check to verify it fails**

Run: `node scripts/verify-forma-accordion.mjs`

Expected: The assertion for `isFormaOpen` fails because no accordion state exists yet.

- [ ] **Step 3: Add the minimal accordion implementation**

```jsx
const [isFormaOpen, setIsFormaOpen] = useState(false);

<button
  type="button"
  aria-expanded={isFormaOpen}
  aria-controls="forma-objects-details"
  onClick={() => setIsFormaOpen((isOpen) => !isOpen)}
>
  {/* Forma Objects row metadata and +/- indicator */}
</button>
{isFormaOpen && (
  <motion.div id="forma-objects-details">
    {/* image and project metadata */}
  </motion.div>
)}
```

- [ ] **Step 4: Run the regression check to verify it passes**

Run: `node scripts/verify-forma-accordion.mjs`

Expected: Exit code `0`.

- [ ] **Step 5: Run the production build**

Run: `npm run build`

Expected: Exit code `0` and Vite reports a successful build.

- [ ] **Step 6: Commit**

```bash
git add src/components/ProjectIndex.jsx scripts/verify-forma-accordion.mjs docs/superpowers/specs/2026-07-23-forma-objects-accordion-design.md docs/superpowers/plans/2026-07-23-forma-objects-accordion.md
git commit -m "feat: add Forma Objects accordion"
```
