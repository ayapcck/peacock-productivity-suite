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

import ROUTES from './constants/routes';

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

            { _.map(ROUTES, (route, index) => {
                return <Route key={index} exact={route.route === '/'} path={route.route} component={route.page} />;
            }) }
        </Container>
    </Router>
);

export default withAuthProvider(App);
