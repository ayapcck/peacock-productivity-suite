import React, {
    useEffect,
} from 'react';
import {
    useDispatch,
    useSelector,
} from 'react-redux';
import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom';
import styled, {
    createGlobalStyle,
} from 'styled-components';
import _ from 'lodash';

import firebase from './config/firebase';
import { ROUTES } from './constants';
import {
    loadAuthentication,
} from './redux';

import {
    AdminPanel,
    Home,
    Landing,
    Notes,
} from './routes';

import {
    LoadingOverlay,
} from './components/organisms';
import {
    Navigation,
} from './components/templates';

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

const App = () => {
    const dispatch = useDispatch();

    const { isLoadingOverlayOpen } = useSelector(state => state.utility);

    useEffect(() => firebase.auth.onAuthStateChanged(
        authUser => dispatch(loadAuthentication({ authUser }))
    ));

    return (
        <Router>
            <GlobalStyle />
            <Container>
                <Navigation routes={ROUTES} />

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

                { isLoadingOverlayOpen && <LoadingOverlay /> }
            </Container>
        </Router>
    );
};

export default App;
