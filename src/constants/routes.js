
import AdminPanelPage from '../pages/AdminPanelPage';
import HomePage from '../pages/HomePage';
import LandingPage from '../pages/LandingPage';

export default {
    HOME: {
        navText: 'Home',
        page: HomePage,
        permissions: {
            administrator: false,
            viewHomepage: true,
        },
        route: '/home',
    },
    LANDING: {
        navText: 'Landing',
        page: LandingPage,
        permissions: {
            administrator: false,
        },
        route: '/',
    },
    ADMIN_PANEL: {
        navText: 'Admin Panel',
        page: AdminPanelPage,
        permissions: {
            administrator: true,
        },
        route: '/admin-panel',
    },
};
