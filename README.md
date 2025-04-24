# Astro SPA

Ce projet démontre comment créer une application monopage (SPA) avec Astro, en utilisant à la fois des composants Astro et React.

## 🚀 Fonctionnalités

- **Pages SPA** : Navigation fluide sans rechargement de page
- **Hydration partielle** : Les composants React ne sont hydratés que lorsque nécessaire
- **Tailwind CSS** : Styling moderne et réactif
- **Composants interactifs** : Démonstration d'interactivité avec React

## 📂 Structure du projet

```
/
├── public/
│   └── images/
├── src/
│   ├── components/
│   │   ├── AboutSection.tsx         # Section À propos
│   │   ├── ContactSection.tsx       # Section Contact
│   │   ├── HeroSection.tsx          # Section Héro
│   │   ├── InteractiveCounter.tsx   # Composant React interactif
│   │   ├── OffersSection.tsx        # Section Offres
│   │   ├── TestimonialsSection.tsx  # Section Témoignages
│   │   └── types.d.ts               # Définitions de types
│   ├── layouts/
│   │   └── Layout.astro             # Layout principal
│   ├── pages/
│   │   ├── index.astro              # Page d'accueil
│   │   ├── spa.astro                # Page SPA (Astro)
│   │   └── react-spa.astro          # Page SPA (Astro + React)
│   └── styles/
│       └── global.css               # Styles globaux (Tailwind)
└── package.json
```

## 🛠️ Technologies utilisées

- [Astro](https://astro.build)
- [React](https://reactjs.org)
- [Tailwind CSS](https://tailwindcss.com)
- [TypeScript](https://www.typescriptlang.org)

## 🧞 Commandes

| Commande       | Action                               |
| :------------- | :----------------------------------- |
| `pnpm install` | Installe les dépendances             |
| `pnpm dev`     | Lance le serveur de développement    |
| `pnpm build`   | Construit le site pour la production |
| `pnpm preview` | Prévisualise le build en local       |

## 🌟 Pages d'exemple

1. **Page d'accueil** (`/index.astro`): Site vitrine classique avec sections
2. **Page SPA Astro** (`/spa.astro`): Démonstration d'une SPA basique avec Astro
3. **Page SPA React** (`/react-spa.astro`): Démonstration d'une SPA avec composants React interactifs

## ⚡ Performance

Le grand avantage d'Astro est qu'il permet de n'envoyer le JavaScript au client que lorsque c'est nécessaire. Cela se fait grâce aux directives client comme:

- `client:load` - Hydrate le composant dès que possible
- `client:visible` - Hydrate le composant lorsqu'il est visible
- `client:idle` - Hydrate le composant lorsque le navigateur est inactif
- `client:media` - Hydrate le composant si la requête média est satisfaite

## 🧠 Comment ça marche ?

Astro utilise une approche d'îlots interactifs ("islands architecture"), où chaque composant interactif est un "îlot" dans un "océan" de HTML statique. Cela permet de:

1. **Charger rapidement la page** - HTML statique, aucun JavaScript n'est nécessaire pour afficher la page
2. **Hydratation progressive** - Les composants React sont hydratés séparément, en fonction des besoins
3. **Expérience utilisateur améliorée** - La page est interactive tout en étant performante

## 📚 Ressources

- [Documentation Astro](https://docs.astro.build)
- [Guide React avec Astro](https://docs.astro.build/en/guides/integrations-guide/react/)
- [Tailwind CSS dans Astro](https://docs.astro.build/en/guides/integrations-guide/tailwind/)

```sh
npm create astro@latest -- --template basics
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/basics)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/basics)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/basics/devcontainer.json)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

![just-the-basics](https://github.com/withastro/astro/assets/2244813/a0a5533c-a856-4198-8470-2d67b1d7c554)

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

To learn more about the folder structure of an Astro project, refer to [our guide on project structure](https://docs.astro.build/en/basics/project-structure/).

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
