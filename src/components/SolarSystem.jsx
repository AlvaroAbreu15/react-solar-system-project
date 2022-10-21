import React, { Component } from 'react';
// import Header from './Header';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';

class SolarSystem extends Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        {planets.map((i) => (
          <PlanetCard planetName={ i.name } planetImage={ i.image } key={ i.name } />
        ))}
      </div>
    );
  }
}

export default SolarSystem;
