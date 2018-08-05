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
                text: 'Overview',
                route: '/reports/overview'
            },
            {
                text: 'Support Tickets',
                route: '/reports/support-tickets'
            },
            {
                text: 'Locations',
                route: '/reports/locations',
            },
            {
                text: 'Events',
                route: '/reports/events'
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
