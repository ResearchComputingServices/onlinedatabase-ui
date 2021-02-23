import {
    Person as PersonIcon,
    Settings as SettingsIcon,
    Dashboard as DashboardIcon,
    Search as SearchIcon,
    MenuBook as MenuBookIcon,
    Create as CreateIcon,
} from '@material-ui/icons';

export default [
    {
        path: '/dashboard',
        title: 'Dashboard',
        roles: ['Administrator'],
        Icon: DashboardIcon,
    },
    {
        path: '/users',
        title: 'Users',
        Icon: PersonIcon,
        roles: ['Administrator'],
    },
    {
        path: '/articles',
        title: 'Articles',
        Icon: MenuBookIcon,
        roles: ['Administrator', 'Researcher'],
    },
    {
        path: '/articles/search',
        title: 'Search Articles',
        Icon: SearchIcon,
        roles: '*',
    },
    {
        path: '/temp-articles/temp-article',
        title: 'Contribute',
        Icon: CreateIcon,
        items: [
            {
                path: '/temp-articles',
                title: 'Contribution List',
                roles: ['Administrator', 'Researcher'],
            },
            {
                path: '/temp-articles/temp-article',
                title: 'Add One Item',
                roles: '*',
            },
            {
                path: '/temp-articles/multiple-temp-article',
                title: 'Add Multiple Items',
                roles: '*',
            },
        ],
    },
    {
        name: 'settings',
        title: 'Settings',
        Icon: SettingsIcon,
        items: [
            // {
            //     path: '/user-fields/',
            //     title: 'User Fields',
            //     roles: '*',
            // },
            // {
            //     path: '/user-field-types/',
            //     title: 'User Field Types',
            //     roles: '*',
            // },
            // {
            //     path: '/enumerations/',
            //     title: 'Enumerations',
            //     roles: '*',
            // },
            {
                path: '/roles/',
                title: 'Roles',
                roles: ['Administrator'],
            },
        ],
    },
];
