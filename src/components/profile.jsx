export default function Profile() {
    const education = [
        {
            school: "Lycée Charles Baudelaire",
            degree: "Bac Général",
            years: "2019 - 2012",
            details: "Spécialité maths & NSI"
        },
        {
            school: "IUT de Reims",
            degree: "DUT informatique",
            years: "2022 - 2024",
            details: "Déveleloppement web"
        },
        {
            school: "IUT de Reims",
            degree: "BUT informatique",
            years: "2022 - 20XX",
            details: "Réalisation d'applications : conception, développement, validation"
        }
    ];

    return (
        <section id="profile" className="py-20 bg-slate-50">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-5xl font-bold text-slate-900 mb-4">À propos de moi</h2>
                    <p className="text-lg text-slate-700 leading-relaxed">
                        Étudiant en 3ᵉ année de BUT Informatique à l'IUT de Reims, je me spécialise dans le développement d'applications web. Au cours de ma formation, j'ai mené plusieurs projets en React et Node.js, travaillé avec des bases de données et acquis des compétences en conception, tests et déploiement. <br/> Je suis à la recherche d'un stage de fin d'études ou d'une alternance pour mettre en pratique mes acquis et contribuer à des projets qui me permettront de développer différentes compétences.
                    </p>

                    <div className="mt-10 flex flex-wrap justify-center gap-6">
                        {education.map((item, idx) => (
                            <div
                                key={idx}
                                className="w-40 h-40 md:w-48 md:h-48 flex flex-col items-center justify-center rounded-full bg-gradient-to-br from-sky-400 to-indigo-600 text-white shadow-lg p-4 text-center transform transition hover:-translate-y-2"
                            >
                                <h3 className="font-semibold text-sm md:text-base">{item.school}</h3>
                                <p className="text-xs md:text-sm opacity-90 mt-1">{item.degree}</p>
                                <span className="text-xs md:text-sm opacity-80 mt-2">{item.years}</span>
                                <p className="text-[10px] md:text-xs opacity-90 mt-2">{item.details}</p>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}