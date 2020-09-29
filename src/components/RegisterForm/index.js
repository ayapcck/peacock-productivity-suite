import React, { Component } from 'react';

import DefaultForm from '../DefaultForm';
import Forms from '../DefaultForm/constants';

const RegisterForm = () => (
    <DefaultForm
        form={Forms.Register}
    />
);

export default RegisterForm;
