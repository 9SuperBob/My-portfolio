import {
  FiArrowUpRight,
  FiFacebook,
  FiGithub,
  FiInstagram,
  FiLinkedin,
} from "react-icons/fi";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="border-t border-[var(--rule)] px-5 py-12 md:px-10"
    >
      <div className="grid grid-cols-2">
        {/* <div className="">
          <p className="text-sm uppercase tracking-wider">
            Have a project in mind?
          </p>
          <a
            className="mt-3 inline-flex items-center gap-2 text-3xl underline underline-offset-4 md:text-5xl"
            href="mailto:hello@narin.design"
          >
            Let&apos;s talk <FiArrowUpRight aria-hidden="true" />
          </a>
          <div className="mt-12 flex flex-wrap justify-between gap-4 text-sm">
            <span>© 2026 Sirawit Nokaum</span>
          </div>
        </div> */}

        {/* <div className="">
          <p className="mt-3  items-center gap-2 text-3xl  md:text-5xl">
            Thank you for
          </p>
          <p className="mt-3 inline-flex items-center gap-2 text-3xl  md:text-5xl">
            viewing my portfolio.
          </p>
          <div className="mt-12 flex flex-wrap justify-between gap-4 text-sm"></div>
        </div> */}
      </div>
      <div className="my-12 flex min-h-64 flex-col items-center justify-center text-center text-[var(--ink)] sm:my-14">
        <p className="text-3xl sm:text-5xl">Thank you for visiting</p>
        <p className="mt-4 max-w-xl text-base sm:mt-6 sm:text-2xl">
          I appreciate your time and hope you enjoyed exploring my work.
        </p>
      </div>
      <div className="flex flex-col items-center gap-4 border-t border-[var(--rule)] pt-6 sm:flex-row sm:justify-between">
        <div className="order-2 sm:order-1">
          <a className="flex rounded-2xl border px-4 py-2.5 text-sm hover:bg-[#131417] hover:text-white" href="#top">Home</a>
        </div>
        <div className="order-1 flex justify-center gap-2 sm:order-2">
          <a
            aria-label="LinkedIn"
            href="https://www.linkedin.com/in/sirawit-nok-aum-176915207/"
            className="flex rounded-2xl border px-4 py-2.5 text-lg hover:bg-[#131417] hover:text-white"
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
        <div className="order-3 text-center text-sm">
          <span>© 2026 Sirawit Nokaum</span>
        </div>
      </div>
    </footer>
  );
}
