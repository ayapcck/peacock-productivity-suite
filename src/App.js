import React from 'react';
import { 
    BrowserRouter as Router,
    Route
} from 'react-router-dom';

import HomePage from './pages/HomePage';
import LandingPage from './pages/LandingPage';

import Navigation from './components/Navigation';

import * as ROUTES from './constants/routes';

const App = () => (
    <Router>
        <div>
            <Navigation />

            <hr />

            <Route exact path={ROUTES.LANDING} component={LandingPage} />
            <Route path={ROUTES.HOME} component={HomePage} />
        </div>
    </Router>
);

export default App;