import { 
    emailValid,
    passwordValid
} from '../../utilities/validation';

export const RegisterElements = {
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

let InitialState = {};
Object.keys(RegisterElements).forEach((key) => {
    InitialState[key] = RegisterElements[key].initial;
});

export { InitialState };
