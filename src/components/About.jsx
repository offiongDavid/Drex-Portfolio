import { FaCode, FaLaptopCode, FaPalette } from "react-icons/fa";
import { motion } from "framer-motion";

const About = () => {
  const highlights = [
    {
      icon: <FaCode />,
      title: "Clean Code",
      description:
        "Building scalable, maintainable, and reusable frontend architectures with modern best practices.",
    },
    {
      icon: <FaLaptopCode />,
      title: "Responsive Design",
      description:
        "Creating seamless digital experiences across desktop, tablet, and mobile devices.",
    },
    {
      icon: <FaPalette />,
      title: "UI/UX Focused",
      description:
        "Combining functionality with thoughtful interface design to improve user experience.",
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
            Crafting Modern
            <span className="block text-teal-400">Web Experiences</span>
          </h2>

          <p className="text-slate-400 text-lg leading-8 max-w-3xl">
            I’m a Software Developer focused on building fast, clean, and
            user-centered interfaces using modern technologies like React and
            Tailwind CSS. I care deeply about performance, usability, and design
            consistency.
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
              <h3 className="text-2xl font-bold mb-4">Who I Am</h3>

              <p className="text-slate-400 leading-8 mb-4">
                I specialize in developing responsive frontend applications with
                React, Tailwind CSS, and modern JavaScript. I enjoy turning ideas
                into smooth, functional, and visually polished interfaces.
              </p>

              <p className="text-slate-400 leading-8">
                I constantly explore better design systems, animations, and
                frontend architectures to improve how users interact with the web.
              </p>
            </div>

            {/* TECH STACK */}
            <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-8">
              <h3 className="text-xl font-bold mb-5">Core Technologies</h3>

              <div className="flex flex-wrap gap-3">
                {[
                  "React",
                  "JavaScript",
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

                <p className="text-slate-400 leading-7">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;