import React, { Component } from 'react';

import { Students } from '../api/students';

export default class AddPlayer extends Component {

  handleSubmit (e) {
    let studentName = e.target.studentName.value;
    let studentEmail = e.target.studentEmail.value;
    let studentPhone = e.target.studentPhone.value;
    let studentBirthDate = e.target.studentBirthDate.value;

    e.preventDefault();

    if (studentName && studentEmail && studentPhone && studentBirthDate) {
      e.target.studentName.value = '';
      e.target.studentEmail.value = '';
      e.target.studentPhone.value = '';
      e.target.studentBirthDate.value = '';

      Students.insert({
        name: studentName,
        email: studentEmail,
        phone: studentPhone,
        birthDate: studentBirthDate
      });
    }

  }

  render() {
    return(
      <div className='item'>
        <form className='form' onSubmit={this.handleSubmit}>
          <div>
            <ul className='list-style'>
              <li><input className='form__input' type='text' name='studentName' placeholder='Name' /></li>
              <li><input className='form__input' type='text' name='studentEmail' placeholder='Email' /></li>
            </ul>
          </div>
          <div>
            <ul className='list-style'>
              <li><input className='form__input' type='text' name='studentPhone' placeholder='Phone' /></li>
              <li><input className='form__input' type='text' name='studentBirthDate' placeholder='Birth Date : dd-mm-yyyy' /></li>
            </ul>
          </div>
          <button className='button'>Add Student</button>
        </form>
      </div>
    );
  }
}
