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

const App = () => (
    <Router>
        <GlobalStyle />
        <Container>
            <Drawer />

            { _.map(ROUTES, (page, index) => {
                return <Route key={index} exact={page.route === '/'} path={page.route} component={PAGE_COMPONENTS[page.key]} />;
            }) }
        </Container>
    </Router>
);

export default withAuthProvider(App);
