import React from 'react';
import ReactDOM from 'react-dom';

import LandingPage from '..';

describe('LandingPage', () => {
    it('should render without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<LandingPage />, div);
    });
});
