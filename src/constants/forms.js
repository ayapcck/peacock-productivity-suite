const AUTHENTICATION_FORMS = {
    CHANGE_PASSWORD: {
        title: 'Change Password',
    },
    FORGOT: {
        title: 'Forgot Password',
    },
    LOGIN: {
        textFields: [
            { name: 'email', placeHolder: 'Email' },
            { name: 'password', placeHolder: 'Password' },
        ],
        title: 'Log In',
    },
    REGISTER: {
        title: 'Register',
    },
};

export default AUTHENTICATION_FORMS;
