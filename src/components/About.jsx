
import {
  FaCode,
  FaServer,
  FaDatabase,
  FaArrowRight,
  FaReact,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";
import { SiExpress, SiMongodb, SiTailwindcss } from "react-icons/si";
import { motion } from "framer-motion";

const About = () => {
  const technologies = [
    { name: "React", icon: <FaReact /> },
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "Express", icon: <SiExpress /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    { name: "Git", icon: <FaGitAlt /> },
  ];

  const capabilities = [
    {
      number: "01",
      icon: <FaCode />,
      title: "Building the interface",
      description:
        "I turn ideas and requirements into responsive interfaces using React and modern CSS. I focus on reusable components, clear layouts, and interactions that make sense to the people using the application.",
      tags: ["React", "JavaScript", "Responsive UI"],
    },
    {
      number: "02",
      icon: <FaServer />,
      title: "Making the application work",
      description:
        "Beyond the interface, I work with Node.js and Express to build APIs, handle application logic, manage authentication, and connect the different parts of a web application.",
      tags: ["Node.js", "Express", "REST APIs"],
    },
    {
      number: "03",
      icon: <FaDatabase />,
      title: "Working with data",
      description:
        "I build data-driven features that connect the application to its database. I pay attention to how information is structured, validated, stored, and retrieved so the overall workflow remains understandable.",
      tags: ["MongoDB", "Mongoose", "Data Handling"],
    },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="about"
      className="relative overflow-hidden border-t border-slate-200
        bg-[#F8F6F1] px-5 py-24 text-[#0B1C39]
        sm:px-8 sm:py-28 lg:px-12 lg:py-32"
    >
      {/* Subtle decorative accent */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-20
          h-80 w-80 rounded-full bg-teal-500/[0.07] blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl">
        {/* SECTION INTRODUCTION */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65 }}
          className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]
            lg:items-end lg:gap-16"
        >
          <div>
            <div className="mb-7 flex items-center gap-3">
              <span className="h-px w-10 bg-teal-700" />
              <p
                className="text-xs font-bold uppercase
                  tracking-[0.22em] text-teal-800"
              >
                A little about my work
              </p>
            </div>

            <h2
              className="max-w-3xl text-4xl font-semibold
                leading-[1.12] tracking-[-0.045em]
                sm:text-5xl lg:text-6xl"
            >
              I build the systems
              <span className="block text-teal-700">
                behind the experience.
              </span>
            </h2>
          </div>

          <div className="max-w-xl lg:justify-self-end">
            <p className="text-base leading-8 text-slate-600 sm:text-lg">
              I’m a Full-Stack Web Developer with a B.Sc. in
              Computer Science. I enjoy taking an idea from its
              first interface to the logic and data that make it
              work as a complete application.
            </p>

            <p className="mt-4 text-base leading-8 text-slate-600">
              My approach is practical: understand the problem,
              build the right features, and make sure the different
              parts of the application work together. I care about
              the details users notice and the structure developers
              have to maintain.
            </p>
          </div>
        </motion.div>

        {/* FULL-STACK WORKFLOW */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-16 grid overflow-hidden border
            border-slate-200 bg-white sm:grid-cols-3"
        >
          {capabilities.map((item, index) => (
            <motion.article
              key={item.number}
              whileHover={{ backgroundColor: "#F1F8F6" }}
              transition={{ duration: 0.2 }}
              className={`group p-6 sm:p-7 lg:p-9 ${
                index !== 0
                  ? "border-t border-slate-200 sm:border-l sm:border-t-0"
                  : ""
              }`}
            >
              <div className="mb-9 flex items-center justify-between">
                <span className="text-sm font-semibold text-teal-800">
                  {item.number}
                </span>

                <span
                  className="flex h-11 w-11 items-center
                    justify-center bg-[#E5F2EF] text-lg
                    text-teal-800 transition-colors
                    group-hover:bg-[#0B1C39] group-hover:text-white"
                >
                  {item.icon}
                </span>
              </div>

              <h3 className="text-xl font-semibold tracking-tight">
                {item.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                {item.description}
              </p>

              <div className="mt-7 flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="border border-slate-200 px-2.5
                      py-1.5 text-xs font-medium text-slate-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* TECHNOLOGY STRIP */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mt-20 border-y border-slate-200 py-8"
        >
          <div className="grid gap-6 lg:grid-cols-[0.7fr_1.3fr]
            lg:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em]
                text-teal-800">
                Tools I work with
              </p>

              <h3 className="mt-2 text-xl font-semibold">
                My everyday toolkit
              </h3>
            </div>

            <div className="flex flex-wrap gap-3">
              {technologies.map((tech) => (
                <div
                  key={tech.name}
                  className="flex items-center gap-2.5 border
                    border-slate-200 bg-white px-3.5 py-3
                    text-sm font-medium text-slate-700
                    transition-colors hover:border-teal-700
                    hover:text-teal-800"
                >
                  <span className="text-lg text-teal-800">
                    {tech.icon}
                  </span>
                  {tech.name}
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CLOSING STATEMENT */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mt-16 flex flex-col gap-5
            sm:flex-row sm:items-center sm:justify-between"
        >
          <div>
            <p className="text-lg font-medium tracking-tight sm:text-xl">
              Good software is more than a working interface.
            </p>
            <p className="mt-2 text-sm leading-7 text-slate-600">
              It is how the design, logic, and data come together
              to solve a real problem.
            </p>
          </div>

          <a
            href="#projects"
            className="group inline-flex w-fit shrink-0
              items-center gap-3 border-b-2 border-teal-700
              pb-2 text-sm font-semibold text-[#0B1C39]
              transition-colors hover:text-teal-800"
          >
            Explore my projects
            <FaArrowRight
              className="transition-transform
                group-hover:translate-x-1"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
