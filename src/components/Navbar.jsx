import { useState } from "react";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-5 left-0 w-full z-50 px-4 md:px-8">
      <nav className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between px-6 md:px-8 py-4 rounded-2xl border border-slate-800 bg-slate-950/80 backdrop-blur-xl shadow-lg shadow-black/20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 to-teal-400 flex items-center justify-center text-white font-bold text-sm shadow-md">
              D
            </div>

            <div className="flex flex-col leading-none">
              <span className="text-slate-50 font-bold text-lg tracking-tight">
                DREX
              </span>
              <span className="text-slate-400 text-xs tracking-[0.2em] uppercase">
                Developer
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="text-sm font-medium text-slate-300 hover:text-white transition-all duration-300 relative group"
                >
                  {item.label}
                  <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-blue-500 transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <a
              href="https://drive.google.com/file/d/1CNHHfiTTN5NciGNqI5OBmauJCxa4J2vz/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl bg-blue-500 text-white text-sm font-medium hover:bg-blue-600 transition-all duration-300 shadow-md shadow-blue-500/20"
            >
              Resume
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-slate-100 text-2xl"
          >
            {isOpen ? <HiX /> : <HiOutlineMenuAlt3 />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-3 rounded-2xl border border-slate-800 bg-slate-900/95 backdrop-blur-xl p-6 shadow-xl">
            <ul className="flex flex-col gap-5">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block text-slate-300 hover:text-blue-500 transition-colors duration-300 font-medium"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6 w-full text-center px-5 py-3 rounded-xl bg-blue-500 text-white font-medium hover:bg-blue-600 transition-all duration-300"
            >
              Resume
            </a>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;