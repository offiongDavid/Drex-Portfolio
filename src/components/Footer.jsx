import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="border-t border-slate-900 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-14">
        <div className="grid md:grid-cols-3 gap-10 items-start">
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-slate-50">
              Drex<span className="text-blue-500">Dev</span>
            </h2>

            <p className="text-slate-400 mt-4 leading-7">
              Software Developer focused on building modern, responsive, and
              user-friendly web experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-slate-200 mb-4">
              Quick Links
            </h3>

            <ul className="space-y-3 text-slate-400">
              <li>
                <a href="#about" className="hover:text-blue-500 transition">
                  About
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-blue-500 transition">
                  Skills
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-blue-500 transition">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-blue-500 transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h3 className="text-lg font-semibold text-slate-200 mb-4">
              Connect
            </h3>

            <div className="flex items-center gap-5 text-xl">
              <a
                href="https://github.com/offiongDavid"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition"
              >
                <FaGithub />
              </a>

              <a
                href="www.linkedin.com/in/offiong-david-39933541b"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-blue-500 transition"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://x.com/DavidOffiong11"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-teal-400 transition"
              >
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm text-center md:text-left">
            © {new Date().getFullYear()} DrexDev. All rights reserved.
          </p>

          <p className="text-slate-600 text-sm">
         
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;