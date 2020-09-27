import React from 'react';
import ReactDOM from 'react-dom';

import HomePage from '..';

describe('HomePage', () => {
    it('should render without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<HomePage />, div);
    });
});
