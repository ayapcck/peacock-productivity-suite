import _ from 'lodash';

import { emailValid, passwordValid } from '../../utilities/validation';

const ForgotPasswordElements = {
    email: {
        initial: '',
        isValid: emailValid,
        name: 'email',
        placeHolder: 'Email',
        type: 'text'
    }
};
const InitialForgotState = _.mapValues(ForgotPasswordElements, 'initial');

const LoginElements = {
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
const InitialLoginState = _.mapValues(LoginElements, 'initial');

const RegisterElements = {
    name: {
        initial: '',
        isValid: () => true,
        name: 'name',
        placeHolder: 'Name',
        type: 'text',
    },
    email: {
        initial: '',
        isValid: emailValid,
        name: 'email',
        placeHolder: 'Email',
        type: 'text'
    },
    password: {
        initial: '',
        isValid: passwordValid,
        name: 'password',
        placeHolder: 'Password',
        type: 'password'
    },
    confirmPassword: {
        initial: '',
        isValid: () => null,
        name: 'confirmPassword',
        placeHolder: 'Confirm Password',
        type: 'password'
    }
};
const InitialRegisterState = _.mapValues(RegisterElements, 'initial');

const Forms = {
    Forgot: {
        elements: ForgotPasswordElements,
        InitialState: InitialForgotState,
        keyPrefix: 'forgotBox',
        onSubmit: (firebase, email, password) => firebase.sendPasswordResetEmail(email),
        title: 'Forgot Password',
    },
    Login: {
        elements: LoginElements,
        InitialState: InitialLoginState,
        keyPrefix: 'loginBox',
        onSubmit: (firebase, email, password) => firebase.signInWithEmailAndPassword(email, password),
        title: 'Log In',
    },
    Register: {
        elements: RegisterElements,
        InitialState: InitialRegisterState,
        keyPrefix: 'regBox',
        onSubmit: (firebase, email, password) => firebase.createUserWithEmailAndPassword(email, password),
        title: 'Register',
    },
};

export default Forms;
