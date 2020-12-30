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
    onClick: func,
    text: string,
    type: oneOf([ 'button', 'submit' ]),
    variant: oneOf([ 'primary', 'secondary', 'tertiary' ]),
};

export default Button;
