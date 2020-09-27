import React, { 
    useEffect, 
    useState 
} from 'react';
import { 
    BrowserRouter as Router,
    Route
} from 'react-router-dom';
import styled, {
    createGlobalStyle
} from 'styled-components';

import { withFirebase } from './config/firebase';
import AuthContext from './config/authContext';

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

const App = (props) => {
    const [ authUser, setAuthUser ] = useState(null);

    const { firebase } = props;
    
    useEffect(() => firebase.auth.onAuthStateChanged(authUser => authUser ? setAuthUser(authUser) : setAuthUser(null)));

    return (
        <Router>
            <GlobalStyle />
            <AuthContext.Provider value={authUser}>
                <Container>
                    <Drawer />

                    <Route exact path={ROUTES.LANDING} component={LandingPage} />
                    <Route path={ROUTES.HOME} component={HomePage} />
                </Container>
            </AuthContext.Provider>
        </Router>
    );
};

export default withFirebase(App);
