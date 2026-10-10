
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FiArrowUpRight, FiArrowUp } from "react-icons/fi";

const Footer = () => {
  const quickLinks = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  const socials = [
    {
      label: "GitHub",
      href: "https://github.com/offiongDavid",
      icon: FaGithub,
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/offiong-david-39933541b",
      icon: FaLinkedin,
    },
    {
      label: "X",
      href: "https://x.com/DavidOffiong11",
      icon: FaTwitter,
    },
  ];

  return (
    <footer className="relative overflow-hidden border-t border-slate-800/80">
      <div className="mx-auto max-w-6xl px-5 py-12 md:px-8 md:py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_0.7fr_0.7fr] lg:gap-16">
          {/* Personal brand */}
          <div className="max-w-md">
            <a
              href="#home"
              aria-label="Offiong David - Back to home"
              className="inline-flex items-center gap-2 text-xl font-semibold tracking-tight text-white transition-colors hover:text-teal-400"
            >
              Offiong David
              <span className="h-1.5 w-1.5 rounded-full bg-teal-400" />
            </a>

            <p className="mt-4 max-w-sm text-sm leading-7 text-slate-400">
              Full-Stack Web Developer building thoughtful digital experiences,
              practical web applications, and solutions that solve real
              problems.
            </p>

            <a
              href="#contact"
              className="group mt-5 inline-flex items-center gap-2 text-sm font-medium text-teal-400 transition-colors hover:text-teal-300"
            >
              Have a project in mind?
              <FiArrowUpRight className="transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-200">
              Explore
            </h3>

            <nav aria-label="Footer navigation" className="mt-5">
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-slate-400 transition-colors duration-200 hover:text-teal-400"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Social links */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-200">
              Connect
            </h3>

            <div className="mt-5 flex flex-col items-start gap-4">
              {socials.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-3 text-sm text-slate-400 transition-colors duration-200 hover:text-white"
                  >
                    <Icon className="text-base transition-colors group-hover:text-teal-400" />
                    {social.label}
                    <FiArrowUpRight className="text-xs opacity-0 transition-opacity group-hover:opacity-100" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col gap-5 border-t border-slate-800/80 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-center text-xs leading-6 text-slate-500 sm:text-left">
            © {new Date().getFullYear()} Offiong David. All rights reserved.
          </p>

          <a
            href="#home"
            className="group inline-flex items-center justify-center gap-2 text-xs font-medium text-slate-400 transition-colors hover:text-teal-400 sm:justify-end"
          >
            Back to top
            <span className="flex h-7 w-7 items-center justify-center rounded-full border border-slate-800 transition-all duration-200 group-hover:-translate-y-1 group-hover:border-teal-400/40 group-hover:text-teal-400">
              <FiArrowUp />
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
