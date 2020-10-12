
import AdminPanelPage from '../pages/AdminPanelPage';
import HomePage from '../pages/HomePage';
import LandingPage from '../pages/LandingPage';

export default {
    HOME: {
        minRequiredRole: 'user',
        navText: 'Home',
        page: HomePage,
        route: '/home',
    },
    LANDING: {
        minRequiredRole: 'user',
        navText: 'Landing',
        page: LandingPage,
        route: '/',
    },
    ADMIN_PANEL: {
        minRequiredRole: 'admin',
        navText: 'Admin Panel',
        page: AdminPanelPage,
        route: '/admin-panel',
    },
};
