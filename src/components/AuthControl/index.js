import React, { useState } from 'react';

import {
    bool,
    func,
    string,
} from 'prop-types';
import styled from 'styled-components';
import _ from 'lodash';

import {
    Popup,
} from '../molecules';
import DefaultForm from '../DefaultForm';
import Forms from '../Forms/constants';

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

const AuthControl = ({ handleClose, useChangePasswordForm }) => {
    const initialForm = useChangePasswordForm ? 'ChangePassword' : 'Login';
    const [ currentForm, changeForm ] = useState(initialForm);

    return (
        <Popup
            handleClose={handleClose}
            tall
        >
            <ContentWrapper>
                <DefaultForm form={Forms[currentForm]} />
                <ChangeForm
                    changeForm={changeForm}
                    currentForm={currentForm}
                />
            </ContentWrapper>
        </Popup>
    );
};

const ChangeForm = ({ changeForm, currentForm }) => {
    const links = Forms[currentForm].links;

    return (
        <ChangeFormContainer>
            {
                _.map(links, (link, index) => (
                    <FormText
                        key={`link${index}`}
                        changeForm={changeForm}
                        destinationForm={link.destination}
                        text={link.text}
                    />
                ))
            }
        </ChangeFormContainer>
    );
};

const FormText = ({ text, changeForm, destinationForm }) => (
    <ChangeFormText>
        { text }
        <ChangeFormLink
            className="AuthControl_ChangeFormLink"
            onClick={() => changeForm(destinationForm)}
        >
            here
        </ChangeFormLink>
    </ChangeFormText>
);

AuthControl.defaultProps = {
    useChangePasswordForm: false,
};
AuthControl.propTypes = {
    handleClose: func,
    useChangePasswordForm: bool,
};

ChangeForm.propTypes = {
    changeForm: func,
    currentForm: string,
};

FormText.propTypes = {
    changeForm: func,
    destinationForm: string,
    text: string,
};

export default AuthControl;
