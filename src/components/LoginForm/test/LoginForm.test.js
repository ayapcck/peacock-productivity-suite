import React from 'react';
import ReactDOM from 'react-dom';

import LoginForm from '..';

describe('LoginForm', () => {
    it('should render without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<LoginForm />, div);
    });
});
