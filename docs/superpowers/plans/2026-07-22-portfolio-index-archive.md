# Portfolio Index Archive Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a responsive monochrome portfolio homepage with an editorial project index and editable placeholder content.

**Architecture:** A Vite React application will compose a page from small `Navbar`, `ProjectIndex`, and `Footer` components. Static portfolio data will stay in `ProjectIndex.jsx`; Motion provides restrained entry, in-view, and hover animations, while Tailwind defines the responsive visual system.

**Tech Stack:** Vite, React, JavaScript, Tailwind CSS, Motion, React Icons.

## Global Constraints

- Use a white page with black as the only strong color; do not introduce colored accents or card grids.
- Keep profile, contact, social, and project content as clearly editable placeholders.
- Use `motion` as the only animation dependency and respect `prefers-reduced-motion`.
- Install `react-icons` only for social and menu icons; use no carousel or smooth-scroll dependency.
- Keep `Navbar.jsx`, `Footer.jsx`, and `ProjectIndex.jsx` as separate components.
- Build must pass with `npm run build` before completion.

---

### Task 1: Scaffold the Vite React and Tailwind project

**Files:**
- Create: `package.json`
- Create: `vite.config.js`
- Create: `index.html`
- Create: `src/main.jsx`
- Create: `src/index.css`
- Create: `src/App.jsx`
- Create: `tailwind.config.js`
- Create: `postcss.config.js`
- Modify: `README.md`

**Interfaces:**
- Consumes: Node.js and npm.
- Produces: Vite development server command `npm run dev` and production build command `npm run build`.

- [ ] **Step 1: Create the dependency manifest**

```json
{
  "scripts": { "dev": "vite", "build": "vite", "preview": "vite preview" },
  "dependencies": {
    "@vitejs/plugin-react": "latest",
    "motion": "latest",
    "react": "latest",
    "react-dom": "latest",
    "react-icons": "latest",
    "vite": "latest"
  },
  "devDependencies": {
    "autoprefixer": "latest",
    "postcss": "latest",
    "tailwindcss": "latest"
  },
  "type": "module"
}
```

- [ ] **Step 2: Create Vite entry files and Tailwind directives**

```jsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode><App /></StrictMode>,
);
```

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

- [ ] **Step 3: Install packages and run a baseline build**

Run: `npm install && npm run build`

Expected: Vite reports `✓ built` and creates `dist/`.

- [ ] **Step 4: Document setup and commit**

Update `README.md` with `npm install`, `npm run dev`, and `npm run build` commands.

```bash
git add package.json package-lock.json vite.config.js index.html src tailwind.config.js postcss.config.js README.md
git commit -m "feat: scaffold portfolio app"
```

### Task 2: Build the page structure, navbar, and footer

**Files:**
- Create: `src/components/Navbar.jsx`
- Create: `src/components/Footer.jsx`
- Modify: `src/App.jsx`
- Modify: `src/index.css`

**Interfaces:**
- Consumes: `Navbar` and `Footer` have no required props.
- Produces: `Navbar` with `#work`, `#about`, and `#contact` links; `Footer` with the `#top` back-to-top link.

- [ ] **Step 1: Implement the navigation interface**

```jsx
export default function Navbar() {
  return (
    <header className="border-b border-black px-5 py-4 md:px-10">
      <nav className="flex items-center justify-between" aria-label="Main navigation">
        <a href="#top" className="text-lg font-semibold tracking-tight">NARIN</a>
        <div className="flex gap-4 text-sm uppercase tracking-wider">
          <a href="#work">Work</a><a href="#about">About</a><a href="#contact">Contact</a>
        </div>
        <span className="hidden text-xs md:block">© 2026</span>
      </nav>
    </header>
  );
}
```

- [ ] **Step 2: Implement the contact footer with accessible social icons**

```jsx
import { FiArrowUpRight, FiGithub, FiInstagram, FiLinkedin } from 'react-icons/fi';

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-black px-5 py-12 md:px-10">
      <p className="text-sm uppercase tracking-wider">Have a project in mind?</p>
      <a className="mt-3 inline-flex items-center gap-2 text-3xl underline md:text-5xl" href="mailto:hello@narin.design">Let&apos;s talk <FiArrowUpRight aria-hidden="true" /></a>
      <div className="mt-12 flex flex-wrap justify-between gap-4 text-sm"><span>© 2026 Narin Kittipong</span><div className="flex gap-4"><a aria-label="LinkedIn" href="#"><FiLinkedin /></a><a aria-label="Instagram" href="#"><FiInstagram /></a><a aria-label="GitHub" href="#"><FiGithub /></a></div><a href="#top">Back to top ↑</a></div>
    </footer>
  );
}
```

- [ ] **Step 3: Compose the hero and about sections in `App.jsx`**

```jsx
import { motion, useReducedMotion } from 'motion/react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProjectIndex from './components/ProjectIndex';

export default function App() {
  const reduceMotion = useReducedMotion();
  return <main id="top" className="bg-white text-black"><Navbar /><motion.section initial={reduceMotion ? false : { opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }} className="min-h-[72svh] px-5 py-12 md:px-10 md:py-20"><p className="text-sm uppercase tracking-wider">Creative developer · Bangkok, Thailand</p><h1 className="mt-16 max-w-5xl text-6xl font-medium leading-[0.9] tracking-[-0.06em] md:text-9xl">Narin<br />Kittipong</h1><p className="mt-10 max-w-md text-lg">I design and build thoughtful digital identities, websites, and visual systems.</p></motion.section><ProjectIndex /><section id="about" className="border-t border-black px-5 py-20 md:px-10"><p className="text-sm uppercase tracking-wider">About</p><div className="mt-10 grid gap-10 md:grid-cols-2"><p className="max-w-xl text-3xl leading-tight">An independent creative developer working across identity, editorial design, and digital experiences.</p><ul className="space-y-2 border-t border-black pt-4"><li>Art direction</li><li>Web design &amp; development</li><li>Digital identities</li></ul></div></section><Footer /></main>;
}
```

- [ ] **Step 4: Build and verify keyboard navigation**

Run: `npm run build`

Expected: Vite reports `✓ built`; Tab reaches the navigation, email link, social links, and back-to-top link in a visible order.

- [ ] **Step 5: Commit**

```bash
git add src/App.jsx src/components/Navbar.jsx src/components/Footer.jsx src/index.css
git commit -m "feat: add portfolio page shell"
```

### Task 3: Build the interactive project index

**Files:**
- Create: `src/components/ProjectIndex.jsx`
- Modify: `src/index.css`

**Interfaces:**
- Consumes: Motion components from `motion/react`.
- Produces: `ProjectIndex`, rendered by `App`, containing an element with `id="work"` and three keyboard-focusable project links.

- [ ] **Step 1: Define editable project data and index markup**

```jsx
const projects = [
  { number: '01', title: 'Forma Objects', type: 'Digital identity', year: '2026', image: 'https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?auto=format&fit=crop&w=1200&q=85' },
  { number: '02', title: 'Common Ground', type: 'Editorial website', year: '2025', image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=85' },
  { number: '03', title: 'Sora Journal', type: 'Creative direction', year: '2024', image: 'https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&w=1200&q=85' },
];
```

Each item must render as an `<a href="#contact">` with its number, title, type, year, and an `<img alt="Preview of {title}">`.

- [ ] **Step 2: Add Motion interaction with a reduced-motion fallback**

```jsx
<motion.a
  href="#contact"
  whileHover={reduceMotion ? undefined : { backgroundColor: '#000', color: '#fff' }}
  whileFocus={reduceMotion ? undefined : { backgroundColor: '#000', color: '#fff' }}
  className="group grid border-t border-black py-5 md:grid-cols-[72px_1fr_180px_80px]"
>
```

Use `group-hover:opacity-100` and `group-focus-visible:opacity-100` for the desktop preview. Render the preview normally below each row on small screens.

- [ ] **Step 3: Add responsive index styles and section reveal**

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after { scroll-behavior: auto !important; transition-duration: 0.01ms !important; animation-duration: 0.01ms !important; }
}
```

Use Tailwind responsive classes for the grid, preview positioning, typography, and focus ring. Do not add a separate CSS animation library.

- [ ] **Step 4: Run production build and visual checks**

Run: `npm run build`

Expected: Vite reports `✓ built`.

At 1440px, hover/focus each project row and confirm the corresponding preview appears. At 390px, confirm project metadata and images stack without horizontal scrolling.

- [ ] **Step 5: Commit**

```bash
git add src/components/ProjectIndex.jsx src/index.css
git commit -m "feat: add animated project index"
```

### Task 4: Final quality check and documentation

**Files:**
- Modify: `README.md`

**Interfaces:**
- Consumes: completed application and npm scripts.
- Produces: documented setup and a production-ready `dist/` output.

- [ ] **Step 1: Update README with the final project structure**

```text
src/
  components/
    Footer.jsx
    Navbar.jsx
    ProjectIndex.jsx
  App.jsx
  index.css
  main.jsx
```

- [ ] **Step 2: Run final checks**

Run: `npm run build`

Expected: Vite reports `✓ built` with no errors.

Check at 390px and 1440px: all sections remain readable, no horizontal overflow appears, and every interactive item has a visible focus state.

- [ ] **Step 3: Commit**

```bash
git add README.md
git commit -m "docs: document portfolio setup"
```
