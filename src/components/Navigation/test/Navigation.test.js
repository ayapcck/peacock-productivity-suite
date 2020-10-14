import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router';
import { createMemoryHistory } from 'history';

import { AuthUserContext } from '../../../config/session';
import Navigation from '..';

describe('Navigation', () => {
    it('should render without crashing', () => {
        const div = document.createElement('div');
        const authUser = {
            user: {},
            userPermissions: {},
        };
        const history = createMemoryHistory();
        
        const Container = () => (
            <AuthUserContext.Provider value={authUser}>
                <MemoryRouter history={history} initialEntries={[ '/' ]}>
                    <Navigation />
                </MemoryRouter>
            </AuthUserContext.Provider>
        );
        ReactDOM.render(<Container />, div);
    });
});
