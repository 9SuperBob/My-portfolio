import { useState } from "react";

export default function Navbar({ theme, onToggleTheme }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[var(--rule)] bg-[var(--surface)] px-5 py-4 text-[var(--ink)] md:px-10">
      <nav className="flex flex-wrap items-center gap-3" aria-label="Main navigation">
        <a href="#top" className="text-lg font-semibold tracking-tight">
          My portfolio
        </a>

        <div className="order-2 ml-auto flex items-center gap-2 md:order-3">
          <button
            type="button"
            onClick={onToggleTheme}
            aria-pressed={theme === "dark"}
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            className="border border-[var(--rule)] px-3 py-2 text-xs font-medium uppercase tracking-wider transition-colors hover:bg-[#131417] hover:text-white dark:border-white dark:hover:bg-white dark:hover:text-[#131417]"
          >
            {theme === "dark" ? "Light" : "Dark"}
          </button>
          <button
            type="button"
            onClick={() => setIsMenuOpen((value) => !value)}
            aria-expanded={isMenuOpen}
            aria-controls="primary-navigation"
            className="border border-[var(--rule)] px-3 py-2 text-xs font-medium uppercase tracking-wider md:hidden"
          >
            Menu
          </button>
        </div>

        <div
          id="primary-navigation"
          className={`${isMenuOpen ? "flex" : "hidden"} order-3 w-full flex-col gap-3 border-t border-[var(--rule)] pt-3 text-sm uppercase tracking-wider md:order-2 md:ml-auto md:flex md:w-auto md:flex-row md:items-center md:gap-4 md:border-0 md:pt-0`}
        >
          <a href="#top" onClick={() => setIsMenuOpen(false)}>Home</a>
          <a href="#about" onClick={() => setIsMenuOpen(false)}>About</a>
          <a href="#skillpage" onClick={() => setIsMenuOpen(false)}>Skills &amp; Tools</a>
          <a href="#work" onClick={() => setIsMenuOpen(false)}>My Projects</a>
          <a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a>
        </div>
      </nav>
    </header>
  );
}
