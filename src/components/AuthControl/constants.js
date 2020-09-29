import React, { Fragment } from 'react';

import ForgotForm from '../ForgotForm';
import LoginForm from '../LoginForm';
import RegisterForm from '../RegisterForm';

const backToLoginText = "Back to Login? Click ";
const forgotText = "Forgot you password? Click ";
const logInText = "Already have an account? Log in ";
const noAccountText = "Don't have an account? Register ";

const link = (destination, text) => ({
    destination,
    text
});

export const FormContent = {
    Forgot: {
        component: <ForgotForm />,
        links: [ link('Login', backToLoginText), ],
    },
    Login: {
        component: <LoginForm />,
        links: [ 
            link('Forgot', forgotText),
            link('Register', noAccountText),
        ]
    },
    Register: {
        component: <RegisterForm />,
        links: [ link('Login', logInText), ],
    },
};
