import React from 'react';
import { Provider } from 'react-redux';
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
import store from './redux';

import {
    AdminPanel,
    Home,
    Landing,
    Notes,
} from './routes';
import {
    Navigation,
} from './components/templates';
// import Drawer from './components/Drawer';

/** The keys in this should correspond to the 'key' value in src/constants/pages.js */
const PAGE_COMPONENTS = {
    admin: AdminPanel,
    home: Home,
    landing: Landing,
    notes: Notes,
};

const GlobalStyle = createGlobalStyle`
    html, body, #root {
        height: 100%;
    }

    body {
        background-color: ${({ theme }) => theme.color.primary.background};
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
    <Provider store={store}>
        <Router>
            <GlobalStyle />
            <Container>
                <Navigation routes={ROUTES} />
                {/* <Drawer /> */}

                {
                    _.map(ROUTES, (page, key) => {
                        if (key === 'APPS') {
                            return _.map(page.children, (appPage, key) => {
                                return route(routeProps(key, appPage));
                            });
                        } else {
                            return route(routeProps(key, page));
                        }
                    })
                }
            </Container>
        </Router>
    </Provider>
);

export default withAuthProvider(App);
