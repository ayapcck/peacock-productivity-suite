import React, { Component } from 'react';

import DefaultForm from '../DefaultForm';
import Forms from '../DefaultForm/constants';

const LoginForm = () => (
    <DefaultForm
        form={Forms.Login}
    />
);

export default LoginForm;
