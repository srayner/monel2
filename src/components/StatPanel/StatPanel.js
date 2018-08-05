import React from 'react';
import './StatPanel.css';

const fillTemplate = (template, key, data) => {
    return template.replace('{' + key + '}', data);
}

const StatPanel = (props) => {

    const title = fillTemplate(props.config.titleTemplate, 'title', props.data.title);
    const stat = fillTemplate(props.config.statTemplate, 'stat', props.data.stat);
    const diff = fillTemplate(props.config.diffTemplate, 'diff', props.data.diff);
    const info = fillTemplate(props.config.infoTemplate, 'info', props.data.info);

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