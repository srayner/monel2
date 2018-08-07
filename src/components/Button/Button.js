import React from 'react';
import './Button.css';

const Button = (props) => {

    let className = 'Button';
    if (props.hasOwnProperty('type')) {
        className = className + ' ' + props.type;
    }

    return (
        <button className={className}>
            {props.text}
        </button>
    );
}

export default Button;