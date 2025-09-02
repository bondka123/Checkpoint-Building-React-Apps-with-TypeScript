# Conversion React en TypeScript

## Description

Ce projet contient deux composants React convertis en TypeScript :

- **Greeting** : un composant fonctionnel qui affiche un message de bienvenue avec un prénom passé en props.
- **Counter** : un composant de classe qui affiche un compteur et un bouton pour l'incrémenter.

---

## Commentaires sur la conversion

### Greeting

- Création d’un type `GreetingProps` pour typer la propriété `name` (string).
- Utilisation de `React.FC<GreetingProps>` pour typer le composant fonctionnel.
- Le composant affiche simplement "Hello, {name}!".

### Counter

- Création de types `CounterProps` (vide car pas de props) et `CounterState` (avec un nombre `count`).
- La classe `Counter` est typée avec `Component<CounterProps, CounterState>`.
- L’état est initialisé avec `count` à 0.
- La méthode `increment` met à jour le compteur en ajoutant 1.
- Le rendu affiche le compteur et un bouton pour l’incrémenter.

---

