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
        }, () => {
            if (this.props.hasOwnProperty('toggleCallback')) {
                this.props.toggleCallback(this.state.open);
            }
        });
    }

    render() {
        const menuItems = this.props.items.map(item => {
            var childMenu, childClass, className;
            if (item.hasOwnProperty('children')) {
                const children = item.children.map(child => {
                    childClass = this.props.location.pathname === child.route ? 'active' : '';
                    return (
                        <li key={child.text} className={childClass}>
                            <Link to={child.route}>
                                {child.text}
                            </Link>
                        </li>
                    );
                });
                childMenu = <ul>{children}</ul>;
                className = this.props.location.pathname.startsWith(item.route) ? 'active' : '';
            } else {
                className = this.props.location.pathname === item.route ? 'active' : '';
            }

            return (
                <li key={item.text} className={className}>
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