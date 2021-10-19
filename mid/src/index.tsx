import * as _ from 'lodash';
import ReactDOM from 'react-dom';
import React from 'react';

const App = () => {
  return <h1>This is my React app!</h1>;
}

ReactDOM.render(<App />, document.getElementById('app'));

// function component() {
//     const element = document.createElement('div');

//     // Lodash, currently included via a script, is required for this line to work
//     element.innerHTML = _.join(['Hello', 'world2'], ' ');

//     return element;
//   }

//   document.body.appendChild(component());