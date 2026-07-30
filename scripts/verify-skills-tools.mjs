import { readFileSync } from "node:fs";

const skillsSource = readFileSync(
  new URL("../src/components/SkillsTools.jsx", import.meta.url),
  "utf8",
);
const appSource = readFileSync(
  new URL("../src/App.jsx", import.meta.url),
  "utf8",
);
const stylesSource = readFileSync(
  new URL("../src/index.css", import.meta.url),
  "utf8",
);

const requiredSkills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Tailwind CSS",
  "GitHub",
  "Figma",
  "VS Code",
  "Vite",
];

for (const label of requiredSkills) {
  if (!skillsSource.includes(label)) {
    throw new Error(`Missing: ${label}`);
  }
}

const carouselRequirements = [
  "const skills = [",
  'className="skills-carousel-viewport"',
  'className="skills-carousel-track"',
  'className="skills-carousel-pill"',
  '<SkillsList />',
  '<SkillsList ariaHidden />',
  'aria-hidden={ariaHidden || undefined}',
];

for (const requirement of carouselRequirements) {
  if (!skillsSource.includes(requirement)) {
    throw new Error(`Missing carousel requirement: ${requirement}`);
  }
}

const carouselStyleRequirements = [
  "@keyframes skills-carousel-scroll",
  ".skills-carousel-track",
  ".skills-carousel-pill",
  "animation: skills-carousel-scroll 30s linear infinite",
  ".skills-carousel-viewport",
];

for (const requirement of carouselStyleRequirements) {
  if (!stylesSource.includes(requirement)) {
    throw new Error(`Missing carousel style: ${requirement}`);
  }
}

if (!stylesSource.includes("animation: skills-carousel-scroll 30s linear infinite !important")) {
  throw new Error("Skills carousel must keep moving when reduced motion is enabled");
}

if (stylesSource.includes(".skills-carousel-track {\n    animation: none;")) {
  throw new Error("Skills carousel must not disable its animation");
}

if (!appSource.includes('import SkillsTools from "./components/SkillsTools"')) {
  throw new Error("App must import SkillsTools");
}

if (!/<SkillsTools\s*\/>/.test(appSource)) {
  throw new Error("App must render SkillsTools");
}
