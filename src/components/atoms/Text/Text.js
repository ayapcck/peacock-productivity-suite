import React from 'react';
import {
    oneOf,
    string,
} from 'prop-types';

import {
    StyledText,
} from '../../styled-elements';

const Text = (props) => {
    const {
        children,
        type,
    } = props;

    return (
        <StyledText
            { ...props }
            as={type}
        >
            { children }
        </StyledText>
    );
};

Text.defaultProps = {
    align: 'left',
    children: '',
    type: 'p',
    variant: 'primary',
};

Text.propTypes = {
    align: oneOf([ 'left', 'center', 'right' ]),
    children: string,
    type: oneOf([
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
        'p',
        'span',
    ]),
    variant: oneOf([ 'primary', 'secondary', 'tertiary' ]),
};

export default Text;
