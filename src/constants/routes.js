const ROUTES = {
    LANDING: {
        children: null,
        key: 'landing',
        navText: 'Landing',
        permissions: { },
        route: '/',
    },
    HOME: {
        children: null,
        key: 'home',
        navText: 'Home',
        permissions: {
            viewHomepage: true,
        },
        route: '/home',
    },
    APPS: {
        children: {
            NOTES: {
                key: 'notes',
                navText: 'Notes',
                permissions: {},
                route: '/notes',
            },
        },
        navText: 'Apps:',
    },
    ADMIN_PANEL: {
        children: null,
        key: 'admin',
        navText: 'Admin Panel',
        permissions: {
            administrator: true,
        },
        route: '/admin-panel',
    },
};

export default ROUTES;
