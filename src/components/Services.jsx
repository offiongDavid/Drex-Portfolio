
import { motion } from "framer-motion";
import {
  FiCode,
  FiLayers,
  FiPenTool,
  FiTool,
  FiArrowUpRight,
} from "react-icons/fi";

const services = [
  {
    number: "01",
    title: "Web Development",
    description:
      "Responsive, user-friendly websites designed to present your brand clearly and give visitors a smooth experience across devices.",
    icon: FiCode,
    tags: ["React", "JavaScript", "Tailwind CSS"],
  },
  {
    number: "02",
    title: "Full-Stack Applications",
    description:
      "Functional web applications that connect intuitive interfaces with backend logic, APIs, databases, and essential user features.",
    icon: FiLayers,
    tags: ["Node.js", "Express", "MongoDB"],
  },
  {
    number: "03",
    title: "Graphic Design",
    description:
      "Purposeful visual designs for brands, campaigns, and digital platforms, from social media creatives to promotional materials.",
    icon: FiPenTool,
    tags: ["Canva", "Photoshop", "Visual Design"],
  },
  {
    number: "04",
    title: "Website Improvements",
    description:
      "Practical improvements to existing websites, including layout refinements, responsive fixes, bug resolution, and maintenance.",
    icon: FiTool,
    tags: ["UI Refinement", "Bug Fixes", "Responsive Design"],
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="relative overflow-hidden border-t border-slate-800/80 px-5 py-24 md:px-8 md:py-28 lg:py-32 scroll-mt-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-20 h-72 w-72 rounded-full bg-teal-400/[0.05] blur-[110px]"
      />

      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mb-12 max-w-2xl md:mb-16"
        >
          <p className="mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-teal-400">
            <span className="h-px w-8 bg-teal-400" />
            Services
          </p>

          <h2 className="text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
            What I can help you
            <span className="block text-slate-400">bring to life.</span>
          </h2>

          <p className="mt-5 max-w-xl text-base leading-7 text-slate-400">
            From building functional web experiences to creating visual
            content, I help turn ideas into useful, polished digital work.
          </p>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:gap-5">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.article
                key={service.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="group rounded-2xl border border-slate-800 bg-slate-900/40 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-teal-400/30 hover:bg-slate-900/70 sm:p-7"
              >
                <div className="mb-7 flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-teal-400/15 bg-teal-400/[0.07] text-xl text-teal-400 transition-colors duration-300 group-hover:bg-teal-400/15">
                    <Icon />
                  </span>

                  <span className="text-sm font-medium tracking-wider text-slate-600">
                    {service.number}
                  </span>
                </div>

                <h3 className="text-xl font-semibold tracking-tight text-white">
                  {service.title}
                </h3>

                <p className="mt-3 min-h-[84px] text-sm leading-7 text-slate-400">
                  {service.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-lg border border-slate-800 bg-slate-950/60 px-2.5 py-1.5 text-xs text-slate-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href="#contact"
                  className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-teal-400 transition-colors hover:text-teal-300"
                >
                  Discuss a project
                  <FiArrowUpRight className="transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                </a>
              </motion.article>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-8 flex flex-col gap-4 rounded-2xl border border-slate-800/80 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-7"
        >
          <div>
            <h3 className="font-medium text-white">
              Have something different in mind?
            </h3>
            <p className="mt-1 text-sm leading-6 text-slate-400">
              Tell me what you need, and we can explore the right approach.
            </p>
          </div>

          <a
            href="#contact"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-teal-400 px-5 py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-teal-300"
          >
            Let&apos;s talk
            <FiArrowUpRight />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
