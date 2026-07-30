import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const [styles, projects, icon] = await Promise.all([
  readFile(new URL("../src/index.css", import.meta.url), "utf8"),
  readFile(new URL("../src/components/ProjectIndex.jsx", import.meta.url), "utf8"),
  readFile(new URL("../src/picture/code-block-svgrepo-com.svg", import.meta.url), "utf8"),
]);

assert.match(styles, /--ink: #131417;/);
assert.match(styles, /--rule: #131417;/);
assert.match(styles, /--surface: #131417;/);
assert.match(projects, /surface: "#131417", ink: "#ffffff"/);
assert.match(projects, /surface: "#ffffff", ink: "#131417"/);
assert.match(icon, /fill="#131417"/);
assert.doesNotMatch(styles, /--(?:ink|rule|surface): #000;/);
assert.doesNotMatch(projects, /#000000/);
assert.doesNotMatch(icon, /#000000/);
assert.doesNotMatch(styles, /\bblack\b|#000(?:000)?\b/i);
assert.doesNotMatch(projects, /\bblack\b|#000(?:000)?\b/i);

for (const file of [
  "src/App.jsx",
  "src/components/About.jsx",
  "src/components/Footer.jsx",
  "src/components/Hero.jsx",
  "src/components/Navbar.jsx",
  "src/components/Skillspage.jsx",
]) {
  const source = await readFile(new URL(`../${file}`, import.meta.url), "utf8");
  assert.doesNotMatch(source, /\bblack\b|#000(?:000)?\b/i, file);
}

console.log("Theme black token uses #131417 while white remains unchanged.");
