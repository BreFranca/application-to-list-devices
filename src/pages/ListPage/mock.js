export default [
    {
        tabIndex: 'all',
        title: 'All Devices',
        values: [
            {
                name: 'Iphone 11',
                unit: '4EH1091ABS',
                value: 699,
                timestamp: 1614613059975,
                active: true,
                status: 'activate'
            },
            {
                name: 'Samsung Galaxy Note 20 Ultra',
                unit: '33N7YUMMNA',
                value: 949,
                timestamp: 1614613059975,
                active: false,
                status: 'deactivate'
            },
            {
                name: 'OnePlus 8 Pro',
                unit: '67IFTAJKWU',
                value: 799,
                timestamp: 1614613059975,
                active: true,
                status: 'activate'
            },
        ],
        activate: true
    },
    {
        tabIndex: 'activate',
        title: 'Actived Devices',
        values: [
            {
                name: 'Iphone 11',
                unit: '4EH1091ABS',
                value: 699,
                timestamp: 1614613059975,
                active: true,
                status: 'activate'
            },
            {
                name: 'OnePlus 8 Pro',
                unit: '67IFTAJKWU',
                value: 799,
                timestamp: 1614613059975,
                active: true,
                status: 'activate'
            },
        ],
        activate: false
    },
    {
        tabIndex: 'deactivate',
        title: 'Not Actived Devices',
        values: [
            {
                name: 'Samsung Galaxy Note 20 Ultra',
                unit: '33N7YUMMNA',
                value: 949,
                timestamp: 1614613059975,
                active: false,
                status: 'deactivate'
            }
        ],
        activate: false
    }
]