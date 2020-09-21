import React from 'react';

import PropTypes from 'prop-types';
import styled from 'styled-components';

import Button from '../subcomponents/Button';
import TextBox from '../subcomponents/TextBox';

const StyledLoginForm = styled.form`
    display: flex;
    flex-direction: column;
    padding: 10px;
`;

const Title = styled.h2`
    text-align: center;
`;

const LoginForm = () => (
    <StyledLoginForm onSubmit={() => null}>
        <Title>Log In:</Title>
        <TextBox placeHolder="Email" />
        <TextBox placeHolder="Password" />
        <Button type="submit" />
    </StyledLoginForm>
);

LoginForm.defaultProps = {

};

LoginForm.propTypes = {

};

export default LoginForm;
