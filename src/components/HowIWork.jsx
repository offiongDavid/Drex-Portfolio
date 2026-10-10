
import { motion } from "framer-motion";
import {
  FiMessageCircle,
  FiClipboard,
  FiMonitor,
  FiCheckCircle,
  FiArrowRight,
} from "react-icons/fi";

const steps = [
  {
    number: "01",
    title: "Discover",
    icon: FiMessageCircle,
    description:
      "We start with a conversation about your goals, audience, requirements, and the problem you want to solve.",
    detail: "Understand the brief",
  },
  {
    number: "02",
    title: "Plan",
    icon: FiClipboard,
    description:
      "I map out the scope, key features, visual direction, deliverables, and a realistic timeline for the work.",
    detail: "Agree on the approach",
  },
  {
    number: "03",
    title: "Create",
    icon: FiMonitor,
    description:
      "I build the solution, whether that means developing a website, integrating application features, or creating visual designs.",
    detail: "Build and refine",
  },
  {
    number: "04",
    title: "Review & Deliver",
    icon: FiCheckCircle,
    description:
      "We review the work, address agreed feedback, check the important details, and prepare the final deliverables.",
    detail: "Test and hand over",
  },
];

const HowIWork = () => {
  return (
    <section
      id="process"
      className="relative overflow-hidden border-t border-slate-800/80 px-5 py-24 md:px-8 md:py-28 lg:py-32 scroll-mt-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-1/3 h-80 w-80 rounded-full bg-blue-500/[0.06] blur-[120px]"
      />

      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mb-14 max-w-2xl"
        >
          <p className="mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-teal-400">
            <span className="h-px w-8 bg-teal-400" />
            The process
          </p>

          <h2 className="text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
            Clear steps.
            <span className="block text-slate-400">
              Thoughtful execution.
            </span>
          </h2>

          <p className="mt-5 max-w-xl text-base leading-7 text-slate-400">
            Good work starts with understanding the problem. Here&apos;s how
            I approach projects from the first conversation to delivery.
          </p>
        </motion.div>

        <div className="relative grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.article
                key={step.number}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.45, delay: index * 0.09 }}
                className="group relative rounded-2xl border border-slate-800 bg-slate-900/35 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-teal-400/30 hover:bg-slate-900/60"
              >
                <div className="mb-8 flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-teal-400/15 bg-teal-400/[0.07] text-xl text-teal-400 transition-colors duration-300 group-hover:bg-teal-400/15">
                    <Icon />
                  </span>

                  <span className="text-sm font-medium tracking-wider text-slate-600">
                    {step.number}
                  </span>
                </div>

                <h3 className="text-lg font-semibold text-white">
                  {step.title}
                </h3>

                <p className="mt-3 min-h-[140px] text-sm leading-7 text-slate-400">
                  {step.description}
                </p>

                <div className="mt-5 flex items-center gap-2 border-t border-slate-800 pt-4 text-xs font-medium text-slate-500 transition-colors group-hover:text-teal-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-teal-400/70" />
                  {step.detail}
                </div>

                {index < steps.length - 1 && (
                  <FiArrowRight
                    aria-hidden="true"
                    className="absolute -right-3 top-10 z-10 hidden text-slate-600 lg:block"
                  />
                )}
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
              Ready to get started?
            </h3>
            <p className="mt-1 text-sm leading-6 text-slate-400">
              Let&apos;s discuss your idea and work out the next steps.
            </p>
          </div>

          <a
            href="#contact"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl border border-teal-400/30 px-5 py-3 text-sm font-medium text-teal-400 transition-all hover:bg-teal-400/[0.08] hover:border-teal-400/60"
          >
            Start a conversation
            <FiArrowRight />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HowIWork;
