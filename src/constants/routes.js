import _ from 'lodash';

const ROUTES = {
    HOME: {
        key: 'home',
        navText: 'Home',
        permissions: {
            viewHomepage: true,
        },
        route: '/home',
    },
    LANDING: {
        key: 'landing',
        navText: 'Landing',
        permissions: { },
        route: '/',
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

export const getRouteByPath = path => _.find(ROUTES, route => route.route === path);

export default ROUTES;
