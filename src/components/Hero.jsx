import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaReact,
  FaCode,
} from "react-icons/fa";
import { HiArrowDown } from "react-icons/hi";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center pt-28 pb-20 px-4 md:px-8 relative overflow-hidden">
      {/* background glows */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-500/10 blur-[140px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-teal-500/10 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          {/* badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-800 bg-slate-900/70 text-sm text-slate-300 mb-8">
            <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
            Available for freelance work
          </div>

          {/* heading */}
          <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight mb-6">
            Hi, I’m <span className="text-white">Drex</span>
            <span className="block text-blue-500">Software Developer</span>
            Crafting Digital Products.
          </h1>

          {/* description */}
          <p className="text-slate-400 text-lg md:text-xl leading-8 max-w-xl mb-10">
            I build responsive, scalable, and visually engaging web applications
            with React, Tailwind CSS, and modern frontend technologies.
          </p>

          {/* buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <a
              href="#projects"
              className="px-8 py-4 rounded-xl bg-blue-500 hover:bg-blue-600 text-white font-medium shadow-lg shadow-blue-500/10 transition-all duration-300"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="px-8 py-4 rounded-xl border border-slate-700 hover:border-teal-400 hover:text-teal-400 font-medium transition-all duration-300"
            >
              Let’s Talk
            </a>
          </div>

          {/* socials */}
          <div className="flex items-center gap-5 text-xl">
            <a href="https://github.com/offiongDavid" className="text-slate-400 hover:text-white transition">
              <FaGithub />
            </a>
            <a href="www.linkedin.com/in/offiong-david-39933541b" className="text-slate-400 hover:text-blue-500 transition">
              <FaLinkedin />
            </a>
            <a href="https://x.com/DavidOffiong11" className="text-slate-400 hover:text-sky-400 transition">
              <FaTwitter />
            </a>
          </div>
        </motion.div>

        {/* RIGHT SIDE IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="relative flex justify-center lg:justify-end"
        >
          {/* glow behind image */}
          <div className="absolute w-[350px] h-[350px] bg-blue-500/20 blur-[120px] rounded-full" />

          {/* big image */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ repeat: Infinity, duration: 5 }}
            className="relative w-[320px] md:w-[420px] h-[420px] md:h-[520px] rounded-[2rem] overflow-hidden border border-slate-800 shadow-2xl"
          >
            <img
              src="https://ik.imagekit.io/u9vfp7lad/WhatsApp%20Image%202026-05-10%20at%2006.35.52.jpeg"
              alt="Drex"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* floating card 1 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute top-8 -left-8 bg-slate-900/80 backdrop-blur-xl border border-slate-800 rounded-2xl px-5 py-4 shadow-xl"
          >
            <div className="flex items-center gap-3">
              <FaReact className="text-blue-400 text-xl" />
              <div>
                <p className="text-sm font-medium">React Expert</p>
                <p className="text-xs text-slate-400">Modern UI Systems</p>
              </div>
            </div>
          </motion.div>

          {/* floating card 2 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: [0, 8, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute bottom-12 -right-6 bg-slate-900/80 backdrop-blur-xl border border-slate-800 rounded-2xl px-5 py-4 shadow-xl"
          >
            <div className="flex items-center gap-3">
              <FaCode className="text-teal-400 text-xl" />
              <div>
                <p className="text-sm font-medium">10+ Projects</p>
                <p className="text-xs text-slate-400">Production Ready</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* scroll */}
      <a
        href="#about"
        className="hidden md:flex absolute bottom-10 left-1/2 -translate-x-1/2 flex-col items-center text-slate-500 hover:text-white transition"
      >
        <span className="text-sm mb-2">Scroll</span>
        <HiArrowDown className="animate-bounce text-xl" />
      </a>
    </section>
  );
};

export default Hero;