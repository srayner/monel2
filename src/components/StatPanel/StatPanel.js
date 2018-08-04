import React from 'react';
import styles from './StatPanel.css';

const fillTemplate = require('es6-dynamic-template');

const StatPanel = (props) => {

    const title = fillTemplate(props.config.titleTemplate, props.data);
    const stat = fillTemplate(props.config.statTemplate, props.data);
    const diff = fillTemplate(props.config.diffTemplate, props.data);
    const info = fillTemplate(props.config.infoTemplate, props.data);

    return (
        <div className="statPanel">
            <div className="title">{title}</div>
            <div className="stat">{stat}</div>
            <div className="diff">{diff}</div>
            <div className="info">{info}</div>
        </div>
    );
}

export default StatPanel;