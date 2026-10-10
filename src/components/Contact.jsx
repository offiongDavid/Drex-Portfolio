
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaWhatsapp,
  FaTwitter,
} from "react-icons/fa";
import { FiArrowUpRight, FiSend } from "react-icons/fi";
import { motion } from "framer-motion";

const Contact = () => {
  const contactLinks = [
    {
      label: "Email",
      value: "offiongd400@gmail.com",
      href: "mailto:offiongd400@gmail.com",
      icon: FaEnvelope,
      color: "group-hover:text-sky-400",
    },
    {
      label: "WhatsApp",
      value: "Chat with me directly",
      href: "https://wa.me/2349027130512",
      icon: FaWhatsapp,
      color: "group-hover:text-green-400",
    },
    {
      label: "LinkedIn",
      value: "Connect professionally",
      href: "https://www.linkedin.com/in/offiong-david-39933541b",
      icon: FaLinkedin,
      color: "group-hover:text-blue-400",
    },
  ];

  const socials = [
    {
      label: "GitHub",
      href: "https://github.com/offiongDavid",
      icon: FaGithub,
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/offiong-david-39933541b",
      icon: FaLinkedin,
    },
    {
      label: "X",
      href: "https://x.com/DavidOffiong11",
      icon: FaTwitter,
    },
    {
      label: "WhatsApp",
      href: "https://wa.me/2349027130512",
      icon: FaWhatsapp,
    },
  ];

  return (
    <section
      id="contact"
      className="relative isolate overflow-hidden border-t border-slate-800/80 px-5 py-24 md:px-8 md:py-28 lg:py-32"
    >
      {/* Keep the existing dark background and subtle blue glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -left-24 -z-10 h-[380px] w-[380px] rounded-full bg-blue-500/[0.09] blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-0 -z-10 h-[320px] w-[320px] rounded-full bg-teal-400/[0.06] blur-[120px]"
      />

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
          className="mb-14 max-w-3xl"
        >
          <p className="mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.24em] text-teal-400">
            <span className="h-px w-8 bg-teal-400" />
            Let’s connect
          </p>

          <h2 className="text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
            Have a project in mind?
            <span className="mt-2 block text-slate-400">
              Let’s make it happen.
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-7 text-slate-400 md:text-lg md:leading-8">
            Whether you need a website, a full-stack application, or help
            bringing a digital idea to life, I’d love to hear what you’re
            working on.
          </p>
        </motion.div>

        {/* Contact layout */}
        <div className="grid items-start gap-7 lg:grid-cols-[0.85fr_1.15fr] lg:gap-10">
          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 backdrop-blur-sm sm:p-8">
              <p className="mb-2 text-sm text-slate-500">
                Have a question or an opportunity?
              </p>

              <h3 className="text-2xl font-semibold tracking-tight text-white">
                I’m all ears.
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-400">
                Tell me a little about what you need, and we can take it from
                there.
              </p>

              <div className="mt-8 space-y-2">
                {contactLinks.map((item) => {
                  const Icon = item.icon;

                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      target={
                        item.label === "Email" ? undefined : "_blank"
                      }
                      rel={
                        item.label === "Email"
                          ? undefined
                          : "noopener noreferrer"
                      }
                      className="group flex items-center gap-4 rounded-xl border border-transparent p-3 transition-all duration-300 hover:border-slate-700 hover:bg-slate-800/60"
                    >
                      <span
                        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-800 text-lg text-slate-300 transition-colors duration-300 ${item.color}`}
                      >
                        <Icon />
                      </span>

                      <span className="min-w-0 flex-1">
                        <span className="block text-sm font-medium text-slate-200">
                          {item.label}
                        </span>
                        <span className="mt-1 block break-words text-xs text-slate-500 sm:text-sm">
                          {item.value}
                        </span>
                      </span>

                      <FiArrowUpRight className="shrink-0 text-lg text-slate-600 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-teal-400" />
                    </a>
                  );
                })}
              </div>

              <div className="my-7 border-t border-slate-800" />

              <p className="mb-4 text-xs font-medium uppercase tracking-[0.16em] text-slate-500">
                Find me online
              </p>

              <div className="flex flex-wrap gap-3">
                {socials.map((social) => {
                  const Icon = social.icon;

                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      title={social.label}
                      className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-800 bg-slate-900/70 text-lg text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:border-teal-400/40 hover:bg-slate-800 hover:text-teal-400"
                    >
                      <Icon />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Small client-focused note */}
            <div className="rounded-2xl border border-teal-400/15 bg-teal-400/[0.04] p-5 sm:p-6">
              <div className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-teal-400 shadow-[0_0_12px_rgba(45,212,191,0.5)]" />

                <div>
                  <p className="text-sm font-medium text-slate-200">
                    Have an idea? Let’s talk.
                  </p>
                  <p className="mt-1 text-sm leading-6 text-slate-400">
                    Share your goals, timeline, or the challenge you’re trying
                    to solve. We can discuss the best way forward.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right column: contact form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur-sm sm:p-8 md:p-9"
          >
            <div className="mb-8">
              <p className="mb-2 text-xs font-medium uppercase tracking-[0.18em] text-teal-400">
                Start a conversation
              </p>

              <h3 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                Send me a message
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-400">
                Fill in the details below, and tell me what you have in mind.
              </p>
            </div>

            <form
              action="https://formspree.io/f/mbdwpyqe"
              method="POST"
              className="space-y-5"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="mb-2 block text-sm font-medium text-slate-300"
                  >
                    Your name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    autoComplete="name"
                    required
                    placeholder="John Doe"
                    className="w-full rounded-xl border border-slate-800 bg-slate-950/60 px-4 py-3.5 text-sm text-white outline-none transition-all placeholder:text-slate-600 hover:border-slate-700 focus:border-teal-400/70 focus:ring-4 focus:ring-teal-400/[0.08]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="mb-2 block text-sm font-medium text-slate-300"
                  >
                    Email address
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    autoComplete="email"
                    required
                    placeholder="john@example.com"
                    className="w-full rounded-xl border border-slate-800 bg-slate-950/60 px-4 py-3.5 text-sm text-white outline-none transition-all placeholder:text-slate-600 hover:border-slate-700 focus:border-teal-400/70 focus:ring-4 focus:ring-teal-400/[0.08]"
                  />
                </div>
              </div>


              <div className="relative">
                <label
                  htmlFor="contact-subject"
                  className="mb-2 block text-sm font-medium text-slate-300"
                >
                  What can I help you with?
                </label>

                <div className="relative">
                  <select
                    id="contact-subject"
                    name="subject"
                    defaultValue=""
                    required
                    className="w-full appearance-none rounded-xl border border-slate-800 bg-slate-950 px-4 py-4 pr-12 text-sm text-slate-200 shadow-sm outline-none transition-all duration-200 hover:border-slate-700 focus:border-teal-400/70 focus:ring-4 focus:ring-teal-400/[0.08]"
                  >
                    <option value="" disabled>
                      Select a project type
                    </option>
                    <option value="Website Development">Website development</option>
                    <option value="Full-Stack Application">Full-stack application</option>
                    <option value="AI-Powered Application">AI-powered application</option>
                    <option value="Website Redesign">Website redesign</option>
                    <option value="API Development">API development</option>
                    <option value="Website Maintenance">Website maintenance</option>
                    <option value="Collaboration">Collaboration</option>
                    <option value="Other">Something else</option>
                  </select>

                  <svg
                    aria-hidden="true"
                    className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m6 9 6 6 6-6"
                    />
                  </svg>
                </div>
              </div>


              <div>
                <label
                  htmlFor="contact-message"
                  className="mb-2 block text-sm font-medium text-slate-300"
                >
                  Project details
                </label>
                <textarea
                  id="contact-message"
                  rows={5}
                  name="message"
                  required
                  minLength={10}
                  placeholder="Tell me about your idea, what you need, or the problem you want to solve..."
                  className="w-full resize-y rounded-xl border border-slate-800 bg-slate-950/60 px-4 py-3.5 text-sm leading-6 text-white outline-none transition-all placeholder:text-slate-600 hover:border-slate-700 focus:border-teal-400/70 focus:ring-4 focus:ring-teal-400/[0.08]"
                />
              </div>

              <input
                type="hidden"
                name="_subject"
                value="New portfolio enquiry"
              />

              <button
                type="submit"
                className="group flex w-full items-center justify-center gap-3 rounded-xl bg-teal-400 px-5 py-4 text-sm font-semibold text-slate-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-teal-300 focus:outline-none focus:ring-4 focus:ring-teal-400/20"
              >
                Send enquiry
                <FiSend className="text-base transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
              </button>

              <p className="text-center text-xs leading-5 text-slate-500">
                Prefer email?{" "}
                <a
                  href="mailto:offiongd400@gmail.com"
                  className="text-slate-300 underline decoration-slate-700 underline-offset-4 transition-colors hover:text-teal-400"
                >
                  Get in touch directly
                </a>
                .
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
