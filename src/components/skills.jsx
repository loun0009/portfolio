import { useMemo, useState } from 'react'
import skillCategories from '../data/skills'

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState(skillCategories[0].title)

  const activeCategory = useMemo(
    () => skillCategories.find((category) => category.title === selectedCategory) ?? skillCategories[0],
    [selectedCategory],
  )

  return (
    <section id="skills" className="relative py-24">
      <div className="section-shell">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-600">Compétences</p>
            <h2 className="section-title mt-4">
              Une stack variée, présentée comme un vrai tableau de bord.
            </h2>
            <p className="section-copy mt-4">
              Sélectionne une catégorie pour voir les technos dominantes et le niveau de maturité que je peux apporter sur un projet.
            </p>
          </div>

          <div className="grid gap-8 xl:grid-cols-[1.1fr_0.9fr]">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {skillCategories.map((category, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setSelectedCategory(category.title)}
                className={`group rounded-[1.75rem] border p-8 text-left transition-all duration-300 hover:-translate-y-2 ${
                  activeCategory.title === category.title
                    ? 'border-slate-900 bg-slate-900 text-white shadow-[0_24px_60px_#0f172a33]'
                    : 'glass-panel border-white/70 text-slate-900 hover:border-sky-200'
                }`}
              >
                <div className={`mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${category.color} transition-transform duration-300 group-hover:scale-110`}>
                  <category.icon className="h-8 w-8 text-white" />
                </div>

                <h3 className={`mb-4 text-2xl font-bold ${activeCategory.title === category.title ? 'text-white' : 'text-slate-900'}`}>
                  {category.title}
                </h3>

                <p className={`mb-6 text-sm leading-6 ${activeCategory.title === category.title ? 'text-slate-300' : 'text-slate-600'}`}>
                  {category.summary}
                </p>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className={`rounded-full px-3 py-1.5 text-sm font-medium transition-colors duration-200 ${
                        activeCategory.title === category.title
                          ? 'bg-white/10 text-white'
                          : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </button>
            ))}
            </div>

            <aside className="glass-panel rounded-[2rem] p-8 md:p-10">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-600">Catégorie active</p>
                  <h3 className="mt-3 text-3xl font-bold text-slate-950">{activeCategory.title}</h3>
                </div>
                <div className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${activeCategory.color}`}>
                  <activeCategory.icon className="h-8 w-8 text-white" />
                </div>
              </div>

              <p className="mt-5 text-base leading-7 text-slate-600">{activeCategory.detail}</p>

              <div className="mt-8 space-y-5">
                {activeCategory.metrics.map((metric) => (
                  <div key={`${activeCategory.title}-${metric.label}`}>
                    <div className="mb-2 flex items-center justify-between text-sm font-medium text-slate-700">
                      <span>{metric.label}</span>
                      <span>{metric.value}%</span>
                    </div>
                    <div className="h-2.5 rounded-full bg-slate-100">
                      <div
                        className="animate-shimmer h-full rounded-full bg-[linear-gradient(90deg,#0f172a_0%,#0ea5e9_55%,#22c55e_100%)]"
                        style={{ width: `${metric.value}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-[1.5rem] border border-sky-100 bg-sky-50/70 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-700">Ce que cela veut dire</p>
                <p className="mt-3 text-sm leading-7 text-slate-700">
                  Je peux être utile rapidement sur cette zone, contribuer à une base existante et faire évoluer l’interface,
                  les composants ou la structure de projet avec une logique propre.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  )
}
