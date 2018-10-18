import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FlipMove from 'react-flip-move';

import Student from './Student';

export default class StudentList extends Component {
  renderStudents() {
    if (this.props.students.length === 0) {
      return(
        <div className='item'>
          <p className='item__message'>Add Students To Student Portal</p>
        </div>
      );
    } else {
      return this.props.students.map((student) => {
        return <Student key={student._id} student={student} />;
      });
    }
  }

  render() {
    return(
      <div>
        <FlipMove maintainContainerHeight={true}>
          {this.renderStudents()}
        </FlipMove>
      </div>
    );
  }
}

StudentList.propTypes = {
  students: PropTypes.array.isRequired
}
