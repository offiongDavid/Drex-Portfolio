
import { useState, useEffect } from "react";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import { FiArrowUpRight } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";

const RESUME_URL =
  "https://drive.google.com/file/d/1b9fi74WMmReP1VlNR_ZvVEhSf3SUdrQj/view?usp=sharing";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
   { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
 

];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.href.slice(1)))
      .filter(Boolean);

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              b.intersectionRatio - a.intersectionRatio
          );

        if (visibleSections.length > 0) {
          setActiveSection(visibleSections[0].target.id);
        }
      },
      {
        root: null,
        rootMargin: "-20% 0px -60% 0px",
        threshold: [0, 0.1, 0.25, 0.5],
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  const handleNavClick = (event, href) => {
    event.preventDefault();
    closeMenu();

    const target = document.getElementById(href.slice(1));

    if (!target) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    window.history.pushState(null, "", href);

    target.scrollIntoView({
      behavior: reduceMotion ? "auto" : "smooth",
      block: "start",
    });

    setActiveSection(target.id);
  };

  const handleLogoClick = (event) => {
    event.preventDefault();
    closeMenu();

    const target = document.getElementById("home");

    if (target) {
      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      window.history.pushState(null, "", "#home");

      target.scrollIntoView({
        behavior: reduceMotion ? "auto" : "smooth",
        block: "start",
      });
    } else {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

      window.history.replaceState(
        null,
        "",
        window.location.pathname + window.location.search
      );
    }
  };

  return (
    <header className="fixed inset-x-0 top-3 z-50 px-3 sm:top-4 sm:px-5 md:px-8">
      <nav
        aria-label="Main navigation"
        className="mx-auto max-w-6xl"
      >
        {/* Main navbar */}
        <div
          className={`flex items-center justify-between rounded-2xl border px-4 py-3 transition-all duration-300 sm:px-6 ${
            isScrolled
              ? "border-slate-700/80 bg-slate-950/95 shadow-xl shadow-black/20 backdrop-blur-2xl"
              : "border-slate-800/80 bg-slate-950/75 shadow-lg shadow-black/10 backdrop-blur-xl"
          }`}
        >
          {/* Personal brand */}
          <a
            href="#home"
            onClick={handleLogoClick}
            aria-label="Offiong David, back to home"
            className="group flex shrink-0 items-center gap-2.5"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-teal-400/20 bg-teal-400/[0.08] text-sm font-bold text-teal-400 transition-all duration-300 group-hover:border-teal-400/50 group-hover:bg-teal-400/15">
              OD
            </span>

            <span className="flex flex-col leading-tight">
              <span className="text-sm font-semibold tracking-tight text-white sm:text-base">
                Offiong David
              </span>
              <span className="mt-1 text-[10px] uppercase tracking-[0.19em] text-slate-500">
                Full-Stack Developer
              </span>
            </span>
          </a>

          {/* Desktop navigation */}
          <ul className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => {
              const sectionId = item.href.slice(1);
              const isActive = activeSection === sectionId;

              return (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={(event) =>
                      handleNavClick(event, item.href)
                    }
                    aria-current={isActive ? "location" : undefined}
                    className={`relative block rounded-xl px-3.5 py-2.5 text-sm font-medium transition-colors duration-300 lg:px-4 ${
                      isActive
                        ? "text-teal-400"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    {item.label}

                    <span
                      className={`absolute bottom-1.5 left-1/2 h-0.5 -translate-x-1/2 rounded-full bg-teal-400 transition-all duration-300 ${
                        isActive
                          ? "w-5"
                          : "w-0"
                      }`}
                    />
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Desktop resume button */}
          <a
            href="https://drive.google.com/file/d/1CNHHfiTTN5NciGNqI5OBmauJCxa4J2vz/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="group hidden items-center gap-2 rounded-xl bg-teal-400 px-4 py-2.5 text-sm font-semibold text-slate-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-teal-300 md:inline-flex"
          >
            Resume
            <FiArrowUpRight className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>

          {/* Mobile menu toggle */}
          <button
            type="button"
            onClick={() => setIsOpen((previous) => !previous)}
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-800 text-xl text-slate-200 transition-all duration-300 hover:border-teal-400/40 hover:bg-slate-800 hover:text-teal-400 md:hidden"
          >
            {isOpen ? <HiX /> : <HiOutlineMenuAlt3 />}
          </button>
        </div>

        {/* Animated mobile menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              id="mobile-navigation"
              initial={{ opacity: 0, y: -8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="mt-3 overflow-hidden rounded-2xl border border-slate-800 bg-slate-950/98 p-4 shadow-2xl shadow-black/30 backdrop-blur-2xl md:hidden"
            >
              <ul className="space-y-1">
                {navItems.map((item, index) => {
                  const sectionId = item.href.slice(1);
                  const isActive = activeSection === sectionId;

                  return (
                    <motion.li
                      key={item.label}
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.2,
                        delay: index * 0.04,
                      }}
                    >
                      <a
                        href={item.href}
                        onClick={(event) =>
                          handleNavClick(event, item.href)
                        }
                        aria-current={
                          isActive ? "location" : undefined
                        }
                        className={`flex items-center justify-between rounded-xl px-4 py-3.5 text-sm font-medium transition-colors duration-200 ${
                          isActive
                            ? "bg-teal-400/[0.08] text-teal-400"
                            : "text-slate-300 hover:bg-slate-800/70 hover:text-white"
                        }`}
                      >
                        {item.label}

                        <span
                          className={`h-1.5 w-1.5 rounded-full transition-colors ${
                            isActive
                              ? "bg-teal-400"
                              : "bg-transparent"
                          }`}
                        />
                      </a>
                    </motion.li>
                  );
                })}
              </ul>

              <div className="mt-4 border-t border-slate-800 pt-4">
                <a
                  href="https://drive.google.com/file/d/1CNHHfiTTN5NciGNqI5OBmauJCxa4J2vz/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMenu}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-teal-400 px-5 py-3.5 text-sm font-semibold text-slate-950 transition-colors duration-300 hover:bg-teal-300"
                >
                  View Resume
                  <FiArrowUpRight />
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Navbar;
