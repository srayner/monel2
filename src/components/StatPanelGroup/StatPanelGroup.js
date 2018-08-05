import React, { Component } from 'react';
import StatPanel from '../StatPanel/StatPanel';
import './StatPanelGroup.css';

class StatPanelGroup extends Component {

    state = {
        selected: this.props.items[0].id
    }

    itemClicked = (item) => {
        this.setState({
            selected: item.id
        });
    }

    render() {
        const items = this.props.items.map(item => {
            return (
                <StatPanel
                    onClick={() => this.itemClicked(item)}
                    selected={item.id === this.state.selected}
                    config={item.config}
                    data={item.data}
                    key={item.id}
                /> 
            )
        });

        return (
            <div className="StatPanelGroup">
                {items}
            </div>
        );
    }
}

export default StatPanelGroup;
