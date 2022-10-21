import React, { Component } from 'react';
import Header from './Header';
import Title from './Title';

class SolarSystem extends Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Header />
        <Title />
      </div>
    );
  }
}

export default SolarSystem;
