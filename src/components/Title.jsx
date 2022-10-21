import PropTypes from 'prop-types';
import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class Title extends Component {
  render() {
    const { headline } = this.props;
    return (
      <h2>{ headline }</h2>
    );
  }
}

Title.propTypes = {
  headline: PropTypes.string.isRequired,
};

// Title.propTypes = {
//   headline: PropTypes.shape({
//     planets: PropTypes.string.isRequired,
//   }),
// };

// Title.default = {
//   headline: {},
// };

export default Title;