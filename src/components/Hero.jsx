
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

import { HiArrowDown } from "react-icons/hi";
import { FiDownload, FiArrowUpRight } from "react-icons/fi";
import { motion } from "framer-motion";
import img from "../assets/Pic.jpeg"

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center
        overflow-hidden px-5 pb-24 pt-28 sm:px-8
        lg:px-12 lg:pb-28"
    >
      {/* Keep the existing background glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-0
          h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[140px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-20
          -right-20 h-[400px] w-[400px] rounded-full
          bg-teal-500/10 blur-[120px]"
      />

      <div
        className="relative z-10 mx-auto grid w-full
          max-w-7xl items-center gap-12
          lg:grid-cols-[1.1fr_0.9fr] lg:gap-8"
      >
        {/* LEFT: INTRODUCTION */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-10"
        >
          <div
            className="mb-7 inline-flex items-center gap-3
              border border-slate-800 px-3.5 py-2
              text-xs font-medium text-slate-300 sm:text-sm"
          >
            <span className="h-2 w-2 rounded-full bg-teal-400" />
            Full-Stack Web Developer
          </div>

          <h1
            className="max-w-3xl text-4xl font-semibold
              leading-[1.12] tracking-[-0.04em]
              text-white sm:text-5xl md:text-6xl
              lg:text-7xl"
          >
            I build web applications
            <span className="mt-2 block text-blue-400">
              from idea to implementation.
            </span>
          </h1>

          <p
            className="mt-6 max-w-xl text-base leading-8
              text-slate-400 sm:text-lg"
          >
            I’m David, a Computer Science graduate who builds
            responsive interfaces, backend services, and
            data-driven web applications using modern web
            technologies.
          </p>

          {/* ACTIONS */}
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center
                justify-center gap-3 bg-blue-500 px-6 py-3.5
                text-sm font-semibold text-white
                transition-colors hover:bg-blue-600"
            >
              View my projects
              <FiArrowUpRight
                className="text-lg transition-transform
                  group-hover:translate-x-0.5
                  group-hover:-translate-y-0.5"
              />
            </a>

            <a
              href="https://drive.google.com/file/d/1b9fi74WMmReP1VlNR_ZvVEhSf3SUdrQj/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center
                gap-2 border border-slate-700 px-6 py-3.5
                text-sm font-semibold text-slate-200
                transition-colors hover:border-teal-400
                hover:text-teal-400"
            >
              <FiDownload className="text-base" />
              Resume
            </a>
          </div>

          {/* SOCIAL LINKS */}
          <div className="mt-10 flex items-center gap-5">
            <span
              className="mr-1 text-xs font-medium uppercase
                tracking-[0.16em] text-slate-500"
            >
              Find me on
            </span>

            <a
              href="https://github.com/offiongDavid"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-xl text-slate-400
                transition-colors hover:text-white"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/offiong-david-39933541b"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-xl text-slate-400
                transition-colors hover:text-blue-400"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://x.com/DavidOffiong11"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X"
              className="text-xl text-slate-400
                transition-colors hover:text-sky-400"
            >
              <FaTwitter />
            </a>
          </div>
        </motion.div>

        {/* RIGHT: TRANSPARENT PORTRAIT */}

        {/* RIGHT: ANIMATED ORGANIC PORTRAIT */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, x: 30 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
          className="relative mx-auto flex w-full max-w-lg items-center
    justify-center lg:justify-end"
        >
          {/* Ambient glow behind the portrait */}
          <motion.div
            aria-hidden="true"
            animate={{
              scale: [1, 1.12, 1],
              opacity: [0.35, 0.6, 0.35],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute left-1/2 top-1/2 h-64 w-64
      -translate-x-1/2 -translate-y-1/2 rounded-full
      bg-blue-500/20 blur-[90px] sm:h-80 sm:w-80"
          />

          {/* Rotating decorative ring */}
          <motion.div
            aria-hidden="true"
            animate={{ rotate: 360 }}
            transition={{
              duration: 28,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute left-1/2 top-1/2 aspect-square
      w-[82%] -translate-x-1/2 -translate-y-1/2
      rounded-full border border-dashed border-teal-400/30"
          >
            {/* Accent dot on the orbit */}
            <span className="absolute left-[12%] top-[15%] h-3 w-3
      rounded-full bg-teal-400 shadow-[0_0_18px_rgba(45,212,191,0.8)]" />
          </motion.div>

          {/* Second subtle orbit */}
          <motion.div
            aria-hidden="true"
            animate={{ rotate: -360 }}
            transition={{
              duration: 36,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute left-1/2 top-1/2 aspect-square
      w-[94%] -translate-x-1/2 -translate-y-1/2
      rounded-full border border-blue-400/15"
          />

          {/* Organic image shape */}
          <motion.div
            animate={{ y: [0, -9, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative z-10 w-[78%] max-w-[370px]
      overflow-hidden border border-white/10
      bg-gradient-to-br from-teal-400/20
      via-blue-500/10 to-slate-950
      shadow-[0_0_70px_rgba(45,212,191,0.10)]"
            style={{
              aspectRatio: "0.82",
              borderRadius: "42% 58% 57% 43% / 36% 39% 61% 64%",
            }}
          >
            <img
              src={img}
              alt="David Offiong, Full-Stack Web Developer"
              className="absolute inset-0 h-full w-full
        object-cover object-center"
            />

            {/* Subtle tint to blend the photo with your theme */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0
        bg-gradient-to-t from-slate-950/35
        via-transparent to-teal-300/5"
            />
          </motion.div>

          {/* Small decorative accent */}
          <motion.div
            aria-hidden="true"
            animate={{ y: [0, -8, 0], rotate: [0, 8, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-[12%] right-[5%] z-20
      h-12 w-12 rounded-2xl border border-teal-400/30
      bg-slate-900/80 shadow-lg backdrop-blur-md
      sm:right-[2%]"
          >
            <span className="flex h-full items-center justify-center
      text-xl font-bold text-teal-400">
              {"</>"}
            </span>
          </motion.div>

          {/* Small glowing accent */}
          <motion.span
            aria-hidden="true"
            animate={{ scale: [1, 1.4, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute right-[15%] top-[12%] z-20
      h-3 w-3 rounded-full bg-blue-400
      shadow-[0_0_20px_rgba(96,165,250,0.8)]"
          />
        </motion.div>

      </div>

      {/* SCROLL INDICATOR */}
      <a
        href="#about"
        className="absolute bottom-6 left-1/2 hidden
          -translate-x-1/2 flex-col items-center gap-2
          text-slate-500 transition-colors
          hover:text-white md:flex"
      >
        <span className="text-[10px] uppercase tracking-[0.2em]">
          Scroll to explore
        </span>
        <HiArrowDown className="animate-bounce text-lg" />
      </a>
    </section>
  );
};

export default Hero;
