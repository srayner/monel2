const menuItems = [
    {
        icon: 'fas fa-home',
        text: 'Home'
    },
    {
        icon: 'fas fa-chart-bar',
        text: 'Reports',
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
];

export default menuItems;
