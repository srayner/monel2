import React from 'react';
import styles from './Card.css';

const Card = (props) => {
    var className = 'card';
    if (props.hasOwnProperty('style')) {
        className += ' ' + props.style;
    }
    return (
        <div className={className}>
            {props.children}
        </div>
    );
}

export default Card;