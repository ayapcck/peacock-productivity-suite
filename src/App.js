import React from 'react';
import { 
    BrowserRouter as Router,
    Route,
} from 'react-router-dom';
import styled, {
    createGlobalStyle,
} from 'styled-components';
import _ from 'lodash';

import { withAuthProvider } from './config/session';

import { ROUTES } from './constants';

import AdminPanelPage from './pages/AdminPanelPage';
import HomePage from './pages/HomePage';
import LandingPage from './pages/LandingPage';
import NotesPage from './pages/NotesPage';
import Drawer from './components/Drawer';

/** The keys in this should correspond to the 'key' value in src/constants/pages.js */
const PAGE_COMPONENTS = {
    admin: AdminPanelPage,
    home: HomePage,
    landing: LandingPage,
    notes: NotesPage,
};

const GlobalStyle = createGlobalStyle`
    html, body, #root {
        height: 100%;
    }

    body {
        background-color: ${({ theme }) => theme.backgroundColor};
    }
`;

const Container = styled.div`
    display: flex;
    height: 100%;
`;

const route = (props) => <Route {...props} />;
const routeProps = (key, page) => ({
    component: PAGE_COMPONENTS[page.key],
    exact: page.route === '/',
    key,
    path: page.route,
});

const App = () => (
    <Router>
        <GlobalStyle />
        <Container>
            <Drawer />

            { _.map(ROUTES, (page, key) => {
                if (key === 'APPS') {
                    return _.map(page, (appPage, key) => {
                        return route(routeProps(key, appPage));
                    });
                } else {
                    return route(routeProps(key, page));
                }
            }) }
        </Container>
    </Router>
);

export default withAuthProvider(App);
