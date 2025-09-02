import React, { Component } from 'react';

// Type des props (vide ici car il n'y a pas de props)
type CounterProps = {};

// Type de l'état avec un compteur count de type nombre
type CounterState = {
  count: number;
};

// Classe Counter qui étend React.Component avec les types de props et d'état
class Counter extends Component<CounterProps, CounterState> {
  // Initialisation de l'état avec count à 0
  state: CounterState = {
    count: 0,
  };

  // Méthode pour augmenter le compteur de 1
  increment = (): void => {
    this.setState({ count: this.state.count + 1 });
  };

  // Affichage du compteur et du bouton pour l'incrémenter
  render() {
    return (
      <div>
        <p>Count : {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default Counter;
