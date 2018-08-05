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
import ReportsOverview from './pages/reports/Overview';
import ReportsSupportTickets from './pages/reports/SupportTickets'
import ReportsLocations from './pages/reports/Locations';
import ReportsEvents from './pages/reports/Events';
import Settings from './pages/Settings';
import Users from './pages/Users';
import SocialMedia from './pages/SocialMedia';
import Links from './pages/Links';


class App extends Component {
  
    state = {
        menuExpanded: true,
        menuItems: menuConfig,
        stats: stats,
        data: data
    }

    menuToggleCallback = (menuExpanded) => {
        this.setState({
            ...this.state,
            menuExpanded: menuExpanded
        });
    }

    render() {
        const className = this.state.menuExpanded ? 'App' : 'App wide';
        return (
            <Router>
                <div className={className}>
                    <SideMenu items={this.state.menuItems} toggleCallback={this.menuToggleCallback}/>
                    <Route exact path="/" render={props => (<Home stats={this.state.stats} data={this.state.data}/>)}/>
                    <Route exact path="/reports" render={props => (<Reports/>)}/>
                    <Route exact path="/reports/overview" render={props => (<ReportsOverview/>)}/>
                    <Route exact path="/reports/support-tickets" render={props => (<ReportsSupportTickets/>)}/>
                    <Route exact path="/reports/locations" render={props => (<ReportsLocations/>)}/>
                    <Route exact path="/reports/events" render={props => (<ReportsEvents/>)}/>
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
