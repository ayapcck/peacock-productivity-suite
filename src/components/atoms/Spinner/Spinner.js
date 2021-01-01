import React from 'react';
import {
    oneOf,
} from 'prop-types';

import {
    StyledSpinner,
} from '../../styled-elements';

const Loader = (props) => (
    <StyledSpinner { ...props } />
);

Loader.defaultProps = {
    size: 'small',
    variant: 'primary',
};

Loader.propTypes = {
    size: oneOf([ 'large', 'medium', 'small' ]),
    variant: oneOf([ 'primary', 'secondary', 'tertiary' ]),
};

export default Loader;
