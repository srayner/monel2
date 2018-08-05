import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

import './SideMenu.css';

class SideMenu extends Component {

    state = {
        open: true,
    }

    toggleClicked = () => {
        this.setState({
            ...this.state,
            open: !this.state.open
        });
    }

    render() {
        const menuItems = this.props.items.map(item => {
            var childMenu = null;
            if (item.hasOwnProperty('children')) {
                const children = item.children.map(child => {
                    return <li key={child.text}><a>{child.text}</a></li>
                });
                childMenu = <ul>{children}</ul>;
            }

            return (
                <li key={item.text} className={this.props.location.pathname === item.route ? 'active' : ''}>
                    <Link to={item.route}>
                        <i className={item.icon + ' fa-lg fa-fw'}></i>
                        {item.text}
                    </Link>
                    {childMenu}
                </li>
            );
        });

        var menuClass = 'side-menu';
        var toggleClass = 'fas fa-chevron-right fa-lg fa-fw';
        if (this.state.open) {
            menuClass += ' open';
            toggleClass = 'fas fa-chevron-left fa-lg fa-fw';
        }

        return (
            <nav className={menuClass}>
                <ul>{menuItems}</ul>
                <div className="side-menu-toggle" onClick={this.toggleClicked}>
                    <i className={toggleClass}></i>
                </div>
            </nav>
        );
    }
}

const SideMenuWithRouter = withRouter(SideMenu);
export default SideMenuWithRouter;