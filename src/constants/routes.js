const ROUTES = {
    LANDING: {
        children: null,
        key: 'landing',
        navText: 'Landing',
        permissions: { },
        route: '/',
        selectable: true,
    },
    HOME: {
        children: null,
        key: 'home',
        navText: 'Home',
        permissions: {
            viewHomepage: true,
        },
        route: '/home',
        selectable: true,
    },
    APPS: {
        children: {
            NOTES: {
                key: 'notes',
                navText: 'Notes',
                permissions: {},
                route: '/notes',
                selectable: true,
            },
        },
        navText: 'Apps:',
        selectable: false,
    },
    ADMIN_PANEL: {
        children: null,
        key: 'admin',
        navText: 'Admin Panel',
        permissions: {
            administrator: true,
        },
        route: '/admin-panel',
        selectable: true,
    },
};

export default ROUTES;
