import cinema from '../assets/cinema.png';
import snippets from '../assets/snippets.png';
import snippets2 from '../assets/snippets2.png';
import gitlab1 from '../assets/gitlab1.png';
import gitlab2 from '../assets/gitlab2.PNG';
import gitlab3 from '../assets/gitlab3.PNG';
import gestion from '../assets/gestion.png';
import gestion2 from '../assets/gestion2.png';
import gestion3 from '../assets/gestion3.png';
import gestion4 from '../assets/gestion4.png';
import gestion5 from '../assets/gestion5.png';
import portfolio from '../assets/portfolio.png';
import sky1 from '../assets/sky1.PNG';
import sky2 from '../assets/sky2.PNG';
import sky3 from '../assets/sky3.PNG';
import sky4 from '../assets/sky4.PNG';
import sky5 from '../assets/sky5.PNG';
import sky6 from '../assets/sky6.jpg';
import sky7 from '../assets/sky7.PNG';
import sky8 from '../assets/sky8.PNG';
import sky9 from '../assets/sky9.PNG';
import sky10 from '../assets/sky10.jpg';

const projects = [
  {
    title: "Gestionnaire d'emploi du temps",
    description: "Projet scolaire en groupe d'application web de gestion d'emploi du temps de professeur grâce à l'importation d'un tableau excel, ou par attribution de cours sur l'application.",
    image: gestion,
    media: [
      { type: 'image', src: gestion, alt: "Gestionnaire d'emploi du temps" },
      { type: 'image', src: gestion2, alt: "Gestionnaire d'emploi du temps - aperçu 2" },
      { type: 'image', src: gestion3, alt: "Gestionnaire d'emploi du temps - aperçu 3" },
      { type: 'image', src: gestion4, alt: "Gestionnaire d'emploi du temps - aperçu 4" },
      { type: 'image', src: gestion5, alt: "Gestionnaire d'emploi du temps - aperçu 5" },
    ],
    tags: ['JavaScript','React', 'PHP', 'Symfony', 'Tailwind'],
    type: 'Projet scolaire',
    highlights: ['Gestion des imports Excel', 'Travail en équipe', 'Organisation métier des plannings'],
    github: 'https://github.com/loun0009/Projet-gestion',
  },
  {
    title: 'Liste de snippets',
    description: 'Petit site web pour la decouverte de TypeScript et Prisma, le site permet de consulter et de rédiger des petits extrait de code comme des articles. ',
    image: snippets,
    media: [
      { type: 'image', src: snippets, alt: 'Liste de snippets' },
      { type: 'image', src: snippets2, alt: 'Liste de snippets - détail' },
    ],
    tags: ['Javascript', 'TypeScript', 'CSS', 'Prisma'],
    type: 'Projet scolaire',
    highlights: ['Découverte de Prisma', 'Publication de contenu', 'Exploration TypeScript'],
    github: 'https://github.com/loun0009/Snippets',
  },
  {
    title: 'Catalogue de film',
    description: 'Projet scolaire en binôme, pour la découverte de PHP, voici un site un en PHP qui répertorie des films depuis une base de données avec leur synopsis et acteur principaux avec un style imposé. ',
    image: cinema,
    media: [{ type: 'image', src: cinema, alt: 'Catalogue de film' }],
    tags: ['PHP', 'CSS'],
    type: 'Projet scolaire',
    highlights: ['Connexion base de données', 'Travail en binôme', 'Respect d’un cadre visuel imposé'],
    github: 'https://github.com/loun0009/Catalogue-film',
  },
  {
    title: 'Gitlab manager',
    description: 'Application web de gestion de projet Gitlab, permettant de visualiser les projets, les membres, les issues et les merge requests d\'un groupe Gitlab via l\'API Gitlab.',
    image: gitlab1,
    media: [
      { type: 'image', src: gitlab1, alt: 'Gitlab manager' },
      { type: 'image', src: gitlab2, alt: 'Gitlab manager - aperçu 2' },
      { type: 'image', src: gitlab3, alt: 'Gitlab manager - aperçu 3' },
    ],
    tags: ['JavaScript', 'React Native','Expo', 'Gitlab API'],
    type: 'Application mobile',
    highlights: ['Consommation API GitLab', 'Visualisation de données projet', 'Expérience mobile avec Expo'],
    github: 'https://github.com/loun0009/gitlab-manager',
  },
  {
    title: 'Portfolio',
    description: 'Mon portfolio personnel, réalisé avec React et Tailwind CSS, pour présenter mes compétences, projets et mon parcours scolaire.',
    image: portfolio,
    media: [{ type: 'image', src: portfolio, alt: 'Portfolio' }],
    tags: ['JavaScript', 'React', 'Tailwind'],
    type: 'Vitrine',
    highlights: ['Direction visuelle sur mesure', 'Animations légères', 'Présentation structurée du profil'],
    github: 'https://github.com/loun0009/portfolio',
  },
  {
    title: 'Skyscent',
    description: "Projet personnel de création d'une application de recommandation de parfums, permettant de découvrir de nouveaux parfums en fonction de ses préférences et de celles des autres utilisateurs. avec une propsition quotidienne de parfum en fonction de la météo.",
    image: sky1,
    media: [
      { type: 'image', src: sky1, alt: 'Skyscent' },
      { type: 'image', src: sky2, alt: 'Skyscent - aperçu 2' },
      { type: 'image', src: sky3, alt: 'Skyscent - aperçu 3' },
      { type: 'image', src: sky4, alt: 'Skyscent - aperçu 4' },
      { type: 'image', src: sky5, alt: 'Skyscent - aperçu 5' },
      { type: 'image', src: sky6, alt: 'Skyscent - aperçu 6' },
      { type: 'image', src: sky7, alt: 'Skyscent - aperçu 7' },
      { type: 'image', src: sky8, alt: 'Skyscent - aperçu 8' },
      { type: 'image', src: sky9, alt: 'Skyscent - aperçu 9' },
      { type: 'image', src: sky10, alt: 'Skyscent - aperçu 10' },
    ],
    tags: ['TypeScript', 'React', 'Supabase','Expo'],
    type: 'Application mobile',
    highlights: ['Recommandation personnalisée', 'Découverte de nouveaux parfums', 'Expérience utilisateur immersive'],
    github: '',
  }
];

export default projects
