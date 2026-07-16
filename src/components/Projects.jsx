import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import oilSpil from '../assets/oil-spill.jpg';
import disease from '../assets/disease.png';

const Projects = () => {
 const projects = [
  {
    title: "Elevator Portfolio Website",
    description:
      "A modern animated portfolio website for an elevator company showcasing services, projects, and company profile.",
    tech: ["React", "Tailwind", "GSAP"],
    live: "https://your-live-link.com",
    code: "https://github.com/offiongDavid/MATO-Elevators",
    image: "https://ik.imagekit.io/u9vfp7lad/matoelevators%20.png",
  },

  {
    title: "Drex Stores E-Commerce",
    description:
      "An e-commerce platform currently under development with product listings, cart system, and responsive UI.",
    tech: ["React", "Tailwind", "Firebase"],
    live: "",
    code: "https://github.com/your-repo",
    image: "https://ik.imagekit.io/u9vfp7lad/ecommerce%20view.png",
  },

  {
    title: "Temple Schools Website",
    description:
      "A modern school website designed for Temple Schools featuring academics, events, admissions, and responsive layouts.",
    tech: ["React", "Tailwind"],
    live: "https://www.templeschoolng.com/",
    code: "https://github.com/offiongDavid/Temple-School",
    image: "https://ik.imagekit.io/u9vfp7lad/templework.png",
  },

  {
    title: "Registration & Payment Platform",
    description:
      "A registration system integrated with Paystack payment gateway for secure online payments and user registration.",
    tech: ["React", "Tailwind", "Paystack API"],
    live: "https://xovastudios.onrender.com/",
    code: "https://github.com/offiongDavid/Webinar_Url",
    image: "https://ik.imagekit.io/u9vfp7lad/Screenshot%202026-05-11%20175800_edited.png",
  },

  {
    title: "AI Plagiarism Detection Platform",
    description:
      "An AI-powered plagiarism checker that analyzes submitted content and detects duplicate or copied text.",
    tech: ["React", "AI", "Node.js"],
    live: "",
    code: "https://github.com/offiongDavid/plagiarismSite",
    image: "https://ik.imagekit.io/u9vfp7lad/project6.png",
  },

  {
    title: "AI Fake News Detector",
    description:
      "A machine learning based application that detects and analyzes fake news content using AI models.",
    tech: ["React", "Python", "Machine Learning"],
    live: "",
    code: "https://github.com/offiongDavid/FAKENEWS",
    image: "https://i.pinimg.com/736x/a9/11/c9/a911c93ca5afbfa5793eb13d88d79478.jpg",
  },

  {
    title: "Oil Spill Detection Platform",
    description:
      "An image analysis system that detects oil spillage in uploaded images using computer vision and AI.",
    tech: ["React", "AI", "Computer Vision"],
    live: "",
    code: "https://github.com/your-repo",
    image: oilSpil,
  },

  {
    title: "Logistics Company Website",
    description:
      "A responsive logistics and delivery company website with service sections, tracking UI, and contact integration.",
    tech: ["React", "Tailwind"],
    live: "https://rapidityllc.com/Rapidity-logistics/index.html",
    code: "",
    image: "https://ik.imagekit.io/u9vfp7lad/logisticspage.png",
  },

  {
    title: "Weather Application",
    description:
      "A weather forecasting application built with React and Tailwind that displays real-time weather information.",
    tech: ["React", "Tailwind", "Weather API"],
    live: "https://your-live-link.com",
    code: "https://github.com/your-repo",
    image: "https://i.pinimg.com/736x/c6/10/a6/c610a6e29045def98bf8ad75d33dfbe7.jpg",
  },

  {
    title: "Church Website",
    description:
      "A clean and responsive church website featuring ministries, events, sermons, and contact sections.",
    tech: ["React", "Tailwind"],
    live: "",
    code: "https://github.com/your-repo",
    image: "https://ik.imagekit.io/u9vfp7lad/church_website.png",
  },

  {
    title: "Task Management App",
    description:
      "A productivity application for managing daily tasks, tracking progress, and improving workflow efficiency.",
    tech: ["React", "Tailwind", "Local Storage"],
    live: "",
    code: "https://github.com/your-repo",
    image: "/images/taskapp.png",
  },

  {
    title: "Movie Discovery App",
    description:
      "A movie browsing application that fetches trending movies and allows users to search movie details.",
    tech: ["React", "TMDB API", "Tailwind"],
    live: "",
    code: "https://github.com/your-repo",
    image: "/images/movieapp.png",
  },
  {
    title: "Disease Prediction System",
    description:
      "A rule-based system for predicting diseases based on symptom data.",
    tech: ["React", "Node.js", "Api Integration"],
    live: "",
    code: "https://github.com/offiongDavid/Disease-System",
    image: disease,
  },
];

  return (
    <section
      id="projects"
      className="py-28 px-4 md:px-8 border-t border-slate-900"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <p className="text-blue-500 font-medium uppercase tracking-[0.2em] text-sm mb-4">
            My Work
          </p>

          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Featured
            <span className="block text-teal-400">Projects</span>
          </h2>

          <p className="text-slate-400 text-lg leading-8 max-w-3xl">
            A selection of projects I’ve built focusing on frontend development,
            UI design, and user experience.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group rounded-3xl border border-slate-800 bg-slate-900/70 backdrop-blur-xl overflow-hidden hover:border-blue-500/40 transition-all duration-300"
            >
              {/* Project Image */}
              <div className="h-44 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>

                <p className="text-slate-400 text-sm leading-6 mb-5">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-3">
                  <a
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-slate-700 text-slate-200 hover:border-blue-500 hover:text-blue-500 transition-all duration-300"
                  >
                    <FaGithub />
                    Code
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-blue-500 text-white hover:bg-blue-600 transition-all duration-300"
                  >
                    <FaExternalLinkAlt />
                    Live
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="mt-16 text-center">
          <p className="text-slate-500">
            More projects coming soon... constantly building and improving
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;