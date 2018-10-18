import React, { Component, Fragment } from 'react';

import Title from './Title';
import AddStudent from './AddStudent';
import StudentList from './StudentList';

export default class App extends Component {
  render() {
    return(
      <Fragment>
        <Title title={this.props.title} subtitle={this.props.subtitle} />
        <div className='wrapper'>
          <StudentList students={this.props.students} />
          <AddStudent />
        </div>
      </Fragment>
    );
  }
}
