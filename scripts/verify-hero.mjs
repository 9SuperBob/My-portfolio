import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const [heroSource, navbarSource, appSource, stylesSource] = await Promise.all([
  readFile(new URL("../src/components/Hero.jsx", import.meta.url), "utf8"),
  readFile(new URL("../src/components/Navbar.jsx", import.meta.url), "utf8"),
  readFile(new URL("../src/App.jsx", import.meta.url), "utf8"),
  readFile(new URL("../src/index.css", import.meta.url), "utf8"),
]);

assert.match(
  navbarSource,
  /fixed\s+inset-x-0\s+top-0\s+z-50/,
  "Navbar must stay fixed at the top of the viewport.",
);
assert.match(
  navbarSource,
  /bg-\[var\(--surface\)\]/,
  "Fixed Navbar must use the shared opaque theme background.",
);
assert.match(
  navbarSource,
  /text-\[var\(--ink\)\]/,
  "Fixed Navbar must use the shared theme text colour.",
);
assert.match(
  appSource,
  /pt-\[var\(--navbar-height\)\]/,
  "Main content must reserve space for the fixed Navbar.",
);

assert.match(
  heroSource,
  /import\s*\{\s*motion\s*,\s*useReducedMotion\s*\}\s*from\s*["']motion\/react["']/,
  "Hero must import its animation primitives from motion/react.",
);
assert.match(
  heroSource,
  /const\s+reduceMotion\s*=\s*useReducedMotion\(\)/,
  "Hero must initialize reduceMotion before rendering motion.section.",
);
assert.match(
  stylesSource,
  /--navbar-height:\s*4\.5rem/,
  "Shared styles must define the Navbar height used by Hero.",
);
assert.match(
  heroSource,
  /min-h-\[calc\(100svh-var\(--navbar-height\)\)\]/,
  "Hero must fill the viewport area beneath the Navbar.",
);
assert.ok(
  heroSource.includes("items-center"),
  "Hero must vertically center its content within the viewport.",
);
assert.ok(
  heroSource.includes("-translate-y-4") && heroSource.includes("md:-translate-y-8"),
  "Hero content must sit slightly above the vertical center.",
);
assert.ok(
  !heroSource.includes('className="ml-auto flex -translate-y-4'),
  "Hero content must not be pinned to the right edge.",
);
assert.ok(
  heroSource.includes('href="#about"') && heroSource.includes("View more"),
  "Hero must provide a button that scrolls to the About section.",
);
