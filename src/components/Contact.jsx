import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaWhatsapp,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-32 px-4 md:px-8 border-t border-slate-900 relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute w-[400px] h-[400px] bg-blue-500/10 blur-[120px] rounded-full -bottom-32 -left-20" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <p className="text-blue-500 font-medium uppercase tracking-[0.2em] text-sm mb-4">
            Contact
          </p>

          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Let’s Build Something
            <span className="block text-teal-400">Great Together</span>
          </h2>

          <p className="text-slate-400 text-lg leading-8 max-w-2xl mx-auto">
            Open to freelance opportunities, collaborations, and exciting
            frontend projects. Feel free to reach out anytime.
          </p>
        </motion.div>

        {/* Contact Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Contact Card */}
            <div className="rounded-3xl border border-slate-800 bg-slate-900/60 backdrop-blur-xl p-8">
              <h3 className="text-2xl font-bold mb-8">Get in Touch</h3>

              <div className="space-y-5">
                <a
                  href="mailto:youremail@example.com"
                  className="flex items-center gap-4 text-slate-300 hover:text-blue-500 transition-all duration-300"
                >
                  <FaEnvelope className="text-xl" />
                 offiongd400@gmail.com
                </a>

                <a
                  href="https://wa.me/2349027130512"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-slate-300 hover:text-green-400 transition-all duration-300"
                >
                  <FaWhatsapp className="text-xl" />
                  WhatsApp Chat
                </a>

                <a
                  href="https://github.com/offiongDavid"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-slate-300 hover:text-white transition-all duration-300"
                >
                  <FaGithub className="text-xl" />
                  GitHub Profile
                </a>

                <a
                  href="https://www.linkedin.com/in/offiong-david-39933541b"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-slate-300 hover:text-blue-500 transition-all duration-300"
                >
                  <FaLinkedin className="text-xl" />
                  LinkedIn Profile
                </a>
              </div>
            </div>

            {/* Social Card */}
            <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-8">
              <h3 className="text-xl font-bold mb-5">Socials</h3>

              <div className="flex items-center gap-5 text-2xl">
                <a
                  href="https://github.com/offiongDavid"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-white transition"
                >
                  <FaGithub />
                </a>

                <a
                  href="https://www.linkedin.com/in/offiong-david-39933541b"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-blue-500 transition"
                >
                  <FaLinkedin />
                </a>

                <a
                  href="https://x.com/DavidOffiong11"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-sky-400 transition"
                >
                  <FaTwitter />
                </a>


                <a
                  href="https://wa.me/2349027130512"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-green-400 transition"
                >
                  <FaWhatsapp />
                </a>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE FORM */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-slate-800 bg-slate-900/60 backdrop-blur-xl p-8"
          >
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>

            <form
              action="https://formspree.io/f/mbdwpyqe"
              method="POST"
              className="space-y-5"
            >
              <input
                type="text"
                name="name"
                required
                placeholder="Your Name"
                className="w-full px-4 py-4 rounded-xl bg-slate-800 border border-slate-700 text-slate-200 focus:outline-none focus:border-blue-500 transition-all"
              />

              <input
                type="email"
                name="email"
                required
                placeholder="Your Email"
                className="w-full px-4 py-4 rounded-xl bg-slate-800 border border-slate-700 text-slate-200 focus:outline-none focus:border-blue-500 transition-all"
              />

              <textarea
                rows="5"
                name="message"
                required
                placeholder="Your Message"
                className="w-full px-4 py-4 rounded-xl bg-slate-800 border border-slate-700 text-slate-200 focus:outline-none focus:border-blue-500 transition-all"
              ></textarea>

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-blue-500 hover:bg-blue-600 text-white font-medium transition-all duration-300 shadow-lg shadow-blue-500/10"
              >
                Send Message
              </button>
            </form>

        
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;