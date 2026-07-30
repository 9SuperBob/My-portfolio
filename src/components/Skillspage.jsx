const skillGroups = {
  "Tech Skills": ["HTML", "CSS", "React", "Javascript", "MySQL", "Python", "Tailwind CSS", "Bootstrap 5"],
  Tools: ["Figma", "Canva", "GitHub", "Git", "Codex", "VS Code", "VS Code Copilot"],
};

function Skillspage() {
  return (
    <section id="skillpage" className="border-t border-[var(--rule)] px-5 py-12 md:px-10">
      <p className="mb-4 text-center text-2xl sm:text-3xl">Skills &amp; Tools</p>
      <p className="text-center text-sm sm:text-base">Technologies I have studied and applied in my work.</p>

      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:justify-center">
        {Object.entries(skillGroups).map(([title, skills]) => (
          <div key={title} className="w-full border p-4 sm:max-w-sm sm:p-6">
            <h2 className="mb-3 text-xl font-semibold leading-8 tracking-tight sm:text-2xl">{title}</h2>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span key={skill} className="border px-2 py-1 text-sm">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skillspage;
