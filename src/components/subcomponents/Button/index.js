import React from 'react';

import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledButton = styled.button`
    background-color: ${({ theme }) => theme.accentColor};
    border-color: ${({ theme }) => theme.accentColor};
    border-radius: 5px;
    border-style: solid;
    box-shadow: 2px 2px ${({ theme }) => theme.altAccentColor};
    margin: 10px;
    padding: 2.5px 5px;

    &:active {
        box-shadow: 1px 1px ${({ theme }) => theme.altAccentColor};
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
        text,
        type,
    } = props;

    const buttonText = text || (type === 'submit' && 'Submit');

    return (
        <StyledButton 
            type={type}
        >
            {buttonText}
        </StyledButton>
    );
};

Button.defaultProps = {
    text: '',
    type: 'button',
};

Button.propTypes = {
    text: PropTypes.string,
    type: PropTypes.oneOf([ 'button', 'submit' ]),
};

export default Button;
