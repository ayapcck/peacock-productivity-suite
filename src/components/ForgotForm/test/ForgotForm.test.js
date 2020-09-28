import React from 'react';
import ReactDOM from 'react-dom';

import ForgotForm from '..';

describe('ForgotForm', () => {
    it('should render without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<ForgotForm />, div);
    });
});
