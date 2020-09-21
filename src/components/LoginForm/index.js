import React from 'react';

import DefaultForm from '../DefaultForm';
import TextBox from '../subcomponents/TextBox';

const LoginForm = () => (
    <DefaultForm title="Log In">
        <TextBox placeHolder="Email" />
        <TextBox placeHolder="Password" />
    </DefaultForm>
);

export default LoginForm;
