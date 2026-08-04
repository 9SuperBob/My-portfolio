import React from "react";
import { FiFacebook, FiGithub, FiLinkedin } from "react-icons/fi";
import CV from "../picture/CV.pdf"

function About() {
  return (
    <section id="about" className="border-t border-[var(--rule)] px-5 py-20 md:px-10">
      <div className="grid gap-10 lg:grid-cols-2 lg:divide-x lg:divide-[var(--rule)]">
        <div className="max-w-3xl space-y-6 text-base leading-relaxed lg:pr-10">
          <p className="text-2xl uppercase tracking-wider sm:text-3xl">About</p>
          <div></div>
          <p>A little bit about me </p>
          <p className=" text-base">
            I'm an Information Technology student currently seeking a Frontend
            Developer internship. I'm passionate about building responsive,
            user-friendly web applications and improving my skills with modern
            frontend technologies.
          </p>

          <p>
            I have experience developing web projects using React, JavaScript,
            Tailwind CSS, HTML, and CSS, focusing on clean, maintainable code
            and intuitive user interfaces. I enjoy turning ideas into
            functional, responsive websites.
          </p>
          <p>
            I'm always eager to learn new technologies, take on new challenges,
            and grow through real-world projects.
          </p>

          <div className="flex flex-wrap gap-2">


            <a className="rounded-lg border px-4 py-2.5 text-sm font-medium leading-5 hover:bg-[#131417] hover:text-white" href={CV}>Downlond CV</a>
            <a
              aria-label="LinkedIn"
              href="https://www.linkedin.com/in/sirawit-nok-aum-176915207/"
              className="flex rounded-lg border px-4 py-2.5 text-lg hover:bg-[#131417] hover:text-white"
            >
              <FiLinkedin aria-hidden="true" />
            </a>
            <a
              aria-label="Facbook"
              href="https://www.facebook.com/"
              className="flex rounded-lg border px-4 py-2.5 text-lg hover:bg-[#131417] hover:text-white"
            >
              <FiFacebook aria-hidden="true" />
            </a>
            <a
              aria-label="GitHub"
              href="https://github.com/9SuperBob"
              className="flex rounded-lg border px-4 py-2.5 text-lg hover:bg-[#131417] hover:text-white"
            >
              <FiGithub aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="lg:pl-10">
          <div>
            {/* <p className="flex justify-start text-3xl mb-4">Skills & Tools</p>
            <p className="flex justify-start text-base mb-10 ">
              Technologies I have studied and applied in my work.
            </p> */}

            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="border p-4 sm:p-6">
                <h5 className="mb-3 text-xl font-semibold leading-8 tracking-tight sm:text-2xl">
                  Live in
                </h5>
                <div className=" flex flex-wrap">
                  <p className="mt-2 border p-2">
                    Samutprakarn, Thailand
                  </p>
                </div>
              </div>

              <div className="border p-4 sm:p-6">
                <h5 className="mb-3 text-xl font-semibold leading-8 tracking-tight sm:text-2xl">
                  Education
                </h5>
                <div className=" flex flex-wrap">
                  <p className="mt-2 border p-2">
                    Information and Communication Technology (ICT)
                  </p>
                </div>
              </div>

              <div className="border p-4 sm:p-6">
                <h5 className="mb-3 text-xl font-semibold leading-8 tracking-tight sm:text-2xl">
                  Language
                </h5>
                <div className=" flex flex-wrap">
                  <p className="mt-2 border p-2">Thai - (Native)</p>
                  <p className="mt-2 border p-2">
                    English - (intermediate)
                  </p>
                </div>
              </div>

              <div className="border p-4 sm:p-6">
                <h5 className="mb-3 text-xl font-semibold leading-8 tracking-tight sm:text-2xl">
                  Core Competencies
                </h5>
                <div className=" flex flex-wrap">
                  <p className="mt-2 border p-2">Front-End Dev</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
