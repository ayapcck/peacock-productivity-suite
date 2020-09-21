import React from 'react';
import styled from 'styled-components';

const StyledTextBox = styled.input`
    background-color: ${({ theme }) => theme.backgroundColor};
    border-color: ${({ theme }) => theme.accentColor};
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
        placeHolder
    } = props;

    return (
        <StyledTextBox 
            type="text"
            placeholder={placeHolder}
        />
    );
};

export default TextBox;
