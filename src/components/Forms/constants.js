import _ from 'lodash';

import { emailValid, passwordValid } from '../../utilities/validation';

const backToLoginText = 'Back to Login? Click ';
const forgotText = 'Forgot you password? Click ';
const logInText = 'Already have an account? Log in ';
const noAccountText = 'Don\'t have an account? Register ';

const link = (destination, text) => ({
    destination,
    text,
});

const textboxElement = (isValid, name, placeHolder, type = 'text') => ({
    initial: '',
    isValid,
    name,
    placeHolder,
    type,
});
const textboxElementNoValidity = (name, placeHolder, type = 'text') => 
    textboxElement(() => true, name, placeHolder, type);

const CONFIRM_PASSWORD = textboxElementNoValidity('confirmPassword', 'Confirm Password', 'password');

const EMAIL_NO_VALIDITY = textboxElementNoValidity('email', 'Email');
const EMAIL_WITH_VALIDITY = textboxElement(emailValid, 'email', 'Email');

const PASSWORD_NO_VALIDITY = textboxElementNoValidity('password', 'Password', 'password');
const PASSWORD_WITH_VALIDITY = textboxElement(passwordValid, 'password', 'Password', 'password');

/** Textbox elements for ChangePasswordForm */
const ChangePasswordElements = {
    password: PASSWORD_WITH_VALIDITY,
    confirmPassword: CONFIRM_PASSWORD,
};
const InitialChangePasswordState = _.mapValues(ChangePasswordElements, 'initial');

/** Textbox elements for ForgotForm */
const ForgotPasswordElements = {
    email: EMAIL_WITH_VALIDITY,
};
const InitialForgotState = _.mapValues(ForgotPasswordElements, 'initial');

/** Textbox elements for LoginForm */
const LoginElements = {
    email: EMAIL_NO_VALIDITY,
    password: PASSWORD_NO_VALIDITY,
};
const InitialLoginState = _.mapValues(LoginElements, 'initial');

/** Textbox elements for RegisterForm */
const RegisterElements = {
    name: textboxElementNoValidity('name', 'Name'),
    email: EMAIL_WITH_VALIDITY,
    password: PASSWORD_WITH_VALIDITY,
    confirmPassword: CONFIRM_PASSWORD,
};
const InitialRegisterState = _.mapValues(RegisterElements, 'initial');

const Forms = {
    ChangePassword: {
        andThen: () => null,
        elements: ChangePasswordElements,
        InitialState: InitialChangePasswordState,
        keyPrefix: 'changePasswordBox',
        links: [],
        onSubmit: ({ firebase, password }) => firebase.updatePassword(password),
        title: 'Change Password',
    },
    Forgot: {
        andThen: () => null,
        elements: ForgotPasswordElements,
        InitialState: InitialForgotState,
        keyPrefix: 'forgotBox',
        links: [ link('Login', backToLoginText) ],
        onSubmit: ({ firebase, email }) => firebase.sendPasswordResetEmail(email),
        title: 'Forgot Password',
    },
    Login: {
        andThen: ({ authUser, email, firebase }) => {
            firebase.user(authUser.user.uid)
                .once('value')
                .then(res => {
                    // This is a proof of concept method
                    res.val() && console.log(res.val().name);
                });
        },
        elements: LoginElements,
        InitialState: InitialLoginState,
        keyPrefix: 'loginBox',
        links: [ 
            link('Forgot', forgotText),
            link('Register', noAccountText),
        ],
        onSubmit: ({ firebase, email, password }) => firebase.signInWithEmailAndPassword(email, password),
        title: 'Log In',
    },
    Register: {
        andThen: ({ authUser, email, firebase, name }) => firebase
            .user(authUser.user.uid)
            .set({ email, name }),
        elements: RegisterElements,
        InitialState: InitialRegisterState,
        keyPrefix: 'regBox',
        links: [ link('Login', logInText) ],
        onSubmit: ({ firebase, email, password }) => firebase.createUserWithEmailAndPassword(email, password),
        title: 'Register',
    },
};

export default Forms;
