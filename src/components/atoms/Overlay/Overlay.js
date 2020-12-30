import React from 'react';
import {
    func,
    oneOf,
} from 'prop-types';

import {
    StyledOverlay,
} from '../../styled-elements';

const Overlay = ({ ...passThrough }) => (
    <StyledOverlay { ...passThrough } />
);

Overlay.defaultProps = {
    onClick: () => null,
    variant: 'primary',
};

Overlay.propTypes = {
    onClick: func,
    variant: oneOf([ 'primary', 'secondary', 'tertiary' ]),
};

export default Overlay;
