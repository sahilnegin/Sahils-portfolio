import { motion } from 'framer-motion'
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'

export default function Contact() {
  return (
    <div className="min-h-screen bg-[#121212] text-white px-6 py-16 max-w-4xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center mb-12 underline decoration-cyan-400 underline-offset-8"
      >
        Contact Me
      </motion.h2>

      {/* Contact Icons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex justify-center space-x-6 text-2xl mb-12"
      >
        <a
          href="mailto:sahilnegi.dev@gmail.com"
          className="hover:text-cyan-400"
          aria-label="Email"
        >
          <FaEnvelope />
        </a>
        <a
          href="https://www.linkedin.com/in/sahil-negi-5a9078211/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-cyan-400"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/sahilnegin"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-cyan-400"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
      </motion.div>

      {/* Contact Form */}
      <motion.form
        action="https://formspree.io/f/YOUR_FORM_ID"
        method="POST"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-[#1f1f1f] p-8 rounded-lg shadow-md space-y-6"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="w-full p-3 rounded bg-[#2a2a2a] text-white focus:outline-none"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="w-full p-3 rounded bg-[#2a2a2a] text-white focus:outline-none"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          required
          rows="5"
          className="w-full p-3 rounded bg-[#2a2a2a] text-white focus:outline-none"
        ></textarea>
        <button
          type="submit"
          className="bg-cyan-500 hover:bg-cyan-600 transition px-6 py-2 rounded text-white font-semibold"
        >
          Send Message
        </button>
      </motion.form>
    </div>
  )
}
