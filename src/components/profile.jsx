const education = [
    {
        school: 'Lycée Charles Baudelaire',
        degree: 'Bac général',
        years: '2019 - 2022',
        details: 'Spécialités mathématiques et NSI',
    },
    {
        school: 'IUT de Reims',
        degree: 'DUT Informatique',
        years: '2022 - 2024',
        details: 'Bases solides en développement, data et méthodologie projet',
    },
    {
        school: 'Esiee-it Paris',
        degree: 'Titre d’ingénieur en informatique',
        years: '2026 - 202X',
        details: 'Conception, développement, validation et travail en équipe',
    },
]

const strengths = [
    'Approche structurée des interfaces',
    'Bonne base en PHP, React, API et SQL',
    'Montée en compétence rapide sur un nouveau projet',
]

export default function Profile() {
    return (
        <section id="profile" className="relative py-24">
            <div className="section-shell">
                <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
                    <div className="glass-panel rounded-[2rem] p-8 md:p-10">
                        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-600">Profil</p>
                        <h2 className="section-title mt-4">Une base technique sérieuse, avec plus d’attention portée à l’expérience.</h2>
                        <p className="mt-6 text-base leading-8 text-slate-600 md:text-lg">
                            Étudiant en 1ère année d'école d'ingénieur à l'esiee-it, je souhaite me spécialiser dans le développement
                            d’applications web. J’aime travailler sur des interfaces qui restent simples à utiliser tout en apportant
                            du rythme, de la clarté.
                        </p>
                        <p className="mt-4 text-base leading-8 text-slate-600 md:text-lg">
                            Je recherche une alternance pour consolider mes acquis sur des projets concrets, avec un
                            environnement où la qualité technique et l’expérience utilisateur comptent.
                        </p>

                        <div className="mt-8 grid gap-4 sm:grid-cols-3">
                            {strengths.map((strength) => (
                                <div key={strength} className="rounded-2xl border border-slate-200 bg-white/70 p-4">
                                    <div className="mb-3 h-2 w-12 rounded-full bg-[linear-gradient(90deg,#0ea5e9_0%,#22c55e_100%)]" />
                                    <p className="text-sm leading-6 text-slate-700">{strength}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative">
                        <div className="absolute left-6 top-8 hidden h-[calc(100%-4rem)] w-px bg-[linear-gradient(180deg,#0ea5e933,#22c55e66,#0f172a1f)] md:block" />
                        <div className="space-y-5">
                            {[...education].reverse().map((item, idx) => (
                                <article
                                    key={item.degree}
                                    className="glass-panel relative rounded-[1.75rem] p-6 transition-transform duration-300 hover:-translate-y-1 md:pl-12"
                                >
                                      <div className="absolute left-5 top-8 hidden h-4 w-4 rounded-full border-4 border-sky-100 bg-sky-500 shadow-[0_0_0_10px_#0ea5e914] md:block" />
                                    <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                                        <div>
                                            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-600">Étape {education.length - idx}</p>
                                            <h3 className="mt-2 text-2xl font-bold text-slate-950">{item.degree}</h3>
                                            <p className="mt-1 text-base font-medium text-slate-700">{item.school}</p>
                                        </div>
                                        <span className="rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-700">
                                            {item.years}
                                        </span>
                                    </div>
                                    <p className="mt-4 max-w-xl text-base leading-7 text-slate-600">{item.details}</p>
                                </article>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}