import { useState, useEffect } from "react";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.href.replace("#", ""));
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-5 left-0 w-full z-50 px-4 md:px-8">
      <nav className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between px-6 md:px-8 py-4 rounded-2xl border border-slate-800 bg-slate-950/80 backdrop-blur-xl shadow-lg shadow-black/20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <div className="flex flex-col leading-none">
              <span className="text-slate-50 font-bold text-lg tracking-tight">
                OFFIONG DAVID
              </span>
              <span className="text-slate-400 text-xs tracking-[0.2em] uppercase">
                Developer
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.replace("#", "");
              return (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className={`text-sm font-medium transition-all duration-300 relative group ${
                      isActive
                        ? "text-blue-400"
                        : "text-slate-300 hover:text-white"
                    }`}
                  >
                    {item.label}
                    <span
                      className={`absolute left-0 -bottom-1 h-[2px] bg-blue-500 transition-all duration-300 ${
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Desktop Right Side */}
          <div className="hidden md:flex items-center gap-4">
            <ThemeToggle />
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
          <div className="md:hidden flex items-center gap-3">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-100 text-2xl"
            >
              {isOpen ? <HiX /> : <HiOutlineMenuAlt3 />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-3 rounded-2xl border border-slate-800 bg-slate-900/95 backdrop-blur-xl p-6 shadow-xl">
            <ul className="flex flex-col gap-5">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.replace("#", "");
                return (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`block font-medium transition-colors duration-300 ${
                        isActive
                          ? "text-blue-400"
                          : "text-slate-300 hover:text-blue-500"
                      }`}
                    >
                      {item.label}
                    </a>
                  </li>
                );
              })}
            </ul>

            <a
              href="https://drive.google.com/file/d/1CNHHfiTTN5NciGNqI5OBmauJCxa4J2vz/view?usp=sharing"
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