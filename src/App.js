import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';

import SideMenu from './components/SideMenu/SideMenu';
import menuConfig from './config/menu';

// Dummy test data
import stats from './config/stats';
import data from './config/data';

// pages
import Demo from './pages/Demo';
import Links from './pages/Links';

class App extends Component {
  
    state = {
        menuItems: menuConfig,
        stats: stats,
        data: data
    }

    render() {
        return (
            <Router>
                <div className="App">
                    <SideMenu items={this.state.menuItems}/>
                    <Route path="/demo" render={props => (<Demo stats={this.state.stats} data={this.state.data}/>)}/>
                    <Route path="/links" render={props => (<Links/>)}/>
                </div>
            </Router>
        );
    }
}

export default App;
