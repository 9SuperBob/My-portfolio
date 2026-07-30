import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ProjectIndex from "./components/ProjectIndex";
import Hero from "./components/Hero";
import About from "./components/About";
import Skillspage from "./components/Skillspage";

export default function App() {
  const [theme, setTheme] = useState(() =>
    window.localStorage.getItem("portfolio-theme") === "dark" ? "dark" : "light",
  );

  useEffect(() => {
    const isDark = theme === "dark";
    document.documentElement.classList.toggle("dark", isDark);
    window.localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((value) => (value === "dark" ? "light" : "dark"));
  };

  return (
    <main
      id="top"
      className="bg-[var(--surface)] pt-[var(--navbar-height)] text-[var(--ink)] transition-colors duration-200"
    >
      <Navbar
        theme={theme}
        onToggleTheme={toggleTheme}
      />
      <Hero />
      <About />
      <Skillspage/>
      <ProjectIndex theme={theme} />
      <Footer />
    </main>
  );
}
