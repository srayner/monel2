import React, { Component } from 'react';
import SideMenu from './components/SideMenu/SideMenu';
import menuConfig from './config/menu';

class App extends Component {
  
    state = {
        menuItems: menuConfig
    }
  
    render() {
        return (
            <SideMenu items={this.state.menuItems}/>
        );
    }
}

export default App;
