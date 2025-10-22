import { useParams, Link } from 'react-router-dom'
import projects from '../data/projects'

function ProjectDetails() {
  const { id } = useParams()
  const project = projects.find(p => p.id === parseInt(id))

  if (!project) return <p className="text-center py-20">Projet non trouvé</p>

  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <img src={project.image} alt={project.title} className="rounded-lg shadow mb-6" />
      <h1 className="text-3xl font-bold mb-2">{project.title}</h1>
      <p className="mb-4">{project.description}</p>
      <div className="flex gap-4">
        <a href={project.github} target="_blank" rel="noreferrer" className="underline text-blue-600">GitHub</a>
        {project.demo && <a href={project.demo} target="_blank" rel="noreferrer" className="underline text-blue-600">Démo</a>}
      </div>
      <Link to="/" className="inline-block mt-8 underline text-sm text-blue-600">← Retour</Link>
    </div>
  )
}

export default ProjectDetails
