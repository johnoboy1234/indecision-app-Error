// import { double } from './utils.js'
// console.log(double(8));

// import isSenior, { isAdult, canDrink} from './adult.js'
// console.log(isSenior(75));

// import validator from 'validator';

// console.log(validator.isEmail('johnd@hotmail.com'));

import React from 'react';
import ReactDOM from 'react-dom';

const template = React.createElement('p', {}, 'testing 123');
ReactDOM.render(template, document.querySelector('#app'));