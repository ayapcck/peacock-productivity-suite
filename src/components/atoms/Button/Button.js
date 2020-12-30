import React from 'react';
import {
    func,
    oneOf,
    string,
} from 'prop-types';

import { StyledButton } from '../../styled-elements';

const Button = (props) => {
    const {
        text,
        type,
        ...buttonPassThrough
    } = props;

    const buttonText = text || (type === 'submit' && 'Submit');

    return (
        <StyledButton
            { ...buttonPassThrough }
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
    variant: 'primary',
};

Button.propTypes = {
    /** Function called when button is pressed */
    onClick: func,
    /** Text to display in the button */
    text: string,
    /** The type of button. One of: */
    type: oneOf([ 'button', 'submit' ]),
    /** Variant determines which color set to use. One of: */
    variant: oneOf([ 'primary', 'secondary', 'tertiary' ]),
};

export default Button;
