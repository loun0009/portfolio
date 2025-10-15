import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

function ProjectCard({ project }) {
  return (
    <motion.article
      whileHover={{ scale: 1.03 }}
      className="rounded-xl overflow-hidden shadow hover:shadow-lg bg-white dark:bg-slate-800 transition"
    >
      <img src={project.image} alt={project.title} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h3 className="font-semibold text-lg">{project.title}</h3>
        <p className="text-sm mt-1">{project.description}</p>
        <div className="mt-3 flex gap-3 text-sm">
          <a href={project.github} target="_blank" rel="noreferrer" className="underline text-blue-600">GitHub</a>
          <Link to={`/project/${project.id}`} className="underline text-blue-600">Détails</Link>
        </div>
      </div>
    </motion.article>
  )
}

export default ProjectCard
