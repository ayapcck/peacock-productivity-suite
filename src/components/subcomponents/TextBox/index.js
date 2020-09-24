import React, { useState } from 'react';
import {
    string
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
        isValid,
        name,
        placeHolder,
        type
    } = props;

    const [ value, setValue ] = useState('');

    const onChange = (ev) => {
        const val = ev.target.value;
        setValue(val);
        handleChange(ev);
    }

    return (
        <StyledTextBox 
            name={name}
            onChange={onChange}
            placeholder={placeHolder}
            type={type}
            valid={value === '' || isValid(value)}
        />
    );
};

TextBox.propTypes = {
    name: string,
    placeholder: string
};

export default TextBox;
