import React, { Component } from 'react';
import './SideMenu.css';

class SideMenu extends Component {

    state = {
        open: true,
        active: this.props.items[0].text
    }

    itemClicked = (item) => {
        this.setState({
            ...this.state,
            active: item.text
        });
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
                <li key={item.text} className={this.state.active === item.text ? 'active' : ''}>
                    <a onClick={() => this.itemClicked(item)}>
                        <i className={item.icon + ' fa-lg fa-fw'}></i>
                        {item.text}
                    </a>
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

export default SideMenu;