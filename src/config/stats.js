const stats = {
    config: {
        titleTemplate: 'My ${title}',
        statTemplate: '${stat}%',
        diffTemplate: '${diff}%',
        infoTemplate: '${info}'
    },
    data: [
        {
            title: 'funky title',
            stat: 12,
            diff: 2,
            info: 'compared to last week'
        },
        {
            title: 'funky 2nd title',
            stat: 24,
            diff: 8,
            info: 'compared to last month'
        }
    ]
};

export default stats;