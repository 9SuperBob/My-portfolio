import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";

import johannes1 from "../picture/johannes vermeer1.png";
import mentel_img from "../picture/mental.png";
import Stynre from "../picture/Stynre.png";

const projects = [
  {
    number: "01",
    title: "Johannes Vermeer",
    type: "Gallery and History Website",
    year: "2024",
    image: johannes1,
    description:
      "Built a responsive website to showcase the paintings and biography of Johannes Vermeer. Organized the website with multiple pages for artwork, biography, and gallery content. Designed a clean and easy-to-use interface using HTML and CSS. Applied responsive layouts to provide a consistent experience on desktop and mobile devices.",
    linkproject: "https://9superbob.github.io/johannes-vermeer/",
    teckstack: "HTML,CSS",
    linkgit: "https://github.com/9SuperBob/johannes-vermeer",
  },
  {
    number: "02",
    title: "Mental Health",
    type: "Teen Mental Health Website",
    year: "2025",
    image: mentel_img,
    description:
      "Built a responsive mental health website with self-assessment, educational content, and mental wellness resources. Created a simple and user-friendly interface to help users access mental health information and self-care guidance. Used React Router for smooth navigation between different pages and organized the application with reusable React components. Designed responsive layouts with Tailwind CSS to provide a consistent experience on desktop and mobile devices.",
    location: "Bangkok, Thailand",
    linkproject: "https://9superbob.github.io/Mental_Health-66/",
    teckstack: "HTML, Javascript, Bootstrap 5, CSS ",
    linkgit: "https://github.com/9SuperBob/Mental_Health-66",
  },
  {
    number: "03",
    title: "Stynra Fashion Store",
    type: "E Commerce Website",
    year: "2026",
    image: Stynre,
    description:
      "Built a responsive fashion e-commerce platform featuring product catalog, category filtering, search, product details, and shopping cart. Managed global cart state using Context API, supporting add, remove, quantity updates, and real-time total price calculation. Created reusable UI components and responsive layouts with Tailwind CSS, ensuring a consistent user experience across devices. Integrated REST API for product data retrieval and Used client-side routing for smooth navigation throughout the application.",
    linkproject: "https://9superbob.github.io/stynra-fashion-store/#/",
    teckstack: "React, Vite, NodeJS, Javascript, Tailwind CSS, Vibe Code",
    linkgit: "https://github.com/9SuperBob/stynra-fashion-store",
  },
  {
    number: "04",
    title: "My portfolio",
    type: "Portfolio Website",
    year: "2026",
    image:
      "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&w=1200&q=85",
    description:
      "--------------------------------------------------------------------------------------------",
    // linkproject:,
    teckstack: "React, Vite, NodeJS, Javascript, Tailwind CSS,  ",
  },
];

export default function ProjectIndex({ theme }) {
  const reduceMotion = useReducedMotion();
  const palette =
    theme === "dark"
      ? { surface: "#131417", ink: "#ffffff" }
      : { surface: "#ffffff", ink: "#131417" };
  const [activeProject, setActiveProject] = useState(null);
  const [hoveredProject, setHoveredProject] = useState(null);
  const [openProject, setOpenProject] = useState(null);
  const selectedProject = projects.find(
    (project) => project.number === activeProject,
  );
  const transition = reduceMotion
    ? { duration: 0 }
    : { duration: 0.28, ease: "easeOut" };

  return (
    <section
      id="work"
      className="border-t border-[var(--rule)] px-5 py-12 sm:py-16 md:px-10 md:py-20"
      aria-label="Selected work"
    >
      <div className="mb-10 flex items-baseline justify-between gap-4">
        <p className="text-sm uppercase tracking-wider">My Projects</p>
      </div>

      <div className="lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(18rem,0.7fr)] lg:gap-10">
        <div className="min-w-0 border-[var(--rule)]">
          {projects.map((project) => {
            const isHovered = hoveredProject === project.number;
            const isOpen = openProject === project.number;
            const rowClassName =
              "group grid w-full gap-x-4 border-t border-[var(--rule)] px-1 py-5 text-left first:border-t-0 sm:grid-cols-[3rem_minmax(0,1fr)_8rem] sm:items-baseline sm:px-3 lg:grid-cols-[4rem_minmax(0,1fr)_10rem_4rem]";

            return (
              <div key={project.number}>
                <motion.button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`project-${project.number}-details`}
                  onClick={() => {
                    if (isOpen) {
                      setActiveProject(null);
                      setOpenProject(null);
                      return;
                    }

                    setActiveProject(project.number);
                    setOpenProject(project.number);
                  }}
                  onMouseEnter={() => setHoveredProject(project.number)}
                  onMouseLeave={() => setHoveredProject(null)}
                  animate={{
                    backgroundColor: isHovered ? palette.ink : palette.surface,
                    color: isHovered ? palette.surface : palette.ink,
                  }}
                  transition={transition}
                  className={rowClassName}
                >
                  <span className="text-xs tabular-nums">{project.number}</span>
                  <span className="mt-2 text-2xl leading-none tracking-[-0.04em] sm:mt-0 sm:text-3xl lg:text-4xl">
                    {project.title}
                  </span>
                  <span className="mt-2 text-sm sm:mt-0 sm:text-right">
                    {project.type}
                  </span>
                  <span className="mt-1 flex items-center justify-between text-sm tabular-nums sm:col-start-3 sm:mt-0 sm:justify-end lg:col-start-auto lg:gap-4">
                    {project.year}
                    <span aria-hidden="true" className="text-lg leading-none">
                      {isOpen ? "−" : "+"}
                    </span>
                  </span>
                </motion.button>

                {isOpen && (
                  <motion.div
                    id={`project-${project.number}-details`}
                    initial={reduceMotion ? false : { height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    transition={transition}
                    className="overflow-hidden border-t border-[var(--rule)]"
                  >
                    <div className=" gap-8 px-1 py-8 md:grid-cols-3 md:px-3">
                      <div className="border-t border-[var(--rule)] pt-3 text-sm">
                        <div className="teckstack">
                          <p className="mb-3 text-2xl fontsize uppercase tracking-wider">
                            Tech Stack
                          </p>
                        </div>
                        <p className="pb-3 text-base leading-tight tracking-[-0.03em] sm:text-xl">
                          {project.teckstack}
                        </p>
                      </div>

                      <div className="description ">
                        <p className="border-t border-[var(--rule)] mb-3 text-2xl fontsize uppercase tracking-wider pt-3 ">
                          Description
                        </p>
                        <p className="pb-3 text-base leading-tight tracking-[-0.03em] sm:text-xl">
                          {project.description}
                        </p>
                      </div>

                    </div>
                  </motion.div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-8 block min-w-0 lg:mt-0" aria-live="polite">
          <motion.div
            animate={{
              opacity: selectedProject ? 1 : 0,
              y: selectedProject ? 0 : 12,
            }}
            transition={transition}
            className="overflow-hidden lg:sticky lg:top-24"
          >
            {selectedProject && (
              <>
                <motion.img
                  key={selectedProject.number}
                  src={selectedProject.image}
                  alt={selectedProject.alt}
                  initial={reduceMotion ? false : { opacity: 0, scale: 1.03 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={transition}
                  className="aspect-[4/2] w-full rounded-xl object-cover"
                />
                {selectedProject.number === "01" && (
                  <a
                    href={selectedProject.linkproject}
                    target="_blank"
                    rel="noreferrer"
                  className="mt-3 flex w-full justify-center border border-[var(--rule)] px-4 py-2 text-sm uppercase tracking-wider transition-colors hover:bg-[#131417] hover:text-white dark:hover:bg-white dark:hover:text-[#131417]"
                  >
                    View project
                  </a>
                )}
                {selectedProject.number === "01" && (
                  <a
                    href={selectedProject.linkgit}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 flex w-full justify-center border border-[var(--rule)] px-4 py-2 text-sm uppercase tracking-wider transition-colors hover:bg-[#131417] hover:text-white dark:hover:bg-white dark:hover:text-[#131417]"
                  >
                    View Code Project
                  </a>
                )}

                {selectedProject.number === "02" && (
                  <a
                    href={selectedProject.linkproject}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 flex w-full justify-center border border-[var(--rule)] px-4 py-2 text-sm uppercase tracking-wider transition-colors hover:bg-[#131417] hover:text-white dark:hover:bg-white dark:hover:text-[#131417]"
                  >
                    View Project
                  </a>
                )}
                {selectedProject.number === "02" && (
                  <a
                    href={selectedProject.linkgit}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 flex w-full justify-center border border-[var(--rule)] px-4 py-2 text-sm uppercase tracking-wider transition-colors hover:bg-[#131417] hover:text-white dark:hover:bg-white dark:hover:text-[#131417]"
                  >
                    View Code Project
                  </a>
                )}

                {selectedProject.number === "03" && (
                  <a
                    href={selectedProject.linkproject}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 flex w-full justify-center border border-[var(--rule)] px-4 py-2 text-sm uppercase tracking-wider transition-colors hover:bg-[#131417] hover:text-white dark:hover:bg-white dark:hover:text-[#131417]"
                  >
                    View Project
                  </a>
                )}
                {selectedProject.number === "03" && (
                  <a
                    href={selectedProject.linkgit}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 flex w-full justify-center border border-[var(--rule)] px-4 py-2 text-sm uppercase tracking-wider transition-colors hover:bg-[#131417] hover:text-white dark:hover:bg-white dark:hover:text-[#131417]"
                  >
                    View Code Project
                  </a>
                )}

                {selectedProject.number === "04" && (
                  <a
                    href={selectedProject.linkproject}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 flex w-full justify-center border border-[var(--rule)] px-4 py-2 text-sm uppercase tracking-wider transition-colors hover:bg-[#131417] hover:text-white dark:hover:bg-white dark:hover:text-[#131417]"
                  >
                    View Project
                  </a>
                )}
                {selectedProject.number === "04" && (
                  <a
                    href={selectedProject.linkgit}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 flex w-full justify-center border border-[var(--rule)] px-4 py-2 text-sm uppercase tracking-wider transition-colors hover:bg-[#131417] hover:text-white dark:hover:bg-white dark:hover:text-[#131417]"
                  >
                    View Code Project
                  </a>
                )}
              </>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
