import React from 'react';
import {
    func,
    node,
    oneOf,
    string,
} from 'prop-types';

import { StyledButton } from '../../styled-elements';

const Button = (props) => {
    const {
        children,
        text,
        type,
        ...buttonPassThrough
    } = props;

    const content = text
        || children
        || (type === 'submit' && 'Submit');

    return (
        <StyledButton
            { ...buttonPassThrough }
            type={type}
        >
            { content }
        </StyledButton>
    );
};

Button.defaultProps = {
    children: null,
    onClick: () => null,
    text: null,
    type: 'button',
    variant: 'primary',
};

Button.propTypes = {
    /** Content to display in button if text is not used */
    children: node,
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
