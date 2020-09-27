import React from 'react';
import ReactDOM from 'react-dom';

import RegisterForm from '..';

describe('RegisterForm', () => {
    it('should render without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<RegisterForm />, div);
    });
});
