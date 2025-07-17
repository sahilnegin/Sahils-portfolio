// components/ProjectCard.jsx
import { motion } from 'framer-motion'

export default function ProjectCard({ title, description, techIcons, category, repoLink }) {
  return (
    <motion.a
      href={repoLink}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.05 }}
      className="block bg-[#1f1f1f] text-white p-5 rounded-xl shadow-md hover:shadow-cyan-400/40 transition-all duration-300"
    >
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <p className="text-gray-400 mb-4">{description}</p>

      <div className="flex items-center space-x-3 text-xl mb-3 text-cyan-300">
        {techIcons.map((icon, idx) => (
          <span key={idx}>{icon}</span>
        ))}
      </div>

      <span className="inline-block bg-cyan-600 text-white text-xs px-3 py-1 rounded-full">
        {category}
      </span>
    </motion.a>
  )
}
