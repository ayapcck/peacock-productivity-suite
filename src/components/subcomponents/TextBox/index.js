import React from 'react';
import styled from 'styled-components';

const StyledTextBox = styled.input`
    border-color: ${({ theme }) => theme.accentColor};
    border-style: solid;
    border-width: 0 0 2px 0;
    margin: 5px;

    &:focus {
        outline: 0;
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
