# Skills & Tools Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a responsive Skills & Tools section that presents the portfolio owner's frontend stack and everyday tools.

**Architecture:** A new `SkillsTools` React component owns its concise, static skill data and semantic two-list layout. `App.jsx` imports this component and renders it between About and the project index. A lightweight Node verification script checks the source-level contract already used by the repository's existing checks.

**Tech Stack:** React, JavaScript, Tailwind CSS, Motion (already installed), Node.js verification scripts, Vite.

## Global Constraints

- Keep the established monochrome editorial visual language with thin black dividers and no card grid.
- Use the exact section title `Skills & Tools`.
- Present `Tech Stack` and `Tools` as semantic lists.
- Tech Stack items are HTML, CSS, JavaScript, React, and Tailwind CSS.
- Tool items are GitHub, Figma, VS Code, and Vite.
- The two columns stack at small widths and use sufficient black-and-white contrast.
- Do not add dependencies.

---

### Task 1: Add a source-contract verifier for SkillsTools

**Files:**
- Create: `scripts/verify-skills-tools.mjs`
- Modify: `package.json`

**Interfaces:**
- Consumes: the source text in `src/components/SkillsTools.jsx` and `src/App.jsx`.
- Produces: `node scripts/verify-skills-tools.mjs`, exiting 0 only if the component exports `SkillsTools`, contains both list labels and all required items, and is imported and rendered by `App.jsx`.

- [ ] **Step 1: Write the failing test**

Create `scripts/verify-skills-tools.mjs` with this source contract before the component exists:

```js
import { readFileSync } from "node:fs";

const skillsSource = readFileSync(
  new URL("../src/components/SkillsTools.jsx", import.meta.url),
  "utf8",
);
const appSource = readFileSync(
  new URL("../src/App.jsx", import.meta.url),
  "utf8",
);

const requiredSkills = [
  "Tech Stack",
  "Tools",
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Tailwind CSS",
  "GitHub",
  "Figma",
  "VS Code",
  "Vite",
];

for (const label of requiredSkills) {
  if (!skillsSource.includes(label)) throw new Error(`Missing: ${label}`);
}

if (!appSource.includes('import SkillsTools from "./components/SkillsTools"')) {
  throw new Error("App must import SkillsTools");
}

if (!appSource.includes("<SkillsTools />")) {
  throw new Error("App must render SkillsTools");
}
```

- [ ] **Step 2: Run test to verify it fails**

Run: `node scripts/verify-skills-tools.mjs`

Expected: FAIL with `ENOENT` because `src/components/SkillsTools.jsx` does not exist.

- [ ] **Step 3: Add the verifier to the repository test command**

Append `&& node scripts/verify-skills-tools.mjs` to the existing `test` script in `package.json`.

- [ ] **Step 4: Commit the failing test setup**

```bash
git add scripts/verify-skills-tools.mjs package.json
git commit -m "test: cover skills tools section contract"
```

### Task 2: Build and integrate the SkillsTools component

**Files:**
- Create: `src/components/SkillsTools.jsx`
- Modify: `src/App.jsx`

**Interfaces:**
- Consumes: React JSX and Tailwind utility classes.
- Produces: default-exported `SkillsTools` component rendering a `<section id="skills">` with exactly two labelled `<ul>` lists.

- [ ] **Step 1: Implement the minimal component**

Create `src/components/SkillsTools.jsx` with static arrays for the approved content and map them into list items. Use a section divider, compact metadata-style label, oversized but restrained heading, and a responsive `md:grid-cols-2` list layout. Each list item uses a short black-background hover inversion and a left item number so it visually aligns with the project index.

```jsx
const skillGroups = [
  { title: "Tech Stack", items: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"] },
  { title: "Tools", items: ["GitHub", "Figma", "VS Code", "Vite"] },
];

export default function SkillsTools() {
  return (
    <section id="skills" className="border-t border-black px-5 py-20 md:px-10">
      {/* heading and two semantic lists */}
    </section>
  );
}
```

- [ ] **Step 2: Integrate the component**

In `src/App.jsx`, replace the `Skillspage` import and element with:

```jsx
import SkillsTools from "./components/SkillsTools";

// after <About /> and before <ProjectIndex />
<SkillsTools />
```

- [ ] **Step 3: Run the contract verifier to verify it passes**

Run: `node scripts/verify-skills-tools.mjs`

Expected: exits 0 with no output.

- [ ] **Step 4: Run the full automated suite**

Run: `npm test`

Expected: exits 0; existing hero, accordion, about-layout, and new Skills & Tools source-contract verification all pass.

- [ ] **Step 5: Run a production build**

Run: `npm run build`

Expected: Vite completes with exit 0 and writes the production bundle to `dist`.

- [ ] **Step 6: Commit the feature**

```bash
git add src/components/SkillsTools.jsx src/App.jsx
git commit -m "feat: add skills tools section"
```
