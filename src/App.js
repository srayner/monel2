import React, { Component } from 'react';
import SideMenu from './components/SideMenu/SideMenu';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      active: 'Home',
      menuItems: [
        {
          icon: 'fas fa-home',
          text: 'Home',
        },
        {
          icon: 'fas fa-chart-bar',
          text: 'Reports',
        },
        {
          icon: 'fas fa-cogs',
          text: 'Settings',
        },
        {
          icon: 'fas fa-users',
          text: 'Users',
        },
        {
          icon: 'fas fa-share-alt',
          text: 'Social Media',
        },
        {
          icon: 'fas fa-link',
          text: 'Links',
        }
      ]
    }
  }
  
  render() {
    return (
      <SideMenu
        items={this.state.menuItems}
        active={this.state.active}/>
    );
  }
}

export default App;
