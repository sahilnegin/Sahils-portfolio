import React from 'react'
import { motion } from 'framer-motion'
import { AiOutlineDatabase } from 'react-icons/ai'
import {
  SiPython,
  SiDocker,
  SiFastapi,
  SiReact,
  SiJavascript,
  SiPostgresql,
  SiMongodb,
  SiGit,
  SiLinux,
} from 'react-icons/si'

const skillCategories = [
  {
    title: 'Languages',
    colorClass: 'text-cyan-400',
    skills: [
      { name: 'Python', icon: <SiPython className="inline mr-2" /> },
      { name: 'JavaScript', icon: <SiJavascript className="inline mr-2" /> },
      { name: 'SQL', icon: <AiOutlineDatabase className="inline mr-2" /> },
    ],
  },
  {
    title: 'Frameworks',
    colorClass: 'text-green-400',
    skills: [
      { name: 'FastAPI', icon: <SiFastapi className="inline mr-2" /> },
      { name: 'React', icon: <SiReact className="inline mr-2" /> },
    ],
  },
  {
    title: 'Databases',
    colorClass: 'text-amber-400',
    skills: [
      { name: 'PostgreSQL', icon: <SiPostgresql className="inline mr-2" /> },
      { name: 'MongoDB', icon: <SiMongodb className="inline mr-2" /> },
    ],
  },
  {
    title: 'Tools',
    colorClass: 'text-violet-400',
    skills: [
      { name: 'Docker', icon: <SiDocker className="inline mr-2" /> },
      { name: 'Git', icon: <SiGit className="inline mr-2" /> },
      { name: 'Linux', icon: <SiLinux className="inline mr-2" /> },
    ],
  },
]

export default function Skills() {
  return (
    <div className="relative min-h-screen bg-[#121212] text-white px-6 py-10 max-w-6xl mx-auto">
      {/* Background blob */}
      <div className="absolute top-0 -left-40 w-80 h-80 bg-cyan-500 rounded-full blur-3xl opacity-20 animate-pulse z-0"></div>

      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold underline decoration-cyan-400 underline-offset-8 mb-12 text-center z-10 relative"
      >
        Skills
      </motion.h2>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 z-10 relative">
        {skillCategories.map(({ title, colorClass, skills }) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-xl shadow-md hover:shadow-cyan-400/20 transition"
          >
            <h3 className={`text-xl font-semibold mb-4 ${colorClass}`}>
              {title}
            </h3>
            <ul className="space-y-2">
              {skills.map(({ name, icon }) => (
                <li
                  key={name}
                  className="text-gray-300 flex items-center hover:text-cyan-300 transition"
                >
                  {icon}
                  <span className="truncate">{name}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      {/* Glowing divider */}
      <div className="mt-16 h-1 max-w-xs mx-auto bg-cyan-400 rounded-full opacity-50 animate-pulse z-10 relative"></div>
    </div>
  )
}
