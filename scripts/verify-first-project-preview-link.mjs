import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const source = await readFile(
  new URL("../src/components/ProjectIndex.jsx", import.meta.url),
  "utf8",
);

assert.match(
  source,
  /selectedProject\.number === "01"/,
  "Only the first project must receive a preview action.",
);
assert.match(
  source,
  /href=\{selectedProject\.linkproject\}/,
  "The preview action must point to the selected project's live URL.",
);
assert.match(
  source,
  /target="_blank"[\s\S]*?rel="noreferrer"/,
  "The live project must open safely in a new tab.",
);

const imageIndex = source.indexOf("src={selectedProject.image}");
const actionIndex = source.indexOf('selectedProject.number === "01"');
assert.ok(imageIndex >= 0 && actionIndex > imageIndex, "The action must appear below the preview image.");
