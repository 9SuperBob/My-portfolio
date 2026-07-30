import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const source = await readFile(new URL("../src/components/About.jsx", import.meta.url), "utf8");

assert.match(
  source,
  /lg:grid-cols-2[^"]*lg:divide-x[^"]*lg:divide-\[var\(--rule\)\]/,
  "About must add a vertical theme-colour divider between the About and Skills & Tools columns on large screens.",
);

assert.match(
  source,
  /<div className="grid[^\"]*lg:grid-cols-2[^\"]*">[\s\S]*?About[\s\S]*?Live in/,
  "About must keep its responsive two-column layout with biography content on the left and profile details on the right.",
);
