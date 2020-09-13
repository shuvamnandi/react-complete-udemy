import React from 'react';

import './Person.css';

// Stateless / Presentational / Dumb Component

const Person = (props) => {
    return (
        <div className="Person">
            <p onClick={props.click}>Name: {props.name} Age: {props.age} </p>
            <p>{props.children}</p>
            <input type="text" onChange={props.nameChanged} value={props.name}/>
        </div>
    );
}

export default Person;