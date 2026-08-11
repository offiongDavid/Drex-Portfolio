import { FaCode, FaLaptopCode, FaPalette } from "react-icons/fa";
import { motion } from "framer-motion";

const About = () => {
  const highlights = [
    {
      icon: <FaCode />,
      title: "Clean & Maintainable Code",
      description:
        "I write component-driven React code that’s easy to extend. Clear structure, consistent patterns, and thoughtful state management so projects don’t become unmaintainable after a few months.",
    },
    {
      icon: <FaLaptopCode />,
      title: "Responsive by Default",
      description:
        "Every interface I build works properly on mobile, tablet, and desktop. I treat responsive design as a core requirement, not an afterthought.",
    },
    {
      icon: <FaPalette />,
      title: "UI with Intention",
      description:
        "I care about the small details — spacing, hierarchy, transitions, and feedback states. The goal is interfaces that feel clear and polished, not just “pretty”.",
    },
  ];

  return (
    <section
      id="about"
      className="py-32 px-4 md:px-8 border-t border-slate-900 relative overflow-hidden"
    >
      {/* soft background glow */}
      <div className="absolute w-[400px] h-[400px] bg-teal-500/10 blur-[120px] rounded-full -top-40 -right-40" />

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
            About Me
          </p>

          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Software developer focused on
            <span className="block text-teal-400">clean interfaces & solid code</span>
          </h2>

          <p className="text-slate-400 text-lg leading-8 max-w-3xl">
            I build modern web applications with React and Tailwind CSS. My focus is
            on creating fast, accessible, and maintainable applications that feel
            good to use and are straightforward to work on later.
          </p>
        </motion.div>

        {/* MAIN GRID */}
        <div className="grid lg:grid-cols-2 gap-14 items-start">
          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* WHO I AM */}
            <div className="rounded-3xl border border-slate-800 bg-slate-900/60 backdrop-blur-xl p-8 hover:border-slate-700 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-4">What I do</h3>

              <p className="text-slate-400 leading-8 mb-4">
                I specialize in building responsive frontend applications using
                React, modern JavaScript, and Tailwind CSS. Most of my work
                involves turning designs and ideas into clean, functional
                interfaces that perform well across devices.
              </p>

              <p className="text-slate-400 leading-8">
                I’m particularly interested in component architecture, thoughtful
                animations, and building design systems that stay consistent as
                projects grow. I prefer solutions that are simple to understand
                and easy to maintain.
              </p>
            </div>

            {/* TECH STACK */}
            <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-8">
              <h3 className="text-xl font-bold mb-5">Core Technologies</h3>

              <div className="flex flex-wrap gap-3">
                {[
                  "React",
                  "JavaScript",
                  "TypeScript",
                  "Tailwind CSS",
                  "HTML5",
                  "CSS3",
                  "Git",
                  "GitHub",
                  "Figma",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 rounded-xl bg-slate-800 text-slate-300 text-sm border border-slate-700 hover:border-blue-500/40 hover:text-white transition-all duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE */}
          <div className="grid gap-6">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={{ y: -6 }}
                className="rounded-3xl border border-slate-800 bg-slate-900/60 p-7 hover:border-blue-500/40 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-2xl bg-slate-800 flex items-center justify-center text-blue-500 text-xl mb-5">
                  {item.icon}
                </div>

                <h3 className="text-xl font-bold mb-3">{item.title}</h3>

                <p className="text-slate-400 leading-7">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;