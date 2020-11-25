import React from 'react';
import {
    oneOf,
    string,
} from 'prop-types';

import { StyledButton } from '../../styled-elements';

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
    text: string,
    type: oneOf([ 'button', 'submit' ]),
};

export default Button;
