import React from 'react';

import DefaultForm from '../DefaultForm';
import TextBox from '../subcomponents/TextBox';

const RegisterForm = () => (
    <DefaultForm title="Register">
        <TextBox placeHolder="Name" />
        <TextBox placeHolder="Email" />
        <TextBox placeHolder="Password" />
        <TextBox placeHolder="Confirm Password" />
    </DefaultForm>
);

export default RegisterForm;
