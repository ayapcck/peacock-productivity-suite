import React from 'react';
import {
    bool,
    func,
    string,
} from 'prop-types';
import styled from 'styled-components';

const StyledTextBox = styled.input`
    background-color: ${({ theme }) => theme.backgroundColor};
    border-color: ${({ valid, theme }) => valid ? theme.accentColor : theme.errorColor };
    border-style: solid;
    border-width: 0 0 2px 0;
    color: ${({ theme }) => theme.textColor};
    margin: 7.5px 5px;

    &:focus {
        outline: 0;
    }
    ::placeholder {
        color: ${({ theme }) => theme.textColor};
    }
`;

const TextBox = (props) => {
    const {
        handleChange,
        name,
        placeHolder,
        type,
        valid,
    } = props;

    return (
        <StyledTextBox 
            name={name}
            onChange={handleChange}
            placeholder={placeHolder}
            type={type}
            valid={valid}
        />
    );
};

TextBox.defaultTypes = {
    valid: true,
};

TextBox.propTypes = {
    handleChange: func,
    name: string,
    placeHolder: string,
    type: string,
    valid: bool,
};

export default TextBox;
