import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const files = await Promise.all(
  [
    "src/index.css",
    "src/components/Navbar.jsx",
    "src/components/About.jsx",
    "src/components/Skillspage.jsx",
    "src/components/ProjectIndex.jsx",
    "src/components/Footer.jsx",
  ].map((file) => readFile(new URL(`../${file}`, import.meta.url), "utf8")),
);

const [styles, navbar, about, skills, projects, footer] = files;

assert.match(styles, /overflow-x:\s*hidden/, "The page must prevent horizontal overflow.");
assert.match(navbar, /md:hidden/, "Navigation must include a mobile menu control.");
assert.match(navbar, /md:flex-row/, "Navigation links must return to a horizontal layout on wider screens.");
assert.match(about, /grid-cols-1[\s\S]*?sm:grid-cols-2/, "About cards must stack before small screens.");
assert.doesNotMatch(about, /\bmx-20\b/, "About content must not use a fixed wide mobile margin.");
assert.match(skills, /flex-col[\s\S]*?sm:flex-row/, "Skill panels must stack on narrow screens.");
assert.doesNotMatch(projects, /hidden md:block/, "Project previews must remain available on narrow screens.");
assert.match(projects, /lg:grid-cols/, "Projects must use a larger-screen two-column layout.");
assert.match(footer, /flex-col[\s\S]*?sm:flex-row/, "Footer controls must stack on narrow screens.");
