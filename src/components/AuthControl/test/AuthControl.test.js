import React from 'react';
import ReactDOM from 'react-dom';

import AuthControl from '..';

describe('AuthControl', () => {
    it('should render without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<AuthControl />, div);
    });
});
