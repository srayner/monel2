import React, { Component } from 'react';
import styles from './App.css';

import SideMenu from './components/SideMenu/SideMenu';
import menuConfig from './config/menu';

import Card from './components/Card/Card';

import StatPanelGroup from './components/StatPanelGroup/StatPanelGroup';
import stats from './config/stats';

import Table from './components/Table/Table';
import data from './config/data';

class App extends Component {
  
    state = {
        menuItems: menuConfig,
        stats: stats,
        data: data
    }

    render() {
        return (
            <div className="App">
                <SideMenu items={this.state.menuItems}/>
                <h2>Statistics</h2>
                <Card style="card-1">
                    <StatPanelGroup items={this.state.stats}/>
                    <p>This card has a shadow of size 1 and a hover effect. It contains a StatPanelGroup component,
                        which in turn contains three StatPanel components.</p>
                </Card>
                <h2>Simple Data</h2>
                <Card style="card-2">
                    <Table data={this.state.data}/>
                </Card>
                <Card style="card-3">
                    <h2>This is a Card component</h2>
                    <p>With shadow size 3.</p>
                </Card>
                <Card style="card-4">
                    <h2>This is a Card component</h2>
                    <p>With shadow size 4.</p>
                </Card>
                <Card style="card-5">
                    <h2>This is a Card component</h2>
                    <p>With shadow size 5.</p>
                </Card>
            </div>
        );
    }
}

export default App;
