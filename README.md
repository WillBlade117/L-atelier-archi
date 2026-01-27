# L'Atelier Architecture - Portfolio & Site Vitrine

Ce projet est le site web vitrine de l'agence d'architecture "L'Atelier". Il est conçu pour être **rapide**, **sécurisé** et **facilement administrable** par le client sans base de données complexe.

![Status](https://img.shields.io/badge/Status-Development-yellow)
![Astro](https://img.shields.io/badge/Astro-v5-orange)
![Tailwind](https://img.shields.io/badge/Tailwind-v4-blue)

## 🛠 Stack Technique

Ce projet utilise les dernières technologies web pour garantir performance et maintenabilité :

* **Framework :** [Astro 5](https://astro.build/) (Architecture "Islands" & Static Site Generation)
* **Styles :** [Tailwind CSS v4](https://tailwindcss.com/) (Intégration via Vite)
* **CMS (Administration) :** [Keystatic](https://keystatic.com/) (Mode Git-based, pas de DB)
* **Contenu :** [Markdoc](https://markdoc.dev/) (`.mdoc`) pour le contenu riche.
* **Langage :** TypeScript.

---

## 📝 Gestion du Contenu (CMS)

Le site intègre **Keystatic**, un CMS qui écrit directement les fichiers dans le dépôt Git.

### En Local (Développement)
* Allez sur `/keystatic`.
* Le mode est "Local". Aucune connexion n'est requise.
* Les modifications créent/modifient des fichiers directement dans `src/content/projects/`.

### En Production (Site en ligne)
* Allez sur `/keystatic`.
* Le mode passe automatiquement en "GitHub".
* Vous devez vous connecter avec un compte GitHub autorisé sur le dépôt.
* Chaque sauvegarde crée un **Commit** sur le dépôt.

---

## ✨ Fonctionnalités Clés

### 1. Slider "Avant / Après"
Un composant interactif personnalisé pour les rénovations.
* **Usage :** Dans l'admin, remplissez les champs "Image AVANT" et "Image APRÈS".
* **Tech :** HTML/CSS pur (Clip-path) + JS léger (pas de dépendance lourde).

### 2. Galerie Asymétrique
Une grille d'images intelligente dans les détails du projet.
* **Usage :** Ajoutez autant d'images que voulu dans le champ "Galerie" de l'admin.
* **Rendu :** Le code génère automatiquement une mise en page style "Magazine" (mélange de formats).

### 3. Architecture Markdoc
Le contenu des projets utilise `.mdoc` au lieu du Markdown standard, permettant l'intégration future de composants React complexes directement dans le corps du texte.

---

## 📂 Structure du Projet

```text
/
├── public/              # Fichiers statiques (favicon, robots.txt)
├── src/
│   ├── assets/          # Images (optimisées par Astro)
│   ├── components/      # Composants UI (Navbar, Footer, Slider...)
│   ├── content/         # Base de données fichiers (Projets .mdoc)
│   ├── layouts/         # Mises en page globales (SEO, Fonts)
│   ├── pages/           # Routes du site (index, agence, contact...)
│   └── styles/          # Configuration Tailwind v4
├── astro.config.mjs     # Config Astro + Tailwind plugin
├── keystatic.config.ts  # Schéma de la base de données CMS
└── tsconfig.json        # Config TypeScript