# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.





Simplifier la gestion des états dans React Native : Résumé Théorique

La gestion des états dans React Native repose sur des concepts fondamentaux pour structurer les données dynamiques et les interactions au sein d’une application. Voici une synthèse théorique des principes clés :

1. Définition et Enjeux
État : Représentation dynamique des données d’un composant ou de l’application à un instant donné.

Problématiques :

Complexité : Coordination des états entre composants imbriqués.

Maintenabilité : Éviter la redondance et les effets de bord.

Performance : Optimiser les rendus et éviter les mises à jour inutiles.

Scalabilité : Adapter la solution à la croissance de l’application.

2. Paradigmes de Gestion d’État
a. État Local vs. Global
Local : Limité à un composant (ex: useState, useReducer).

Avantage : Isolation et simplicité.

Limite : Non partageable entre composants distants.

Global : Accessible à l’échelle de l’application (ex: Context API, Redux).

Avantage : Centralisation des données critiques (ex: thème, utilisateur).

Risque : Surcharge si mal architecturé.

b. Flux unidirectionnel
Principe : Les données circulent de parent à enfant via les props.

Modèles :

Flux (Redux) : Actions → Reducers → Store → Composants.

Réactivité (MobX) : Observation automatique des changements d’état.

c. État Atomique (Recoil, Jotai)
Concept : Décomposition de l’état en unités modulaires ("atomes") réutilisables et combinables.

Avantage : Flexibilité et granularité pour les applications complexes.

3. Principes Fondamentaux
Immuabilité :

Les états ne sont pas modifiés directement, mais remplacés par de nouvelles versions (ex: useState, Redux).

Avantage : Traçabilité des changements et prévention des bugs.

Séparation des préoccupations :

Découpler la logique métier (state management) de l’UI.

Réactivité :

Mise à jour automatique de l’UI lors des changements d’état (ex: setState, MobX observables).

Optimisation :

Limiter les re-rendus avec des mémoïsations (React.memo, useMemo).

4. Modèles Architecturaux
a. Flux Architecture (Redux)
Cycle unidirectionnel :

Action → Reducer → Store → UI.

Middleware : Gère les effets de bord (ex: redux-thunk pour les appels API).

b. Modèle Réactif (MobX)
Observation : Les composants "observent" les états et se mettent à jour automatiquement.

Avantage : Réduction du boilerplate, adapté aux applications riches en interactions.

c. Contexte Hiérarchique (Context API)
Propagation : Partage d’état via une arborescence de fournisseurs et consommateurs.

Limite : Peut entraîner des rendus superflus si mal optimisé.

5. Critères de Choix d’une Solution
Taille de l’application :

Petites apps : useState + Context API.

Apps complexes : Redux, Zustand, ou MobX.

Type d’état :

Données serveur : React Query ou Apollo Client (pour GraphQL).

État temporaire : État local.

Équipe :

Expérience avec les concepts (Flux, OOP, réactivité).

6. Bonnes Pratiques Théoriques
Single Source of Truth : Centraliser l’état critique pour éviter les incohérences.

Dérivation d’état : Calculer les états dérivés via des selectors (ex: reselect avec Redux).

Testing : Isoler la logique d’état pour des tests unitaires fiables.

Documentation : Clarifier la structure de l’état et ses flux de mise à jour.

7. Tendances Modernes
État atomique (Recoil, Jotai) : Modularité et composition.

Zustand : Minimalisme et simplicité, sans boilerplate.

Server State Management : Outils comme React Query ou SWR pour synchroniser les données client-serveur.

Conclusion
La gestion des états dans React Native s’articule autour de concepts universels (immuabilité, flux unidirectionnel, réactivité) et outils adaptatifs (Context API, Redux, MobX). Le choix dépend de la complexité de l’application, des besoins en performance et de l’expérience de l’équipe. L’objectif reste de structurer l’état pour le rendre prévisible, maintenable et évolutif.

# funbook-app
