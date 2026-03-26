import { Code2, Database, Globe, Laptop, Server, Zap } from 'lucide-react';

const skillCategories = [
  {
    icon: Code2,
    title: 'Frontend',
    color: 'from-blue-500 to-cyan-500',
    summary: 'Construction d’interfaces, composants et intégration responsive.',
    detail: 'Je suis le plus à l’aise sur la couche interface : architecture de composants, intégration responsive, animations simples et hiérarchie visuelle propre.',
    skills: ['React', 'TypeScript', 'Tailwind CSS', 'HTML/CSS'],
    metrics: [
      { label: 'Intégration UI', value: 60 },
      { label: 'Composants React', value: 60 },
      { label: 'Responsive', value: 70 },
    ]
  },
  {
    icon: Server,
    title: 'Backend',
    color: 'from-emerald-500 to-teal-500',
    summary: 'APIs, logique serveur et structuration fonctionnelle.',
    detail: 'Je peux contribuer sur la logique applicative, les échanges client-serveur et la mise en place d’une base backend cohérente, notamment en PHP ou autour d’APIs.',
    skills: ['Python', 'API REST', 'PHP','Symfony', 'C#'],
    metrics: [
      { label: 'API et logique métier', value: 70 },
      { label: 'Architecture', value: 70 },
      { label: 'Qualité de code', value: 70 },
    ]
  },
  {
    icon: Database,
    title: 'Base de données',
    color: 'from-orange-500 to-red-500',
    summary: 'Modélisation, requêtes et persistance des données.',
    detail: 'Je sais travailler avec des schémas relationnels, écrire des requêtes SQL utiles et connecter les données à une application avec des outils comme Prisma.',
    skills: ['PostgreSQL', 'MongoDB','Prisma', 'SQL'],
    metrics: [
      { label: 'Requêtes SQL', value: 60 },
      { label: 'Modélisation', value: 50 },
      { label: 'ORM / Prisma', value: 40 },
    ]
  },
  {
    icon: Globe,
    title: 'DevOps & Cloud',
    color: 'from-violet-500 to-purple-500',
    summary: 'Automatisation, conteneurs et cycle de livraison.',
    detail: 'Je ne me limite pas à l’interface : je peux aussi intervenir sur la partie outillage, CI/CD et conteneurisation pour rendre un projet plus robuste.',
    skills: ['Docker','GitHub Actions','GitLab', 'CI/CD'],
    metrics: [
      { label: 'Docker', value: 55 },
      { label: 'Pipelines CI/CD', value: 25 },
      { label: 'Versioning et process', value: 50 },
    ]
  },
  {
    icon: Laptop,
    title: 'Outils',
    color: 'from-pink-500 to-rose-500',
    summary: 'Environnement quotidien pour prototyper, tester et livrer.',
    detail: 'Ces outils me servent à travailler efficacement, documenter mes essais et garder une bonne vitesse d’exécution dans les projets individuels comme collectifs.',
    skills: ['Git', 'VS Code', 'Figma', 'Postman', 'Linux', 'PhpStorm', 'WebStorm'],
    metrics: [
      { label: 'Workflow Git', value: 70 },
      { label: 'Tests API', value: 50 },
      { label: 'Prototypage', value: 40 },
    ]
  },
  {
    icon: Zap,
    title: 'Soft Skills',
    color: 'from-amber-500 to-yellow-500',
    summary: 'Collaboration, communication et résolution pragmatique.',
    detail: 'Je privilégie une communication claire, un bon partage d’avancement et une manière de résoudre les problèmes qui reste simple, structurée et utile pour l’équipe.',
    skills: ['Agile/Scrum', 'Résolution de problème', "Travail d'équipe", 'Communication'],
    metrics: [
      { label: 'Travail d’équipe', value: 80 },
      { label: 'Communication', value: 50 },
      { label: 'Autonomie', value: 70 },
    ]
  }
];

export default skillCategories;
