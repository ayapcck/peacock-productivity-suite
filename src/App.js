import React from 'react';
import { 
    BrowserRouter as Router,
    Route
} from 'react-router-dom';
import styled, {
    createGlobalStyle
} from 'styled-components';

import { withAuthProvider } from './config/session';

import * as ROUTES from './constants/routes';
import HomePage from './pages/HomePage';
import LandingPage from './pages/LandingPage';

import Drawer from './components/Drawer';

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

            <Route exact path={ROUTES.LANDING} component={LandingPage} />
            <Route path={ROUTES.HOME} component={HomePage} />
        </Container>
    </Router>
);

export default withAuthProvider(App);
