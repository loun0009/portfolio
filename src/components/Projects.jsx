import { Github, Maximize2 } from 'lucide-react';
import projects from '../data/projects'

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Mes Projets
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Découvrez une sélection de mes projets réalisés durant mon parcours scolaire et en dehors, mettant en avant mes compétences et mon évolution en développement web et app.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative overflow-hidden h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white rounded-full hover:bg-slate-100 transition-colors duration-200"
                      aria-label={`Voir le dépôt GitHub de ${project.title}`}
                    >
                      <Github className="w-5 h-5 text-slate-900" />
                    </a>

                    {/* Bouton pour afficher l'image en taille réelle */}
                    <a
                      href={project.image}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white rounded-full hover:bg-slate-100 transition-colors duration-200"
                      aria-label={`Voir l'image de ${project.title} en taille réelle`}
                      title="Voir l'image en taille réelle"
                    >
                      <Maximize2 className="w-5 h-5 text-slate-900" />
                    </a>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {project.title}
                  </h3>

                  <p className="text-slate-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
