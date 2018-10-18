import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';

import App from '../imports/ui/App';
import { Students } from '../imports/api/students';

Meteor.startup(() => {
  Tracker.autorun(() => {
    let students = Students.find().fetch();
    console.log(students);
    let title = 'Student Portal';
    let subtitle = 'Created By Robin';
    ReactDOM.render(<App title={title} subtitle={subtitle} students={students}/>, document.getElementById('app'));
  });
});
