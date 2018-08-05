import React from 'react';
import './Card.css';

const Card = (props) => {
    var className = 'card';
    if (props.hasOwnProperty('type')) {
        className += ' ' + props.type;
    }
    return (
        <div className={className}>
            {props.children}
        </div>
    );
}

export default Card;