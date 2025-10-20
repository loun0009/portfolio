import { Code2, Database, Globe, Laptop, Server, Zap } from 'lucide-react';

const skillCategories = [
  {
    icon: Code2,
    title: 'Frontend',
    color: 'from-blue-500 to-cyan-500',
    skills: ['React', 'TypeScript', 'Tailwind CSS', 'HTML/CSS']
  },
  {
    icon: Server,
    title: 'Backend',
    color: 'from-emerald-500 to-teal-500',
    skills: ['Python', 'API REST', 'PHP','Symfony', 'c#']
  },
  {
    icon: Database,
    title: 'Base de données',
    color: 'from-orange-500 to-red-500',
    skills: ['PostgreSQL', 'MongoDB','Prisma', 'SQL']
  },
  {
    icon: Globe,
    title: 'DevOps & Cloud',
    color: 'from-violet-500 to-purple-500',
    skills: ['Docker','GitHub Actions','GitLab', 'CI/CD']
  },
  {
    icon: Laptop,
    title: 'Outils',
    color: 'from-pink-500 to-rose-500',
    skills: ['Git', 'VS Code', 'Figma', 'Postman', 'Linux', 'PhpStorm', 'WebStorm']
  },
  {
    icon: Zap,
    title: 'Soft Skills',
    color: 'from-amber-500 to-yellow-500',
    skills: ['Agile/Scrum', 'Résolution de problème', "Travail d'équipe", 'Communication']
  }
];

export default skillCategories;
