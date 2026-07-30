import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const [appSource, navbarSource, stylesSource, configSource, projectSource] =
  await Promise.all([
    readFile(new URL("../src/App.jsx", import.meta.url), "utf8"),
    readFile(new URL("../src/components/Navbar.jsx", import.meta.url), "utf8"),
    readFile(new URL("../src/index.css", import.meta.url), "utf8"),
    readFile(new URL("../tailwind.config.js", import.meta.url), "utf8"),
    readFile(new URL("../src/components/ProjectIndex.jsx", import.meta.url), "utf8"),
  ]);

assert.match(
  configSource,
  /darkMode:\s*["']class["']/,
  "Tailwind must use the root dark class as its dark-mode selector.",
);
assert.match(
  appSource,
  /localStorage\.getItem\(["']portfolio-theme["']\)/,
  "App must restore the saved theme preference.",
);
assert.match(
  appSource,
  /document\.documentElement\.classList\.toggle\(["']dark["']/,
  "App must synchronize the selected theme with the document root.",
);
assert.match(
  appSource,
  /localStorage\.setItem\(["']portfolio-theme["']/,
  "App must persist the selected theme preference.",
);
assert.match(
  navbarSource,
  /aria-pressed=\{theme === ["']dark["']\}/,
  "The theme control must expose its pressed state.",
);
assert.match(
  stylesSource,
  /--surface:\s*#fff/,
  "Shared styles must define a white surface for light mode.",
);
assert.match(
  stylesSource,
  /html\.dark\s*\{[\s\S]*--surface:\s*#131417/,
  "Shared styles must define #131417 as the dark-mode surface.",
);
assert.match(
  stylesSource,
  /background:\s*var\(--surface\)/,
  "The document body must use the shared surface colour.",
);
assert.match(
  stylesSource,
  /color:\s*var\(--ink\)/,
  "The document body must use the shared ink colour.",
);
assert.match(
  projectSource,
  /backgroundColor:\s*isHovered\s*\?\s*palette\.ink\s*:\s*palette\.surface/,
  "Project row backgrounds must use the shared monochrome palette.",
);
assert.match(
  stylesSource,
  /transition:\s*background-color 500ms ease-in-out,\s*color 500ms ease-in-out,\s*border-color 500ms ease-in-out,\s*outline-color 500ms ease-in-out !important/,
  "Theme colour changes must use the shared smooth transition.",
);
assert.doesNotMatch(
  appSource,
  /themeOverlay|pointer-events-none fixed inset-0 z-\[60\]|window\.setTimeout/,
  "Theme switching must not use a full-screen overlay or timed screen cover.",
);
