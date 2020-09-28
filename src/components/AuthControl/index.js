import React, { useState } from 'react';

// import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Forms } from './constants';
import Popup from '../Popup';
 
const ChangeFormContainer = styled.div`
    color: ${({ theme }) => theme.textColor};
    margin: auto 0 10px 0;
    text-align: center;
    user-select: none;
`;

const ChangeFormLink = styled.span`
    text-decoration: underline;

    &:hover {
        cursor: pointer;
    }
`;

const ChangeFormText = styled.p`
    margin: 0;
    padding: 0;
`;

const ContentWrapper = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    height: 100%;
    padding-top: 10px;
`;

const AuthControl = ({ handleClose }) => {
    const [ currentForm, changeForm ] = useState('Login');

    const loginShown = () => currentForm === 'Login';

    return (
        <Popup 
            closePopup={handleClose}
            popupContent={renderPopupContent(changeForm, currentForm, loginShown)} 
        />
    );
};

const renderPopupContent = (changeForm, currentForm, loginShown) => (
    <ContentWrapper>
        { Forms[currentForm] }
        <ChangeForm changeForm={changeForm} currentForm={currentForm} />
    </ContentWrapper>
);

const ChangeForm = ({ changeForm, currentForm }) => {
    const backToLoginText = "Back to Login? Click ";
    const forgotText = "Forgot you password? Click ";
    const logInText = "Already have an account? Log in ";
    const noAccountText = "Don't have an account? Register ";

    return (
        <ChangeFormContainer>
            { currentForm === 'Login' && (
                <FormText
                    changeForm={changeForm}
                    destinationForm="Forgot"
                    text={forgotText}
                />
            )}
            { currentForm === 'Login' && (
                <FormText
                    changeForm={changeForm}
                    destinationForm="Register"
                    text={noAccountText}
                />
            )}
            { currentForm === 'Register' && (
                <FormText
                    changeForm={changeForm}
                    destinationForm="Login"
                    text={logInText}
                />
            )}
            { currentForm === 'Forgot' && (
                <FormText
                    changeForm={changeForm}
                    destinationForm="Login"
                    text={backToLoginText}
                />
            )}
        </ChangeFormContainer>
    );
}

const FormText = ({ text, changeForm, destinationForm }) => (
    <ChangeFormText>
        { text }
        <ChangeFormLink onClick={() => changeForm(destinationForm)}>here</ChangeFormLink>
    </ChangeFormText>
)

// AuthControl.defaultProps = {

// };

// AuthControl.propTypes = {

// };

export default AuthControl;
