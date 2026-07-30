# Skills Infinite Carousel Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the static Skills & Tools lists with an accessible looping marquee of outlined skill labels.

**Architecture:** `SkillsTools.jsx` owns one skills array and renders it twice inside a clipped viewport. Component-scoped CSS supplies a marquee animation and a reduced-motion fallback. A Node script validates the source contract without a browser dependency.

**Tech Stack:** React, Tailwind CSS, Vite, Node.js.

## Global Constraints

- Preserve the existing `Skills & Tools` heading and supporting copy.
- Tech Stack includes: HTML, CSS, JavaScript, React, Tailwind CSS.
- Tools includes: GitHub, Figma, VS Code, Vite.
- Render a visual duplicate marked `aria-hidden` for each seamless loop.
- Do not add dependencies.
- Disable animation and preserve horizontal reading under `prefers-reduced-motion`.

---

### Task 1: Establish carousel contract coverage

**Files:**
- Modify: `scripts/verify-skills-tools.mjs`

**Interfaces:**
- Consumes: `src/components/SkillsTools.jsx` and `src/index.css` source text.
- Produces: exit-zero verification only when the carousel markup, all labels, animation, and reduced-motion support exist.

- [ ] **Step 1: Write the failing test**

Add assertions for `const skills = [`, `skills-carousel-viewport`, `skills-carousel-track`, a visible `skills-carousel-list`, an `aria-hidden` duplicate list, `@keyframes skills-carousel-scroll`, and `animation: skills-carousel-scroll 30s linear infinite`.

- [ ] **Step 2: Run test to verify it fails**

Run: `node scripts/verify-skills-tools.mjs`

Expected: FAIL because the current component has static `skillGroups` and no carousel CSS.

### Task 2: Render duplicated, opposing semantic rails

**Files:**
- Modify: `src/components/SkillsTools.jsx`
- Test: `scripts/verify-skills-tools.mjs`

**Interfaces:**
- Consumes: ordered `techSkills` and `tools` arrays.
- Produces: two labelled carousel rows, each with a visible semantic list and an `aria-hidden` duplicate.

- [ ] **Step 1: Write minimal implementation**

Replace `skillGroups` with `techSkills` and `tools` arrays. Render a `Tech Stack` rail and a `Tools` rail, each with two mapped lists. Each item is an inline label plus a decorative `•` separator; give duplicate keys the `duplicate-` prefix.

- [ ] **Step 2: Run test to verify it passes the markup requirements**

Run: `node scripts/verify-skills-tools.mjs`

Expected: the remaining failure, if any, identifies only the missing CSS contract from Task 3.

### Task 3: Animate the rail and preserve accessibility preferences

**Files:**
- Modify: `src/index.css`
- Test: `scripts/verify-skills-tools.mjs`

**Interfaces:**
- Consumes: carousel class names from Task 2.
- Produces: leftward and rightward keyframes translating each track by `-50%`; static, horizontal-scroll fallbacks when motion is reduced.

- [ ] **Step 1: Write minimal implementation**

Add component-scoped CSS: hide overflow on each viewport; make each track a flex row with `width: max-content`; animate the Tech Stack rail left and the Tools rail right; make each list a non-shrinking flex row; prevent item wrapping; and define both keyframes. In the existing reduced-motion media query, set each viewport to `overflow-x: auto` and each track to `animation: none`.

- [ ] **Step 2: Run test to verify it passes**

Run: `node scripts/verify-skills-tools.mjs`

Expected: exit code 0.

- [ ] **Step 3: Run all checks**

Run: `npm test && npm run build`

Expected: all verification scripts pass and Vite completes its production build successfully.

- [ ] **Step 4: Commit the finished feature**

Run:

```bash
git add src/components/SkillsTools.jsx src/index.css scripts/verify-skills-tools.mjs
git commit -m "feat: add looping skills carousel"
```
