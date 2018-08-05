import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';

import SideMenu from './components/SideMenu/SideMenu';
import menuConfig from './config/menu';

// Dummy test data
import stats from './config/stats';
import data from './config/data';

// pages
import Home from './pages/Home';
import Reports from './pages/Reports';
import Settings from './pages/Settings';
import Users from './pages/Users';
import SocialMedia from './pages/SocialMedia';
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
                    <Route exact path="/" render={props => (<Home stats={this.state.stats} data={this.state.data}/>)}/>
                    <Route exact path="/reports" render={props => (<Reports/>)}/>
                    <Route exact path="/settings" render={props => (<Settings/>)}/>
                    <Route exact path="/users" render={props => (<Users/>)}/>
                    <Route exact path="/social-media" render={props => (<SocialMedia/>)}/>
                    <Route exact path="/links" render={props => (<Links/>)}/>
                </div>
            </Router>
        );
    }
}

export default App;
