import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Students } from '../api/students';

export default class Student extends Component {
  render() {
    return(
      <div className='item'>
        <div className='student'>
          <div>
            <h3>Name: {this.props.student.name}</h3>
            <p>Email: {this.props.student.email}</p>
            <p>Phone: {this.props.student.phone}</p>
            <p>Date of Birth: {this.props.student.birthDate}</p>
          </div>
          <div className='student__actions'>
            <button className='button button--round' onClick={() => Students.remove(this.props.student._id)}>X</button>
          </div>
        </div>
      </div>
    );
  }
}
