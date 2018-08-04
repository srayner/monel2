import React, { Component } from 'react';
import styles from './App.css';

import SideMenu from './components/SideMenu/SideMenu';
import menuConfig from './config/menu';

import Card from './components/Card/Card';

import StatPanelGroup from './components/StatPanelGroup/StatPanelGroup';
import stats from './config/stats';

class App extends Component {
  
    state = {
        menuItems: menuConfig,
        stats: stats
    }
  
    render() {
        return (
            <div className="App">
                <SideMenu items={this.state.menuItems}/>
                <Card style="card-1">
                    <StatPanelGroup items={this.state.stats}/>
                    <h2>This is a panel</h2>
                    <p>With some text inside it.</p>
                </Card>
                <Card style="card-2">
                    <h2>This is a panel</h2>
                    <p>With some text inside it.</p>
                </Card>
                <Card style="card-3">
                    <h2>This is a panel</h2>
                    <p>With some text inside it.</p>
                </Card>
                <Card style="card-4">
                    <h2>This is a panel</h2>
                    <p>With some text inside it.</p>
                </Card>
                <Card style="card-5">
                    <h2>This is a panel</h2>
                    <p>With some text inside it.</p>
                </Card>
            </div>
        );
    }
}

export default App;
