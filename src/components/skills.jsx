import React from 'react'

function Skills() {
  const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'PHP','C#' ,'Tailwind', 'Git']

  return (
    <section id="skills" className="max-w-5xl mx-auto px-4 py-16">
      <h2 className="text-2xl font-bold mb-8 text-center">Compétences</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map(skill => (
          <span key={skill} className="px-4 py-2 bg-slate-100 dark:bg-slate-800 rounded-lg text-sm font-medium">
            {skill}
          </span>
        ))}
      </div>
    </section>
  )
}

export default Skills
