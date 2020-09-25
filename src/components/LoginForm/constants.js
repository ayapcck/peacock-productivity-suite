import _ from 'lodash';

export const LoginElements = {
    email: {
        initial: '',
        isValid: () => true,
        name: 'email',
        placeHolder: 'Email',
        type: 'text'
    },
    password: {
        initial: '',
        isValid: () => true,
        name: 'password',
        placeHolder: 'Password',
        type: 'password'
    }
};

export const InitialState = _.mapValues(LoginElements, 'initial');