import { useEffect, useMemo, useState } from 'react'
import { Github, Maximize2, ArrowUpRight, X } from 'lucide-react'
import projects from '../data/projects'

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('Tous')
  const [activeProjectIndex, setActiveProjectIndex] = useState(0)
  const [previewProject, setPreviewProject] = useState(null)

  const filters = useMemo(() => {
    const uniqueTags = new Set(projects.flatMap((project) => project.tags))
    return ['Tous', ...uniqueTags]
  }, [])

  const visibleProjects = useMemo(() => {
    if (activeFilter === 'Tous') return projects
    return projects.filter((project) => project.tags.includes(activeFilter))
  }, [activeFilter])

  const activeProject = visibleProjects[activeProjectIndex] ?? visibleProjects[0]

  const handleFilterClick = (filter) => {
    setActiveFilter(filter)
    setActiveProjectIndex(0)
  }

  useEffect(() => {
    if (!previewProject) return undefined

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setPreviewProject(null)
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [previewProject])

  return (
    <section id="projects" className="relative py-24">
      <div className="section-shell">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-600">Projets</p>
            <h2 className="section-title mt-4">
              Un portfolio plus interactif doit aussi mieux raconter les projets.
            </h2>
            <p className="section-copy mt-4">
              Filtre par techno, explore la sélection et garde toujours un projet mis en avant pour comprendre rapidement son intention.
            </p>
          </div>

          <div className="mb-8 flex flex-wrap justify-center gap-3">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => handleFilterClick(filter)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                  activeFilter === filter
                    ? 'bg-slate-900 text-white shadow-[0_14px_30px_#0f172a2e]'
                    : 'glass-panel text-slate-700 hover:-translate-y-0.5 hover:text-slate-950'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {activeProject && (
            <div className="glass-panel mb-10 overflow-hidden rounded-[2rem] border-white/70">
              <div className="grid gap-0 lg:grid-cols-[1.1fr_0.9fr]">
                <div className="relative min-h-[320px] overflow-hidden bg-[radial-gradient(circle_at_top,_#bae6fdcc,_transparent_38%),linear-gradient(180deg,_#f1f5f9f5,_#e2e8f0eb)] p-6 md:p-8">
                  <img
                    src={activeProject.image}
                    alt={activeProject.title}
                    className="h-full w-full object-contain transition-transform duration-700 hover:scale-[1.02]"
                  />
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-900/14 to-transparent" />
                </div>

                <div className="p-8 md:p-10">
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-600">Projet en avant</p>
                  <div className="mt-4 flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-3xl font-bold text-slate-950">{activeProject.title}</h3>
                      <p className="mt-4 max-w-xl text-base leading-7 text-slate-600">{activeProject.description}</p>
                    </div>
                    <span className="rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-700">
                      {activeProject.type}
                    </span>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {activeProject.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-sm font-medium text-slate-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-8 grid gap-4 sm:grid-cols-3">
                    {activeProject.highlights.map((highlight) => (
                      <div key={highlight} className="rounded-2xl border border-slate-200 bg-slate-50/70 p-4 text-sm leading-6 text-slate-700">
                        {highlight}
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 flex flex-wrap gap-3">
                    <a
                      href={activeProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5"
                      aria-label={`Voir le dépôt GitHub de ${activeProject.title}`}
                    >
                      <Github className="h-4 w-4" />
                      Voir le dépôt
                    </a>
                    <button
                      type="button"
                      onClick={() => setPreviewProject(activeProject)}
                      className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-800 transition-all duration-300 hover:-translate-y-0.5"
                      aria-label={`Ouvrir l'aperçu de ${activeProject.title}`}
                      title="Ouvrir l'aperçu"
                    >
                      <Maximize2 className="h-4 w-4" />
                      Ouvrir l’aperçu
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {visibleProjects.map((project, index) => (
              <button
                key={project.title}
                type="button"
                onClick={() => setActiveProjectIndex(index)}
                className={`group overflow-hidden rounded-[1.75rem] border text-left transition-all duration-300 hover:-translate-y-2 ${
                  activeProject?.title === project.title
                    ? 'border-slate-900 bg-slate-900 text-white shadow-[0_24px_60px_#0f172a2e]'
                    : 'glass-panel border-white/70 text-slate-900'
                }`}
              >
                <div className="relative flex h-52 items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_top,_#bae6fdb3,_transparent_35%),linear-gradient(180deg,_#f8fafcf5,_#e2e8f0e6)] p-4">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-slate-900/18 to-transparent" />
                  <div className="absolute bottom-4 right-4 rounded-full bg-white/90 p-2 text-slate-900">
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                </div>

                <div className="p-6">
                  <div className="mb-3 flex items-center justify-between gap-3">
                    <h3 className={`text-xl font-bold ${activeProject?.title === project.title ? 'text-white' : 'text-slate-900'}`}>
                      {project.title}
                    </h3>
                    <span className={`rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] ${activeProject?.title === project.title ? 'bg-white/10 text-sky-100' : 'bg-sky-50 text-sky-700'}`}>
                      {project.type}
                    </span>
                  </div>

                  <p className={`mb-5 line-clamp-3 leading-7 ${activeProject?.title === project.title ? 'text-slate-300' : 'text-slate-600'}`}>
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`rounded-full px-3 py-1 text-sm font-medium ${activeProject?.title === project.title ? 'bg-white/10 text-white' : 'bg-slate-100 text-slate-700'}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {previewProject && (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-slate-950/72 p-4 backdrop-blur-md"
          onClick={() => setPreviewProject(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-preview-title"
        >
          <div
            className="glass-panel relative max-h-[90vh] w-full max-w-5xl overflow-hidden rounded-[2rem] border-white/60 bg-white shadow-[0_30px_80px_#0f172a47]"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setPreviewProject(null)}
              className="absolute right-4 top-4 z-10 rounded-full border border-slate-200 bg-white/90 p-2 text-slate-700 transition-colors duration-200 hover:bg-slate-100 hover:text-slate-950"
              aria-label="Fermer l'aperçu"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="grid max-h-[90vh] overflow-auto lg:grid-cols-[1.2fr_0.8fr]">
              <div className="flex min-h-[320px] items-center justify-center bg-[radial-gradient(circle_at_top,_#bae6fdbf,_transparent_34%),linear-gradient(180deg,_#f8fafcfa,_#e2e8f0f0)] p-6 md:min-h-[520px] md:p-8">
                <img
                  src={previewProject.image}
                  alt={previewProject.title}
                  className="max-h-[70vh] w-full object-contain"
                />
              </div>

              <div className="p-8 md:p-10">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-600">Aperçu du projet</p>
                <h3 id="project-preview-title" className="mt-4 text-3xl font-bold text-slate-950">
                  {previewProject.title}
                </h3>
                <p className="mt-5 text-base leading-8 text-slate-700">{previewProject.description}</p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {previewProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm font-medium text-slate-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-8 space-y-3">
                  {previewProject.highlights.map((highlight) => (
                    <div
                      key={highlight}
                      className="rounded-2xl border border-slate-200 bg-slate-50/80 p-4 text-sm leading-6 text-slate-700"
                    >
                      {highlight}
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href={previewProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5"
                  >
                    <Github className="h-4 w-4" />
                    Voir le dépôt
                  </a>
                  <button
                    type="button"
                    onClick={() => setPreviewProject(null)}
                    className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-800 transition-all duration-300 hover:-translate-y-0.5"
                  >
                    Fermer
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
