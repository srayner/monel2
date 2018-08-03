import React, { Component } from 'react';
import styles from './SideMenu.css';

class SideMenu extends Component {

    state = {
        active: this.props.items[0].text
    }

    itemClicked = (item) => {
        console.log('Clicked');
        this.setState({active: item.text})
    }

    toggleClicked = () => {
        console.log('toggle clicked');
    }

    render() {
        const menuItems = this.props.items.map(item => {
            return (
                <li className={this.state.active === item.text ? 'active' : ''}>
                    <a href="#" onClick={() => this.itemClicked(item)}>
                        <i className={item.icon + ' fa-lg fa-fw'}></i>
                        <span className="text">{item.text}</span>
                    </a>
                </li>
            )
        });
         
        return (
            <nav id="side-menu" className="side-menu">
                <ul>{menuItems}</ul>
                <div onClick={() => this.toggleClicked()} id="side-menu-toggle">
                    <i id="side-menu-toggle-icon" class="fas fa-chevron-right fa-lg fa-fw"></i>
                </div>
            </nav>
        );
    }
}

export default SideMenu;