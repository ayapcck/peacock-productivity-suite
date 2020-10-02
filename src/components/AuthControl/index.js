import React, { useState } from 'react';

import {
    func,
    string
} from 'prop-types';
import styled from 'styled-components';
import _ from 'lodash';

import DefaultForm from '../DefaultForm';
import Forms from '../Forms/constants';
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

    return (
        <Popup 
            closePopup={handleClose}
            popupContent={renderPopupContent(changeForm, currentForm)} 
        />
    );
};

const renderPopupContent = (changeForm, currentForm) => (
    <ContentWrapper>
        <DefaultForm form={Forms[currentForm]} />
        <ChangeForm changeForm={changeForm} currentForm={currentForm} />
    </ContentWrapper>
);

const ChangeForm = ({ changeForm, currentForm }) => {
    const links = Forms[currentForm].links;
    
    return (
        <ChangeFormContainer>
            { _.map(links, (link, index) => (
                <FormText
                    key={`link${index}`}
                    changeForm={changeForm}
                    destinationForm={link.destination}
                    text={link.text}
                />
            )) }
        </ChangeFormContainer>
    );
};

const FormText = ({ text, changeForm, destinationForm }) => (
    <ChangeFormText>
        { text }
        <ChangeFormLink onClick={() => changeForm(destinationForm)}>here</ChangeFormLink>
    </ChangeFormText>
);

// AuthControl.defaultProps = {

// };

AuthControl.propTypes = {
    handleClose: func,
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
