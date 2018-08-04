import React, { Component } from 'react';
import SideMenu from './components/SideMenu/SideMenu';
import menuConfig from './config/menu';
import Card from './components/Card/Card';
import styles from './App.css';

class App extends Component {
  
    state = {
        menuItems: menuConfig
    }
  
    render() {
        return (
            <div className="App">
                <SideMenu items={this.state.menuItems}/>
                <Card style="card-1">
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
