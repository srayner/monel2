import React, { Component } from 'react';
import styles from './SideMenu.css';

class SideMenu extends Component {
    render() {
        const menuItems = this.props.items.map(item => {
            return (
                <li className={this.props.active === item.text ? 'active' : ''}>
                    <a href="#">
                        <i className={item.icon + ' fa-lg fa-fw'}></i>
                        <span className="text">{item.text}</span>
                    </a>
                </li>
            )
        });
         
        return (
            <nav id="side-menu" className="side-menu">
                <ul>{menuItems}</ul>
                <div id="side-menu-toggle">
                    <i id="side-menu-toggle-icon" class="fas fa-chevron-right fa-lg fa-fw"></i>
                </div>
            </nav>
        );
    }
}

export default SideMenu;