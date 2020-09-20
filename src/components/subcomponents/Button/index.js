import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
    background-color: ${({ theme }) => theme.accentColor};
    border-color: ${({ theme }) => theme.accentColor};
    border-radius: 5px;
    border-style: solid;
    box-shadow: 2px 2px ${({ theme }) => theme.darkerAccentColor};
    padding: 2.5px 5px;
    /* transition: 0.2s; */

    &:active {
        box-shadow: 1px 1px ${({ theme }) => theme.darkerAccentColor};
        transform: translateY(1px) translateX(1px);
    }
    &:focus {
        outline: 0;
    }
    &:hover {
        cursor: pointer;
    }
`;

const Button = (props) => {
    const {
        text
    } = props;

    return (
        <StyledButton>{text}</StyledButton>
    );
};

export default Button;
