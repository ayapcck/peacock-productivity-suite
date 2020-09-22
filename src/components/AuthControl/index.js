import React, { useState } from 'react';

// import PropTypes from 'prop-types';
import styled from 'styled-components';

import LoginForm from '../LoginForm';
import Popup from '../Popup';
import RegisterForm from '../RegisterForm';

const ChangeFormLink = styled.span`
    text-decoration: underline;

    &:hover {
        cursor: pointer;
    }
`;

const ChangeFormText = styled.div`
    color: ${({ theme }) => theme.textColor};
    margin: auto 0 10px 0;
    text-align: center;
    user-select: none;
`;

const ContentWrapper = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    height: 100%;
    padding-top: 10px;
`;

const AuthControl = ({ handleClose }) => {
    const [ currentForm, changeForm ] = useState('Register');

    const loginShown = () => currentForm === 'Login';

    const toggleForm = () => loginShown()
        ? changeForm('Register')
        : changeForm('Login');

    return (
        <Popup 
            closePopup={handleClose}
            popupContent={renderPopupContent(loginShown, toggleForm)} 
        />
    );
};

const renderPopupContent = (loginShown, toggleForm) => (
    <ContentWrapper>
        { loginShown() 
            ? <LoginForm />
            : <RegisterForm /> }
        <ChangeFormText>
            { loginShown()
                ? "Don't have an account? Register "
                : "Already have an account? Log in "}
            <ChangeFormLink onClick={toggleForm}>here</ChangeFormLink>
        </ChangeFormText>
    </ContentWrapper>
);

// AuthControl.defaultProps = {

// };

// AuthControl.propTypes = {

// };

export default AuthControl;
