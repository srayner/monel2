const menuItems = [
    {
        icon: 'fas fa-home',
        text: 'Home',
        route: '/'
    },
    {
        icon: 'fas fa-chart-bar',
        text: 'Reports',
        route: '/reports',
        children : [
            {
                text: 'Overview'
            },
            {
                text: 'Support Tickets'
            },
            {
                text: 'Locations'
            },
            {
                text: 'Events'
            }
        ]
    },
    {
        icon: 'fas fa-cogs',
        text: 'Settings',
        route: '/settings'
    },
    {
        icon: 'fas fa-users',
        text: 'Users',
        route: '/users'
    },
    {
        icon: 'fas fa-share-alt',
        text: 'Social Media',
        route: '/social-media'
    },
    {
        icon: 'fas fa-link',
        text: 'Links',
        route: '/links'
    }
];

export default menuItems;
