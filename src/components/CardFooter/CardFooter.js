import React from 'react';
import './CardFooter.css';

const CardFooter = (props) => {
    return (
        <div className="CardFooter">
            {props.children}
        </div>
    );
}

export default CardFooter;