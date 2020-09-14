import React, { Component } from 'react';
import Person from './Person/Person';
import Radium, { StyleRoot } from 'radium';

import './App.css';

class App extends Component {
  // If the state changes, it will make React re-render our DOM
  // For now, we will use class to manage state
  
  // React Hooks allows managing state in functional components post React 16.8
  // useState is a React Hook used for managing state in functional components

  // Stateful / Container / Smart Component - best to have as less as possible, easier to maintain and manage
  state = {
    persons: [ 
      { id: 0, name: 'Shuvam', age: 25 }, 
      { id: 1, name: 'Neethu', age: 24 }, 
      { id: 2, name: 'Divesh', age: 24 }, 
      { id: 3, name: 'Parth', age: 26 }, 
    ],
    otherState: 'Some value',
    showPersons: false,
  }

  togglePersonsHandler = (event) => {
    const doesShow = this.state.showPersons;
    this.setState( {
      showPersons: !doesShow
    });
  }
  
  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  nameChangedHandler = (event, id) => {
    const personIdx = this.state.persons.findIndex(p=>{
      return p.id === id
    });
    const person = {
      ...this.state.persons[personIdx]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIdx] = person;

    this.setState({persons:persons});
  }
  
  render() {
    const buttonStyle = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black',
      }
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          { this.state.persons.map((person, index) => {
            return <Person 
              click={() => this.deletePersonHandler(index)}
              key={person.id}
              name={person.name} 
              age={person.age}
              nameChanged={(event)=> this.nameChangedHandler(event, person.id)}/>;
          } ) }
        </div>
      );
      buttonStyle.backgroundColor = 'red';
      buttonStyle[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black',
      }
    }

    const classes = []; // 'red bold'

    if (this.state.persons.length <=2 ) {
      classes.push('red'); // classes = ['red']
    }
    if (this.state.persons.length <=1 ) {
      classes.push('bold'); // classes = ['red', 'bold']
    }

    return (
      <StyleRoot>
        <div className="App">
          <h1>I am a React Application</h1>
          <h2>Hello World!</h2>
          <p className={classes.join(' ')}>This is really working!</p>
          <button 
            style={buttonStyle}
            onClick={this.togglePersonsHandler}>
            Toggle Persons
          </button>
          {persons}
        </div>
      </StyleRoot>
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

  // Radium works with both functional and Class based components
export default Radium(App);