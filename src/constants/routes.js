const ROUTES = {
    LANDING: {
        key: 'landing',
        navText: 'Landing',
        permissions: { },
        route: '/',
    },
    HOME: {
        key: 'home',
        navText: 'Home',
        permissions: {
            viewHomepage: true,
        },
        route: '/home',
    },
    APPS: {
        NOTES: {
            key: 'notes',
            navText: 'Notes',
            permissions: {},
            route: '/notes',
        },
    },
    ADMIN_PANEL: {
        key: 'admin',
        navText: 'Admin Panel',
        permissions: {
            administrator: true,
        },
        route: '/admin-panel',
    },
};

export default ROUTES;
