# Johannes Inline Preview Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Display Johannes Vermeer's local preview image beneath Link Project only while that project accordion is open.

**Architecture:** `ProjectIndex` already owns accordion state and the imported image through `project.image`. Add one project-number guard inside the existing details panel, after the link block, so the image lifecycle follows the existing `isOpen` conditional. The existing desktop hover-preview column remains untouched.

**Tech Stack:** React, Motion, Tailwind CSS, Node static verification scripts, Vite.

## Global Constraints

- Only project `01` receives the inline preview.
- Projects `02`–`04` retain their current behavior.
- Use `project.image`; do not add a second asset import.
- Do not modify the desktop hover-preview column.

---

### Task 1: Verify and add Johannes inline preview

**Files:**
- Modify: `scripts/verify-forma-accordion.mjs`
- Modify: `src/components/ProjectIndex.jsx`

**Interfaces:**
- Consumes: the existing `project` object with `number`, `image`, and `alt` fields.
- Produces: a project-01-only inline `motion.img` beneath the Link Project block.

- [ ] **Step 1: Write the failing static verification**

Add an assertion to `scripts/verify-forma-accordion.mjs` that requires all of the following source fragments:

```js
project.number === "01"
src={project.image}
alt="Preview of Johannes Vermeer project"
```

Require the first fragment to occur after the `Link Project` heading, proving the new preview belongs in the expanded details instead of the side preview.

- [ ] **Step 2: Run the verifier to confirm it fails**

Run: `node scripts/verify-forma-accordion.mjs`

Expected: a failure reporting that the Johannes-only inline preview source is missing.

- [ ] **Step 3: Add the minimal component markup**

In the details panel of `src/components/ProjectIndex.jsx`, directly after the `Link Project` block, add:

```jsx
{project.number === "01" && (
  <motion.img
    src={project.image}
    alt="Preview of Johannes Vermeer project"
    initial={reduceMotion ? false : { opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={transition}
    className="mt-6 aspect-[4/5] w-full object-cover"
  />
)}
```

- [ ] **Step 4: Run tests and build**

Run: `npm test; npm run build`

Expected: both commands exit with code 0.
