import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { Router } from 'react-router';
import { createMemoryHistory } from 'history';

import { AuthUserContext } from '../../../config/session';
import Navigation from '..';

let Container;
beforeAll(() => {
    const authUser = {
        user: {},
        userPermissions: { administrator: true },
    };
    const history = createMemoryHistory();
    
    Container = () => (
        <AuthUserContext.Provider value={authUser}>
            <Router history={history} initialEntries={[ '/' ]}>
                <Navigation />
            </Router>
        </AuthUserContext.Provider>
    );
});

describe('Navigation', () => {
    it('should render without crashing', () => {
        const div = document.createElement('div');
        
        ReactDOM.render(<Container />, div);
    });
    
    it('should match snapshot', () => {
        const tree = renderer
            .create(<Container />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});
