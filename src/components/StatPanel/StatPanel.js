import React from 'react';
import styles from './StatPanel.css';

const fillTemplate = require('es6-dynamic-template');

const StatPanel = (props) => {

    const title = fillTemplate(props.config.titleTemplate, props.data);
    const stat = fillTemplate(props.config.statTemplate, props.data);
    const diff = fillTemplate(props.config.diffTemplate, props.data);
    const info = fillTemplate(props.config.infoTemplate, props.data);

    const className = props.selected ? 'StatPanel selected' : 'StatPanel';
    const diffIcon = props.data.diff < 0 ? 'fas fa-arrow-down' : 'fas fa-long-arrow-alt-up';
    const diffClass = props.data.diff < 0 ? 'diff red' : 'diff green';

    return (
        <div className={className} onClick={props.onClick}>
            <div className="title">{title}</div>
            <div className="stat">{stat}</div>
            <div className={diffClass}><i className={diffIcon}></i> {diff}</div>
            <div className="info">{info}</div>
        </div>
    );
}

export default StatPanel;