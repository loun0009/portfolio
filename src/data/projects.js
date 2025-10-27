import cinema from '../assets/cinema.png';
import snippets from '../assets/snippets.png';
import manager from '../assets/manager.png';
import gestion from '../assets/gestion.png';
import portfolio from '../assets/portfolio.png';

const projects = [
  {
    title: "Gestionnaire d'emploi du temps",
    description: "Projet scolaire en groupe d'application web de gestion d'emploi du temps de professeur grâce à l'importation d'un tableau excel, ou par attribution de cours sur l'application.",
    image: gestion,
    tags: ['JavaScript','React', 'PHP', 'Symfony', 'Tailwind'],
    github: 'https://github.com/loun0009/Projet-gestion',
  },
  {
    title: 'Liste de snippets',
    description: 'Petit site web pour la decouverte de TypeScript et Prisma, le site permet de consulter et de rédiger des petits extrait de code comme des articles. ',
    image: snippets,
    tags: ['Javascript', 'TypeScript', 'CSS', 'Prisma'],
    github: 'https://github.com/loun0009/Snippets',
  },
  {
    title: 'Catalogue de film',
    description: 'Projet scolaire en binôme, voici un site un en PHP qui répertorie des films depuis une base de données avec leur synopsis et acteur principaux avec un style imposé. ',
    image: cinema,
    tags: ['PHP', 'CSS'],
    github: 'https://github.com/loun0009/Catalogue-film',
  },
  {
    title: 'Gitlab manager',
    description: 'Application web de gestion de projet Gitlab, permettant de visualiser les projets, les membres, les issues et les merge requests d\'un groupe Gitlab via l\'API Gitlab.',
    image: manager,
    tags: ['JavaScript', 'React Native','Expo', 'Gitlab API'],
    github: 'https://github.com/loun0009/gitlab-manager',
  },
  {
    title: 'Portfolio',
    description: 'Mon portfolio personnel, réalisé avec React et Tailwind CSS, pour présenter mes compétences, projets et expériences professionnelles.',
    image: portfolio,
    tags: ['JavaScript', 'React', 'Tailwind'],
    github: 'https://github.com/loun0009/portfolio',
  }
];

export default projects
