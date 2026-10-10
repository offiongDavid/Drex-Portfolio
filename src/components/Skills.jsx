
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGitAlt,
  FaGithub,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiFirebase,
  SiMongodb,
  SiVite,
  SiTypescript,
  SiNextdotjs,
  SiRedux,
  SiExpress,
} from "react-icons/si";

import { motion } from "framer-motion";

const Skills = () => {
  const skillGroups = [
    {
      number: "01",
      title: "Frontend Development",
      description: "Building responsive, interactive user interfaces.",
      skills: [
        { name: "React", icon: <FaReact /> },
        { name: "Next.js", icon: <SiNextdotjs /> },
        { name: "JavaScript", icon: <FaJs /> },
        { name: "TypeScript", icon: <SiTypescript /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss /> },
        { name: "HTML5", icon: <FaHtml5 /> },
        { name: "CSS3", icon: <FaCss3Alt /> },
      ],
    },
    {
      number: "02",
      title: "Backend & Databases",
      description: "Handling application logic, APIs, and data.",
      skills: [
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "Express.js", icon: <SiExpress /> },
        { name: "MongoDB", icon: <SiMongodb /> },
        { name: "Firebase", icon: <SiFirebase /> },
      ],
    },
    {
      number: "03",
      title: "Development Tools",
      description: "Managing code, design, and development workflow.",
      skills: [
        { name: "Git", icon: <FaGitAlt /> },
        { name: "GitHub", icon: <FaGithub /> },
        { name: "Figma", icon: <FaFigma /> },
        { name: "Vite", icon: <SiVite /> },
      ],
    },
    {
      number: "04",
      title: "State Management",
      description: "Organising and managing application state.",
      skills: [
        { name: "Redux", icon: <SiRedux /> },
      ],
    },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 22 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="skills"
      className="relative overflow-hidden border-t border-slate-900
        px-5 py-24 sm:px-8 sm:py-28 lg:px-12 lg:py-32"
    >
      {/* Preserve the original background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 -top-40
          h-[450px] w-[450px] rounded-full bg-blue-500/10 blur-[140px]"
      />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* HEADER */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-14 grid gap-7 lg:grid-cols-[1fr_0.7fr]
            lg:items-end lg:gap-16"
        >
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-teal-400" />

              <p
                className="text-xs font-semibold uppercase
                  tracking-[0.22em] text-blue-400"
              >
                Technical Toolkit
              </p>
            </div>

            <h2
              className="max-w-2xl text-4xl font-semibold
                leading-[1.12] tracking-tight text-white
                sm:text-5xl lg:text-6xl"
            >
              The tools behind
              <span className="block text-teal-400">
                the things I build.
              </span>
            </h2>
          </div>

          <div className="max-w-xl lg:justify-self-end">
            <p className="text-base leading-8 text-slate-400 sm:text-lg">
              My toolkit covers the different parts of web development,
              from building the interface to working with server-side
              logic, databases, and development tools.
            </p>

            <p className="mt-3 text-sm leading-7 text-slate-500">
              Each tool serves a purpose in turning requirements into
              functional, maintainable applications.
            </p>
          </div>
        </motion.div>

        {/* TECHNOLOGY OVERVIEW */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 flex flex-wrap items-center gap-x-6
            gap-y-3 border-y border-slate-800 py-5"
        >
          <span className="text-xs font-semibold uppercase
            tracking-[0.16em] text-slate-500">
            Areas of focus
          </span>

          {["Frontend", "Backend", "Databases", "Workflow"].map(
            (area) => (
              <span
                key={area}
                className="flex items-center gap-2 text-sm
                  font-medium text-slate-300"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-teal-400" />
                {area}
              </span>
            )
          )}
        </motion.div>

        {/* SKILL GROUPS */}
        <div className="grid gap-5 sm:grid-cols-2 lg:gap-6">
          {skillGroups.map((group, index) => (
            <motion.article
              key={group.number}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.12 }}
              transition={{
                duration: 0.5,
                delay: index * 0.09,
              }}
              className="group relative border border-slate-800
                bg-slate-900/40 p-6 transition-colors duration-300
                hover:border-teal-500/40 hover:bg-slate-900/70
                sm:p-7 lg:p-8"
            >
              {/* Category heading */}
              <div className="mb-7 flex items-start gap-4">
                <span className="pt-1 text-sm font-medium
                  tracking-wider text-teal-400">
                  {group.number}
                </span>

                <div className="min-w-0 flex-1">
                  <h3 className="text-lg font-semibold
                    tracking-tight text-white sm:text-xl">
                    {group.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {group.description}
                  </p>
                </div>

                <span
                  aria-hidden="true"
                  className="mt-1 h-2 w-2 shrink-0 rounded-full
                    bg-slate-700 transition-colors
                    group-hover:bg-teal-400"
                />
              </div>

              {/* Technology list */}
              <div className="grid grid-cols-1 gap-2
                min-[420px]:grid-cols-2">
                {group.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex min-w-0 items-center gap-3
                      border border-slate-800/80 bg-slate-950/30
                      px-3 py-3 transition-all duration-200
                      hover:border-slate-700 hover:bg-slate-800/70"
                  >
                    <span
                      className="flex h-8 w-8 shrink-0 items-center
                        justify-center text-lg text-blue-400"
                    >
                      {skill.icon}
                    </span>

                    <span className="text-sm font-medium
                      text-slate-300">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.article>
          ))}
        </div>

        {/* CLOSING NOTE */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 flex flex-col gap-3 border-l-2
            border-teal-400/70 pl-5 sm:flex-row sm:items-center
            sm:justify-between sm:gap-8"
        >
          <p className="max-w-2xl text-sm leading-7 text-slate-400">
            Tools are only part of the process. Understanding the
            problem, choosing an appropriate approach, and writing
            code that can be maintained matter just as much.
          </p>

          <span className="shrink-0 text-xs font-medium
            uppercase tracking-[0.15em] text-teal-400">
            Always learning
          </span>
        </motion.div>

      </div>
    </section>
  );
};

export default Skills;
