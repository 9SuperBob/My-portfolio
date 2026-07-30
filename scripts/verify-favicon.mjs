import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const html = await readFile(new URL("../index.html", import.meta.url), "utf8");

assert.match(
  html,
  /<link\s+rel="icon"\s+type="image\/svg\+xml"\s+href="\/src\/picture\/code-block-svgrepo-com\.svg"\s*\/>/,
  "The page must use code-block-svgrepo-com.svg as its Vite-served favicon.",
);
