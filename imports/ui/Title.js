import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Title extends Component {
  render() {
    return(
      <div className='title-bar'>
        <div className='wrapper'>
          <h1>{this.props.title}</h1>
          <h3>{this.props.subtitle}</h3>
        </div>
      </div>
    );
  }
}

Title.propTypes = {
  title: PropTypes.string.isRequired
};
