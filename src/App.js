import React, { useState } from 'react';
import Person from './Person/Person';

import './App.css';

function App (props) {
  // If the state changes, it will make React re-render our DOM
  // For now, we will use class to manage state
  
  // React Hooks allows managing state in functional components post React 16.8
  // useState is a React Hook used for managing state in functional components

  const [ personsState, setPersonsState ] = useState( {
      persons: [ 
        { name: 'Shuvam', age: 25 }, 
        { name: 'Neethu', age: 24 }, 
        { name: 'Parth', age: 26 }, 
      ]
    }
  );

  const [ otherState, setOtherState ] = useState( 'Some value' );

  const switchNameHandler = event => {
    console.log('Was clicked!', event.target);
    //this.state.persons[0].name=  'Max'; // DO NOT DO THIS, React does not accept this
    // Does not merge it with existing state, therefore deletings otherState
    setPersonsState( {
      persons: [
        { name: 'Shuvam', age: 26 }, 
        { name: 'Neethu', age: 25 }, 
        { name: 'Parth', age: 27 }, 
      ]
  });
  }

  return (
    <div className="App">
      <h1>I am a React Application</h1>
      <h2>Hello World!</h2>
      <p>This is really working!</p>
      <button onClick={switchNameHandler}>Switch Names</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age}>
        My hobbies None
      </Person>
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age}/>
      <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/>
    </div>
  );
  }
  // return (
  //   <div className="App">
  //     <h1>I am a React Application</h1>
  //     <h2>Hello World!</h2>
  //   </div>
  // );
  // is equivalent to: 
  // return React.createElement(
  //   'div', {className: 'App'}, '', 
  //   React.createElement('h1', null, 'I am a React App' ), 
  //   React.createElement('h2', null, 'Hello World!')
  // );

export default App;

// state = {
//   persons: [ 
//     { name: 'Shuvam', age: 25 }, 
//     { name: 'Neethu', age: 24 }, 
//     { name: 'Parth', age: 26 }, 
//   ],
//   otherState: 'Some value'  
// }

// switchNameHandler = event => {
//   console.log('Was clicked!', event.target);
//   //this.state.persons[0].name=  'Max'; // DO NOT DO THIS, React does not accept this
//   // Merges it with existing state, therefore retaining otherState
//     this.setState( {
//     persons: [
//       { name: 'Shuvam', age: 26 }, 
//       { name: 'Neethu', age: 25 }, 
//       { name: 'Parth', age: 27 }, 
//   ]
// });
// }