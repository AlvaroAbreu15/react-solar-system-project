import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class Title extends Component {
  render() {
    return (
      <h2>{ this.props.headline }</h2>
    );
  }
}

export default Title;
