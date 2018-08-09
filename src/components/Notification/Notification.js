import React from 'react';
import './Notification.css';

const Notification = (props) => {
    const close = (props.close) ? <span>x</span> : null;
    return (
        <div className="Notification">
            <p>{props.text}</p>
            {close}
        </div>
    )
}

export default Notification;