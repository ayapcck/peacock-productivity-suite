const AUTHENTICATION_FORMS = {
    CHANGE_PASSWORD: {
        title: 'Change Password',
    },
    FORGOT: {
        navTexts: [
            {
                destination: 'LOGIN',
                link: 'Back',
                main: '',
            },
        ],
        textFields: [
            { name: 'email', placeHolder: 'Email' },
        ],
        title: 'Forgot Password',
    },
    LOGIN: {
        navTexts: [
            {
                destination: 'FORGOT',
                link: 'here',
                main: 'Forgot your password? Click ',
            },
            {
                destination: 'REGISTER',
                link: 'here',
                main: 'Don\'t have an account? Register ',
            },
        ],
        textFields: [
            { name: 'email', placeHolder: 'Email' },
            { name: 'password', placeHolder: 'Password' },
        ],
        title: 'Log In',
    },
    REGISTER: {
        navTexts: [
            {
                destination: 'LOGIN',
                link: 'here',
                main: 'Already have an account? Click ',
            },
        ],
        textFields: [
            { name: 'name', placeHolder: 'Name' },
            { name: 'email', placeHolder: 'Email' },
            { name: 'password', placeHolder: 'Password' },
            { name: 'confirmPassword', placeHolder: 'Confirm Password' },
        ],
        title: 'Register',
    },
};

export default AUTHENTICATION_FORMS;
