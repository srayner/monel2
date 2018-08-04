import React from 'react';
import styles from './CardFooter.css';

const CardFooter = (props) => {
    return (
        <div class="CardFooter">
            {props.children}
        </div>
    );
}

export default CardFooter;