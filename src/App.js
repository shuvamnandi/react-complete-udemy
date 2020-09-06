import React, { Component } from 'react';
import Person from './Person/Person';

import './App.css';

class App extends Component {
  // React Hooks allows managing state in functional components post React 16.8
  // For now, we will use class to manage state
  // If the state changes, it will make React re-render our DOM
  state = {
    persons: [ 
      { name: 'Shuvam', age: 25 }, 
      { name: 'Neethu', age: 24 }, 
      { name: 'Parth', age: 26 }, 
    ],
    otherState: 'Some value'  
  }

  switchNameHandler = event => {
    console.log('Was clicked!', event.target);
    //this.state.persons[0].name=  'Max'; // DO NOT DO THIS, React does not accept this
    this.setState( {
      persons: [
        { name: 'Shuvam', age: 26 }, 
        { name: 'Neethu', age: 25 }, 
        { name: 'Parth', age: 27 }, 
    ]
  });
  }

  render() {
    return (
      <div className="App">
        <h1>I am a React Application</h1>
        <h2>Hello World!</h2>
        <p>This is really working!</p>
        <button onClick={this.switchNameHandler}>Switch Names</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}>
          My hobbies None
        </Person>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
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
}

export default App;