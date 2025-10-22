# Portfolio — Présentation

Un projet de portfolio personnel construit avec React + Vite. Conçu pour présenter des réalisations, un CV et des moyens de contact de façon légère et performante.

## Principales fonctionnalités
- Pages de présentation : Accueil, Projets, À propos, Contact
- Chargement rapide grâce à Vite et HMR en développement
- Structure modulaire des composants React
- Configuration ESLint pour un code propre (option TypeScript possible)
- Optimisé pour le déploiement statique

## Installation
1. Cloner le dépôt :
```bash
git clone <URL_DU_REPO>
cd <NOM_DU_REPO>
```
2. Installer les dépendances :
```bash
npm install
# ou
yarn
```

## Lancer en local
```bash
npm run dev
# ou
yarn dev
```
Ouvrir http://localhost:5173 (ou l'URL indiquée dans la console).

## Build pour production
```bash
npm run build
# ou
yarn build
```
Le dossier de sortie (dist) est prêt pour le déploiement statique.

## Structure du projet (extrait)
- src/ — code source (composants, pages, styles)
- public/ — assets statiques
- vit.config.* — configuration Vite
- package.json — scripts et dépendances

## Personnalisation rapide
- Modifier les composants et les routes dans src/
- Mettre à jour les métadonnées (title, description) dans index.html
- Remplacer les images et contenus dans public/ et src/assets/

## Technologies
- React
- Vite
- ESLint (configurable)

