import React from 'react';
import ReactDOM from 'react-dom';

import {
    ForgotForm,
    LoginForm,
    RegisterForm
} from '..';

describe('ForgotForm', () => {
    it('should render without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<ForgotForm />, div);
    });
});

describe('LoginForm', () => {
    it('should render without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<LoginForm />, div);
    });
});

describe('RegisterForm', () => {
    it('should render without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<RegisterForm />, div);
    });
});
