import React from 'react';
import styled from 'styled-components';

import Button from '../subcomponents/Button';
import TextBox from '../subcomponents/TextBox';

const StyledRegisterForm = styled.form`
    display: flex;
    flex-direction: column;
    padding: 10px;
`;

const Title = styled.h2`
    text-align: center;
`;

const RegisterForm = () => (
    <StyledRegisterForm onSubmit={() => null}>
        <Title>Register</Title> 
        <TextBox placeHolder="Name" />
        <TextBox placeHolder="Email" />
        <TextBox placeHolder="Password" />
        <TextBox placeHolder="Confirm Password" />
        <Button type="submit"/>
    </StyledRegisterForm>
);

export default RegisterForm;
