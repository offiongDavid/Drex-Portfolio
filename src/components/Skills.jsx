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
      title: "Frontend",
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
      title: "Backend",
      skills: [
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "Express", icon: <SiExpress /> },
        { name: "Firebase", icon: <SiFirebase /> },
        { name: "MongoDB", icon: <SiMongodb /> },
      ],
    },
    {
      title: "Tools & Workflow",
      skills: [
        { name: "Git", icon: <FaGitAlt /> },
        { name: "GitHub", icon: <FaGithub /> },
        { name: "Figma", icon: <FaFigma /> },
        { name: "Vite", icon: <SiVite /> },
      ],
    },
    {
      title: "State & UI Systems",
      skills: [
        { name: "Redux", icon: <SiRedux /> },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="py-32 px-4 md:px-8 border-t border-slate-900 relative overflow-hidden"
    >
      {/* background glow */}
      <div className="absolute w-[450px] h-[450px] bg-blue-500/10 blur-[140px] rounded-full -top-40 -left-40" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <p className="text-blue-500 font-medium uppercase tracking-[0.2em] text-sm mb-4">
            Skills
          </p>

          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Technologies I
            <span className="block text-teal-400">Work With</span>
          </h2>

          <p className="text-slate-400 text-lg leading-8 max-w-3xl">
            A curated collection of tools and technologies I use to build modern,
            scalable, and high-performance web applications.
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">

          {skillGroups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="rounded-3xl border border-slate-800 bg-slate-900/60 backdrop-blur-xl p-6 hover:border-blue-500/30 transition-all duration-300"
            >
              {/* group title */}
              <h3 className="text-xl font-bold mb-6 text-slate-100">
                {group.title}
              </h3>

              {/* skills */}
              <div className="space-y-4">
                {group.skills.map((skill, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ x: 4 }}
                    className="flex items-center gap-3 px-3 py-3 rounded-xl bg-slate-800/60 border border-slate-700 hover:border-blue-500/40 transition-all duration-300"
                  >
                    <span className="text-blue-500 text-lg">
                      {skill.icon}
                    </span>

                    <span className="text-slate-300 text-sm font-medium">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}

        </div>

        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-slate-500">
            Always learning new tools and improving my frontend craft 
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default Skills;