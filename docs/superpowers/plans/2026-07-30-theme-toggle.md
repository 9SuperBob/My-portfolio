# Theme Toggle Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Let visitors switch the portfolio between white and black themes and restore their selection after reload.

**Architecture:** `App.jsx` owns the persisted `theme` state and synchronizes the document root. `Navbar.jsx` renders an accessible theme button from props. CSS and Tailwind classes use the root `dark` class to invert surfaces, text, borders, interaction states, and the project-list motion colours.

**Tech Stack:** React, Tailwind CSS, Motion, Vite, Node.js.

## Global Constraints

- Default to light mode unless `localStorage.getItem("portfolio-theme")` is exactly `"dark"`.
- Store every user selection under `portfolio-theme`.
- Button must expose `aria-pressed` and an explicit label.
- Preserve the existing light-theme appearance and reduced-motion behavior.

---

### Task 1: Specify the theme contract

**Files:**
- Create: `scripts/verify-theme-toggle.mjs`
- Test: `scripts/verify-theme-toggle.mjs`

**Interfaces:**
- Consumes: source text from `src/App.jsx`, `src/components/Navbar.jsx`, `src/index.css`, and `src/components/ProjectIndex.jsx`.
- Produces: an exit-zero check only when the persistent state, root class, accessible button, and dark visual contracts exist.

- [ ] **Step 1: Write the failing test**

```js
assert.match(appSource, /localStorage\.getItem\(["']portfolio-theme["']\)/);
assert.match(appSource, /document\.documentElement\.classList\.toggle\(["']dark["']/);
assert.match(navbarSource, /aria-pressed=\{theme === ["']dark["']\}/);
assert.match(stylesSource, /\.dark body/);
assert.match(projectSource, /isDark \? ["']#ffffff["'] : ["']#000000["']/);
```

- [ ] **Step 2: Run test to verify it fails**

Run: `node scripts/verify-theme-toggle.mjs`

Expected: FAIL because no theme persistence, theme button, or dark-mode styling exists.

### Task 2: Add persisted theme state and accessible control

**Files:**
- Modify: `src/App.jsx`
- Modify: `src/components/Navbar.jsx`
- Test: `scripts/verify-theme-toggle.mjs`

**Interfaces:**
- Consumes: `theme` (`"light" | "dark"`) and `onToggleTheme()` from `App.jsx`.
- Produces: a Navbar button whose pressed state is true in dark mode and a root `dark` class matching the persisted selection.

- [ ] **Step 1: Read the saved setting in `App.jsx`**

```jsx
const [theme, setTheme] = useState(() =>
  window.localStorage.getItem("portfolio-theme") === "dark" ? "dark" : "light",
);
```

- [ ] **Step 2: Synchronize the root class and saved setting**

```jsx
useEffect(() => {
  const isDark = theme === "dark";
  document.documentElement.classList.toggle("dark", isDark);
  window.localStorage.setItem("portfolio-theme", theme);
}, [theme]);
```

- [ ] **Step 3: Pass the props and render the button**

```jsx
<Navbar theme={theme} onToggleTheme={() => setTheme((value) => value === "dark" ? "light" : "dark")} />
```

```jsx
<button type="button" onClick={onToggleTheme} aria-pressed={theme === "dark"} aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}>
  {theme === "dark" ? "Light" : "Dark"}
</button>
```

- [ ] **Step 4: Run the focused verifier**

Run: `node scripts/verify-theme-toggle.mjs`

Expected: still FAIL because the shared visual dark-mode contracts and project motion colours are not present.

### Task 3: Apply complete black-and-white styling

**Files:**
- Modify: `src/index.css`
- Modify: `src/App.jsx`
- Modify: `src/components/Navbar.jsx`
- Modify: `src/components/Hero.jsx`
- Modify: `src/components/About.jsx`
- Modify: `src/components/Skillspage.jsx`
- Modify: `src/components/ProjectIndex.jsx`
- Modify: `src/components/Footer.jsx`
- Test: `scripts/verify-theme-toggle.mjs`

**Interfaces:**
- Consumes: the document's `dark` class and `theme` prop.
- Produces: legible white text, borders, hover states, focus outlines, and animated project rows on a black background.

- [ ] **Step 1: Add dark shared body, focus, and carousel styles**

```css
.dark body { background: #000; color: #fff; }
.dark a:focus-visible { outline-color: #fff; }
.dark .skills-carousel-viewport { border-color: #fff; }
.dark .skills-carousel-pill { border-color: #fff; }
```

- [ ] **Step 2: Add paired Tailwind classes to explicit surfaces and borders**

```jsx
<main className="bg-white text-black transition-colors duration-200 dark:bg-black dark:text-white">
<section className="border-t border-black dark:border-white">
<a className="border-black hover:bg-black hover:text-white dark:border-white dark:hover:bg-white dark:hover:text-black">
```

- [ ] **Step 3: Invert project row animation in dark mode**

```jsx
const isDark = document.documentElement.classList.contains("dark");
backgroundColor: isHovered ? (isDark ? "#ffffff" : "#000000") : (isDark ? "#000000" : "#ffffff"),
color: isHovered ? (isDark ? "#000000" : "#ffffff") : (isDark ? "#ffffff" : "#000000"),
```

- [ ] **Step 4: Run focused verification and all tests**

Run: `node scripts/verify-theme-toggle.mjs && npm test`

Expected: exit code 0.

- [ ] **Step 5: Run production build**

Run: `npm run build`

Expected: Vite completes successfully.

- [ ] **Step 6: Commit the feature**

Run: `git add src/App.jsx src/index.css src/components/Navbar.jsx src/components/Hero.jsx src/components/About.jsx src/components/Skillspage.jsx src/components/ProjectIndex.jsx src/components/Footer.jsx scripts/verify-theme-toggle.mjs docs/superpowers/plans/2026-07-30-theme-toggle.md`

Run: `git commit -m "feat: add persisted theme toggle"`

### Task 4: Enforce one monochrome palette across the page

**Files:**
- Modify: `src/index.css`
- Modify: `src/components/ProjectIndex.jsx`
- Modify: `scripts/verify-theme-toggle.mjs`
- Test: `scripts/verify-theme-toggle.mjs`

**Interfaces:**
- Consumes: the `dark` class on `document.documentElement`.
- Produces: CSS custom properties `--surface`, `--ink`, and `--rule` that make all non-image surfaces black in dark mode and white in light mode.

- [ ] **Step 1: Write the failing palette verifier**

```js
assert.match(stylesSource, /--surface:\s*#fff/);
assert.match(stylesSource, /\.dark\s*\{[\s\S]*--surface:\s*#000/);
assert.match(stylesSource, /background:\s*var\(--surface\)/);
assert.match(stylesSource, /color:\s*var\(--ink\)/);
assert.match(projectSource, /backgroundColor:\s*isHovered \? var\(--ink\)/);
```

- [ ] **Step 2: Run the focused verifier to confirm the new contract fails**

Run: `node scripts/verify-theme-toggle.mjs`

Expected: FAIL because the current CSS uses literal black and white values instead of a complete shared palette.

- [ ] **Step 3: Define and consume the palette**

```css
html { --surface: #fff; --ink: #000; --rule: #000; }
html.dark { --surface: #000; --ink: #fff; --rule: #fff; }
body { background: var(--surface); color: var(--ink); }
```

Apply `var(--surface)`, `var(--ink)`, and `var(--rule)` to component borders, hover fills, focus outlines, and carousel styles.

- [ ] **Step 4: Make the project-row animation use the same palette**

```jsx
const palette = isDark
  ? { surface: "#000000", ink: "#ffffff" }
  : { surface: "#ffffff", ink: "#000000" };

backgroundColor: isHovered ? palette.ink : palette.surface,
color: isHovered ? palette.surface : palette.ink,
```

- [ ] **Step 5: Run focused verification and production build**

Run: `node scripts/verify-theme-toggle.mjs && npm run build`

Expected: exit code 0.
