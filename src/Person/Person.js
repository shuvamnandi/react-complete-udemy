import React from 'react';

// Stateless / Presentational / Dumb Component

const Person = (props) => {
    return (
        <div className="person">
            <p onClick={props.click}>Name: {props.name} Age: {props.age} </p>
            <p>{props.children}</p>
        </div>
    );
}

export default Person;