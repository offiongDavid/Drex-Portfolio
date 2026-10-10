
import { useState } from "react";
import { FaGithub, FaArrowRight } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

import oilSpil from "../assets/oil-spill.jpg";
import disease from "../assets/disease.png";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const projects = [
    {
      title: "Elevator Portfolio Website",
      description:
        "A company website presenting elevator services, completed projects, and company information.",
      tech: ["React", "Tailwind CSS", "GSAP"],
      live: "https://your-live-link.com",
      code: "https://github.com/offiongDavid/MATO-Elevators",
      image:
        "https://ik.imagekit.io/u9vfp7lad/matoelevators%20.png",
      category: "Websites",
      number: "01",
    },
    {
      title: "Temple Schools Website",
      description:
        "A school website bringing together academic information, admissions, events, and school updates.",
      tech: ["React", "Tailwind CSS"],
      live: "https://www.templeschoolng.com/",
      code: "https://github.com/offiongDavid/Temple-School",
      image: "https://ik.imagekit.io/u9vfp7lad/templework.png",
      category: "Websites",
      number: "02",
    },
    {
      title: "Registration & Payment Platform",
      description:
        "A registration platform that connects user sign-up with online payments through Paystack.",
      tech: ["React", "Tailwind CSS", "Paystack"],
      live: "https://xovastudios.onrender.com/",
      code: "https://github.com/offiongDavid/Webinar_Url",
      image:
        "https://ik.imagekit.io/u9vfp7lad/Screenshot%202026-05-11%20175800_edited.png",
      category: "Fullstack",
      number: "03",
    },
    {
      title: "AI Plagiarism Detection Platform",
      description:
        "A text analysis application designed to help identify potentially copied or matching content.",
      tech: ["React", "AI", "Node.js"],
      live: "",
      code: "https://github.com/offiongDavid/plagiarismSite",
      image: "https://ik.imagekit.io/u9vfp7lad/project6.png",
      category: "AI / ML",
      number: "04",
    },
    {
      title: "AI Fake News Detector",
      description:
        "An application exploring how machine learning can help analyse news content for misleading claims.",
      tech: ["React", "Python", "Machine Learning"],
      live: "",
      code: "https://github.com/offiongDavid/FAKENEWS",
      image:
        "https://i.pinimg.com/736x/a9/11/c9/a911c93ca5afbfa5793eb13d88d79478.jpg",
      category: "AI / ML",
      number: "05",
    },
    {
      title: "Oil Spill Detection Platform",
      description:
        "An image-analysis project focused on identifying oil spillage in uploaded images.",
      tech: ["React", "Computer Vision", "AI"],
      live: "",
      code: "",
      image: oilSpil,
      category: "AI / ML",
      number: "06",
    },
    {
      title: "Logistics Company Website",
      description:
        "A logistics website showcasing delivery services, company information, and contact options.",
      tech: ["HTML", "CSS", "JavaScript"],
      live: "https://rapidityllc.com/Rapidity-logistics/index.html",
      code: "",
      image: "https://ik.imagekit.io/u9vfp7lad/logisticspage.png",
      category: "Websites",
      number: "07",
    },
    {
      title: "Weather Application",
      description:
        "A weather app that presents current conditions and forecasts using weather API data.",
      tech: ["React", "Tailwind CSS", "Weather API"],
      live: "",
      code: "",
      image:
        "https://i.pinimg.com/736x/c6/10/a6/c610a6e29045def98bf8ad75d33dfbe7.jpg",
      category: "Websites",
      number: "08",
    },
    {
      title: "Disease Prediction System",
      description:
        "A symptom-based disease prediction application combining rule-based logic with AI-assisted features.",
      tech: ["React", "Node.js", "MongoDB", "AI"],
      live: "http://disease-system-kxb2.vercel.app/",
      code: "https://github.com/offiongDavid/Disease-System",
      image: disease,
      category: "AI / ML",
      number: "09",
    },
  ];

  const filters = ["All", "Websites", "AI / ML", "Fullstack"];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter(
          (project) => project.category === activeFilter
        );

  return (
    <section
      id="projects"
      className="border-t border-slate-200 bg-white
        px-5 py-24 text-[#0B1C39] sm:px-8 sm:py-28
        lg:px-12 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">

        {/* SECTION HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
          className="mb-12 grid gap-6 lg:grid-cols-[1fr_0.7fr]
            lg:items-end lg:gap-12"
        >
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-teal-700" />
              <p className="text-xs font-semibold uppercase
                tracking-[0.22em] text-teal-800">
                Selected Work
              </p>
            </div>

            <h2 className="text-4xl font-semibold leading-tight
              tracking-[-0.04em] sm:text-5xl lg:text-6xl">
              Projects I've
              <span className="block text-teal-700">
                worked on.
              </span>
            </h2>
          </div>

          <p className="max-w-lg text-base leading-8 text-slate-600
            lg:justify-self-end sm:text-lg">
            A selection of websites and applications I've built,
            covering frontend development, full-stack features,
            and AI-focused projects.
          </p>
        </motion.div>

        {/* FILTERS */}
        <div className="mb-10 flex flex-wrap gap-2.5">
          {filters.map((filter) => {
            const isActive = activeFilter === filter;

            return (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                aria-pressed={isActive}
                className={`border px-4 py-2.5 text-sm font-medium
                  transition-colors duration-200 ${
                    isActive
                      ? "border-[#0B1C39] bg-[#0B1C39] text-white"
                      : "border-slate-200 bg-white text-slate-600 hover:border-teal-700 hover:text-teal-800"
                  }`}
              >
                {filter}
              </button>
            );
          })}
        </div>

        {/* PROJECT COUNT */}
        <div className="mb-6 flex items-center justify-between
          border-b border-slate-200 pb-4">
          <p className="text-sm text-slate-500">
            {activeFilter === "All" ? "All projects" : activeFilter}
          </p>

          <p className="text-xs font-medium tabular-nums text-slate-500">
            {String(filteredProjects.length).padStart(2, "0")} projects
          </p>
        </div>

        {/* PROJECT GRID */}
        <motion.div
          layout
          className="grid gap-x-6 gap-y-12 sm:grid-cols-2
            lg:grid-cols-3 lg:gap-x-7 lg:gap-y-14"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.article
                layout
                key={project.number}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.25 }}
                className="group min-w-0"
              >
                {/* PROJECT IMAGE */}
                <div className="relative mb-5 aspect-[5/3]
                  overflow-hidden border border-slate-200
                  bg-slate-100">
                  <img
                    src={project.image}
                    alt={`${project.title} preview`}
                    loading="lazy"
                    className="h-full w-full object-cover
                      object-center transition-transform
                      duration-500 group-hover:scale-[1.035]"
                  />

                  <span className="absolute left-3 top-3
                    bg-white/95 px-2.5 py-1.5 text-[11px]
                    font-semibold tracking-wide text-[#0B1C39]">
                    {project.category}
                  </span>
                </div>

                {/* TITLE AND DESCRIPTION */}
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-lg font-semibold
                    leading-snug tracking-tight
                    transition-colors group-hover:text-teal-800">
                    {project.title}
                  </h3>

                  <span className="pt-1 text-xs tabular-nums
                    text-slate-400">
                    {project.number}
                  </span>
                </div>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {project.description}
                </p>

                {/* TECHNOLOGIES */}
                <div className="mt-4 flex flex-wrap gap-x-2
                  gap-y-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="border border-slate-200
                        px-2.5 py-1 text-[11px]
                        font-medium text-slate-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* PROJECT LINKS */}
                <div className="mt-5 flex items-center gap-5
                  border-t border-slate-200 pt-4">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2
                        text-sm font-semibold text-teal-800
                        transition-colors hover:text-teal-600"
                    >
                      Live preview
                      <FiExternalLink />
                    </a>
                  )}

                  {project.code && (
                    <a
                      href={project.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2
                        text-sm font-medium text-slate-600
                        transition-colors hover:text-[#0B1C39]"
                    >
                      <FaGithub className="text-base" />
                      Source
                    </a>
                  )}

                  {!project.live && !project.code && (
                    <span className="text-sm text-slate-400">
                      Preview coming soon
                    </span>
                  )}

                  {project.live && !project.code && (
                    <span className="text-xs text-slate-400">
                      Public demo
                    </span>
                  )}
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* FOOTER NOTE */}
        <div className="mt-16 flex flex-col gap-3 border-t
          border-slate-200 pt-7 sm:flex-row
          sm:items-center sm:justify-between">
          <p className="text-sm leading-6 text-slate-500">
            Each project represents a different problem, approach,
            and opportunity to learn.
          </p>

          <a
            href="https://github.com/offiongDavid"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-fit items-center gap-2
              text-sm font-semibold text-[#0B1C39]
              transition-colors hover:text-teal-800"
          >
            More on GitHub
            <FaArrowRight />
          </a>
        </div>

      </div>
    </section>
  );
};

export default Projects;
