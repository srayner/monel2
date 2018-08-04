const stats = [
    {
        id: 1,
        config: {
            titleTemplate: '{title}',
            statTemplate: '{stat}',
            diffTemplate: '{diff}',
            infoTemplate: '{info}'
        },
        data: {
            title: 'Users',
            stat: 12,
            diff: 2,
            info: 'vs last week'
        }
    },
    {
        id: 2,
        config: {
            titleTemplate: '{title}',
            statTemplate: '{stat}%',
            diffTemplate: '{diff}%',
            infoTemplate: '{info}'
        },
        data: {
            title: 'Faults',
            stat: 12,
            diff: -2,
            info: 'vs last week'
        }
    },
    {
        id: 3,
        config: {
            titleTemplate: '{title}',
            statTemplate: '{stat}',
            diffTemplate: '{diff}',
            infoTemplate: '{info}'
        },
        data: {
            title: 'Events',
            stat: 33,
            diff: 8,
            info: 'vs last week'
        }
    }
];

export default stats;