import React from 'react';
import {
    func,
} from 'prop-types';

import {
    StyledOverlay,
} from '../../styled-elements';

const Overlay = ({ onClick }) => (
    <StyledOverlay onClick={onClick}></StyledOverlay>
);

Overlay.defaultProps = {
    onClick: () => null,
};

Overlay.propTypes = {
    onClick: func,
};

export default Overlay;
