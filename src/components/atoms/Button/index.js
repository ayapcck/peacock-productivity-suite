import React from 'react';
import {
    func,
    oneOf,
    string,
} from 'prop-types';

import { StyledButton } from '../../styled-elements';

const Button = (props) => {
    const {
        onClick,
        text,
        type,
    } = props;

    const buttonText = text || (type === 'submit' && 'Submit');

    return (
        <StyledButton
            onClick={onClick}
            type={type}
        >
            {buttonText}
        </StyledButton>
    );
};

Button.defaultProps = {
    onClick: () => null,
    text: '',
    type: 'button',
};

Button.propTypes = {
    onClick: func,
    text: string,
    type: oneOf([ 'button', 'submit' ]),
};

export default Button;
