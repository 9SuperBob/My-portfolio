import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const source = await readFile(new URL("../src/components/ProjectIndex.jsx", import.meta.url), "utf8");

assert.match(
  source,
  /<span className="mt-4 text-sm md:mt-0 md:text-right">\s*\{project\.type\}\s*<\/span>/,
  "Project type labels must align to the right on medium and larger screens.",
);

assert.match(
  source,
  /const\s*\[openProject,\s*setOpenProject\]\s*=\s*useState\(null\)/,
  "The index must track the one project whose details are open.",
);
assert.match(source, /aria-expanded=\{isOpen\}/, "Every project trigger must expose its expanded state.");
assert.match(source, /aria-controls=\{`project-\$\{project\.number\}-details`\}/, "Every trigger must control its own details region.");
assert.match(source, /id=\{`project-\$\{project\.number\}-details`\}/, "Every details region must have a matching id.");
const detailsSource = source.match(/<motion\.div[\s\S]*?id=\{`project-\$\{project\.number\}-details`\}[\s\S]*?<\/motion\.div>/)?.[0] ?? '';
assert.notEqual(detailsSource, '', "A reusable project details region must exist.");
const linkProjectIndex = detailsSource.indexOf("Link Project");
const johannesPreviewIndex = detailsSource.indexOf('project.number === "01"');

assert.ok(linkProjectIndex >= 0, "The details region must include Link Project.");
assert.ok(
  johannesPreviewIndex > linkProjectIndex,
  "Johannes preview must be rendered after Link Project.",
);
assert.match(
  detailsSource,
  /<motion\.img[\s\S]*?src=\{project\.image\}[\s\S]*?alt="Preview of Johannes Vermeer project"/,
  "The Johannes details region must render its project image with descriptive alt text.",
);
assert.match(
  source,
  /onClick=\{\(\) => \{[\s\S]*?setActiveProject\(project\.number\);[\s\S]*?setOpenProject/,
  "Clicking a project must select its persistent preview before toggling its details.",
);
assert.doesNotMatch(
  source,
  /onMouseEnter=\{\(\) => setActiveProject\(project\.number\)\}/,
  "Hovering a project must not change the preview.",
);
assert.match(
  source,
  /if \(isOpen\) \{[\s\S]*?setActiveProject\(null\);[\s\S]*?setOpenProject\(null\);/,
  "Clicking an open project must clear its persistent preview and details.",
);
assert.match(
  source,
  /const\s*\[hoveredProject,\s*setHoveredProject\]\s*=\s*useState\(null\)/,
  "The index must track which project row is hovered.",
);
assert.match(
  source,
  /onMouseEnter=\{\(\) => setHoveredProject\(project\.number\)\}/,
  "Hovering a project row must activate its visual highlight.",
);
assert.match(
  source,
  /onMouseLeave=\{\(\) => setHoveredProject\(null\)\}/,
  "Leaving a project row must clear its visual highlight.",
);
assert.match(
  source,
  /backgroundColor: isHovered \? palette\.ink : palette\.surface/,
  "The row background must use the active theme palette while hovered.",
);
