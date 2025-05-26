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




Theoretical Summary



Introduction
State management in React Native involves handling data that changes over time, ensuring UI consistency and performance. As apps scale, managing state complexity becomes critical. This summary explores core concepts, challenges, and strategies to simplify state management.
________________________________________
Core Concepts
1.	Component State (Local State)
o	Managed via useState or useReducer within individual components.
o	Ideal for UI-specific state (e.g., form inputs, modal visibility).
2.	Context API
o	Provides global state across components without prop drilling.
o	Best for static or low-frequency updates (e.g., themes, user auth).
3.	Third-Party Libraries
o	Redux: Predictable state container with a single source of truth (boilerplate-heavy).
o	MobX: Observable-based state management with minimal boilerplate.
o	Zustand/Jotai/Recoil: Lightweight alternatives for atomic or modular state.
________________________________________
Challenges
1.	Prop Drilling
o	Passing state through multiple layers of components, leading to messy code.
2.	Re-rendering
o	Unoptimized state updates causing unnecessary UI re-renders and performance hits.
3.	Asynchronous State
o	Handling side effects (e.g., API calls) while maintaining state consistency.
4.	Scalability
o	Ensuring state architecture remains maintainable as the app grows.
________________________________________
Simplification Strategies
1.	Use Built-in React Hooks
o	Start with useState for local state; leverage useReducer for complex logic.
o	Combine Context + useReducer for medium-scale global state.
2.	State Colocation
o	Keep state close to where it’s used to minimize global dependencies.
3.	Optimal Use of Context API
o	Split contexts by domain (e.g., AuthContext, SettingsContext) to avoid over-fetching.
4.	Adopt Lightweight Libraries
o	Use Zustand or Jotai for granular state control without boilerplate.
o	Recoil for state derived from atoms (e.g., filtered lists).
5.	State Normalization
o	Structure state like a database (e.g., using IDs for entities) to avoid duplication.
________________________________________
Best Practices
1.	Memoization
o	Apply React.memo, useMemo, and useCallback to prevent redundant re-renders.
2.	Modularize State Logic
o	Split state into slices (e.g., userSlice, cartSlice) for maintainability.
3.	Selector Patterns
o	Derive computed state using selectors (e.g., Redux’s createSelector).
4.	Avoid Over-Globalization
o	Reserve global state for truly app-wide data; keep other states local.
________________________________________
Summary
Effective state management in React Native hinges on balancing simplicity and scalability:
•	Small Apps: Built-in hooks (useState, useReducer) and Context API suffice.
•	Mid/Large Apps: Adopt libraries like Redux (predictability) or Zustand (simplicity).
•	Atomic State: Use Recoil/Jotai for fine-grained reactivity.
Prioritize colocation, normalization, and memoization to optimize performance. Choose tools based on app requirements, and avoid premature optimization. By structuring state thoughtfully, developers can reduce complexity and enhance maintainability in React Native apps.

