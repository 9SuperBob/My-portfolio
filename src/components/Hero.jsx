
import React from "react";
import { motion, useReducedMotion } from "motion/react";

function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <div>
      <motion.section
        initial={reduceMotion ? false : { opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55 }}
        className="flex min-h-[calc(100svh-var(--navbar-height))] items-center px-5 py-12 sm:px-8 md:px-10 md:py-20"
      >
        <div className="flex w-full -translate-y-4 flex-col items-center justify-center text-center md:-translate-y-8">
          <p className="text-xs uppercase tracking-wider sm:text-sm">
            Intern Front-End developer — Bangkok, Thailand
          </p>
          <h1 className="mt-12 max-w-max text-[clamp(3.5rem,18vw,8rem)] font-medium leading-[0.9] tracking-[-0.06em] md:mt-16">
            Sirawit
            <br />
            Nokaum
          </h1>
          <p className="mt-8 max-w-md text-sm sm:text-lg">
            Information Technology Student | Frontend Developer | Aspiring
          </p>
          <a
            href="#about"
            className="mt-12 inline-flex border border-[var(--rule)] px-5 py-3 text-sm uppercase tracking-wider transition-colors hover:bg-[#131417] hover:text-white sm:mt-20 dark:border-white dark:hover:bg-white dark:hover:text-[#131417]"
          >
            View more
          </a>
        </div>
      </motion.section>
    </div>
  );
}

export default Hero;
