import React, { Component } from 'react';
import Person from './Person/Person';

import './App.css';

class App extends Component {
  // If the state changes, it will make React re-render our DOM
  // For now, we will use class to manage state
  
  // React Hooks allows managing state in functional components post React 16.8
  // useState is a React Hook used for managing state in functional components

  // Stateful / Container / Smart Component - best to have as less as possible, easier to maintain and manage
  state = {
    persons: [ 
      { name: 'Shuvam', age: 25 }, 
      { name: 'Neethu', age: 24 }, 
      { name: 'Parth', age: 26 }, 
    ],
    otherState: 'Some value',
    showPersons: false,
  }

  switchNameHandler = newName => {
    console.log('New name passed: ', newName);
    // this.state.persons[0].name=  'Max'; // DO NOT DO THIS, React does not accept this
    // Merges it with existing state, therefore retaining otherState
    this.setState( {
      persons: [
        { name: newName, age: 26 }, 
        { name: 'Neethu Mohanan', age: 25 }, 
        { name: 'Parth Satija', age: 27 }, 
      ]
    });
  }

  nameChangeHandler = (event) => {
    this.setState( {
      persons: [
        { name: 'Shuvam Nandi', age: 25 },
        { name: event.target.value, age: 24 },
        { name: 'Parth Satija', age: 26 },
      ]
    });
  }

  togglePersonsHandler = (event) => {
    const doesShow = this.state.showPersons;
    this.setState( {
      showPersons: !doesShow
    });
  }

  render() {
    const buttonStyle = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
    }
    return (
      <div className="App">
        <h1>I am a React Application</h1>
        <h2>Hello World!</h2>
        <p>This is really working!</p>
        <button 
          style={buttonStyle}
          onClick={this.togglePersonsHandler}
          >Show/Hide Names
          </button>
        {this.state.showPersons ? <div>
          <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age} 
          click={()=> this.switchNameHandler('Needuuu!')}
          nameChanged={this.nameChangeHandler}>
            My hobbies None
          </Person>
          <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          nameChanged={this.nameChangeHandler}/>
          <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age}
          nameChanged={this.nameChangeHandler}/>
        </div>: null}
      </div>
    );
  }
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