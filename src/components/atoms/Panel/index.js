import React from 'react';
import {
    bool,
    number,
    oneOf,
} from 'prop-types';

import {
    StyledPanel,
} from '../../styled-elements';

/**
 * A panel, specified by a value and either 'height' or 'width'
 * The panel spans the entire length of the parent container in the direction other than the specified direction
 * i.e. <Panel type='height' value={50} /> corresponds to a panel spanning 50% of the parent height and 100% of the width
 */
const Panel = (props) => {
    const {
        type,
    } = props;

    const height = type === 'height';
    return (
        <StyledPanel height={height} { ...props } />
    );
};

Panel.defaultProps = {
    centered: false,
    type: 'width',
    value: 25,
};

Panel.propTypes = {
    centered: bool,
    type: oneOf([
        'height',
        'width',
    ]),
    value: number,
};

export default Panel;
