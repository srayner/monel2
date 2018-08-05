import React, { Component } from 'react';
import './App.css';

import SideMenu from './components/SideMenu/SideMenu';
import menuConfig from './config/menu';

// Dummy test data
import stats from './config/stats';
import data from './config/data';

// pages
import Demo from './pages/Demo';

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
                <Demo stats={this.state.stats} data={this.state.data}/>
            </div>
        );
    }
}

export default App;
