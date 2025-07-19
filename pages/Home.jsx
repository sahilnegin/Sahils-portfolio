import { Typewriter } from 'react-simple-typewriter'
import { motion } from 'framer-motion'
import { SiPython, SiFastapi, SiReact, SiDocker, SiGithub, SiLinkedin } from 'react-icons/si'
import { Link } from 'react-router-dom'
export default function Home() {
  return (
    <section className="relative flex flex-col-reverse md:flex-row items-center justify-between min-h-screen bg-[#0e0e0e] text-white px-8 md:px-24 pt-24">
      

      <div className="z-10 flex-1">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-bold"
        >
          Hi, I’m <span className="text-cyan-400">Sahil</span>
        </motion.h1>

        <motion.p
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7, delay: 0.2 }}
  className="mt-4 text-gray-400 max-w-2xl"
>
  Backend Developer focused on writing clean, maintainable code in <span className="text-cyan-300">Python</span> & <span className="text-cyan-300">JavaScript</span> — with scalable APIs built using <span className="text-cyan-300">FastAPI</span> and <span className="text-cyan-300">Django</span>. <br />
  Also experienced with frontend dev using <span className="text-cyan-300">React</span> & <span className="text-cyan-300">Tailwind CSS</span>.
</motion.p>


        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-6 font-mono text-lg text-gray-300"
        >
          I am a{' '}
          <Typewriter
            words={[
              'Python Developer.',
              'FastAPI Specialist.',
              'React Developer.',
              'AI Enthusiast.',
            ]}
            loop={0}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </motion.h2>

        {/* TECH ICONS */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex gap-6 text-3xl text-cyan-400 mt-8"
        >
          <SiPython className="hover:scale-110 transition" />
          <SiFastapi className="hover:scale-110 transition" />
          <SiReact className="hover:scale-110 transition" />
          <SiDocker className="hover:scale-110 transition" />
        </motion.div>

        {/* BUTTONS */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-8 flex gap-4 flex-wrap"
        >
          <Link
  to="/contact"
  className="bg-white/10 backdrop-blur-md text-cyan-300 px-6 py-2 rounded-md hover:bg-white/20 transition border border-cyan-400 shadow-md"
>
  Let’s Connect
</Link>
        
        </motion.div>

        {/* SOCIAL ICONS */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="flex gap-6 mt-6 text-2xl text-cyan-400"
        >
          <a href="https://github.com/sahilnegin" target="_blank" rel="noreferrer">
            <SiGithub className="hover:scale-110 transition" />
          </a>
          <a href="https://linkedin.com/in/sahil-negi" target="_blank" rel="noreferrer">
            <SiLinkedin className="hover:scale-110 transition" />
          </a>
        </motion.div>


      </div>

      <div className="relative flex-1 w-full h-[400px] md:h-[500px]">
        <div className="absolute top-0 right-0 w-72 h-72 bg-cyan-500 rounded-full blur-3xl opacity-20 animate-pulse" />
        <div className="absolute bottom-10 left-10 w-60 h-60 bg-fuchsia-600 rounded-full blur-2xl opacity-20 animate-pulse" />
      </div>
    </section>
  )
}
