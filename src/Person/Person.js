import React from 'react';
import Radium from 'radium';

import './Person.css';

// Stateless / Presentational / Dumb Component

const Person = (props) => {
    const style = {
        '@media (min-width: 700px)': {
            width: '450px'
        }
    }

    return (
        <div className="Person" style={style}>
            <p onClick={props.click}>Name: {props.name} Age: {props.age} </p>
            <p>{props.children}</p>
            <input type="text" onChange={props.nameChanged} value={props.name}/>
        </div>
    );
}

export default Radium(Person);