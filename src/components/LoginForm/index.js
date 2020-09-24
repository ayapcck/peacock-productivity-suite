import React from 'react';

import DefaultForm from '../DefaultForm';
import TextBox from '../subcomponents/TextBox';

const handleLogin = (ev) => {
    ev.preventDefault();
    console.log(ev);
}

const LoginForm = () => (
    <DefaultForm 
        onSubmit={handleLogin}
        title="Log In"
    >
        <TextBox placeHolder="Email" />
        <TextBox placeHolder="Password" />
    </DefaultForm>
);

export default LoginForm;
