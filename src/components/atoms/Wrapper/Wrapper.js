import React from 'react';
import {
    bool,
    node,
    number,
    oneOf,
    oneOfType,
    string,
} from 'prop-types';

import {
    getUsedBorderSides,
    getUsedMarginSides,
    isSidesProp,
} from '../../../logics';
import {
    StyledWrapper,
} from '../../styled-elements';

const Wrapper = (props) => {
    const {
        borders,
        children,
        margins,
        ...stylePassThrough
    } = props;

    return (
        <StyledWrapper
            { ...getUsedBorderSides(borders) }
            { ...getUsedMarginSides(margins) }
            { ...stylePassThrough }
            borders={borders}
        >
            { children }
        </StyledWrapper>
    );
};

Wrapper.defaultProps = {
    align: 'unset',
    borders: 'none',
    bottom: 'unset',
    centered: false,
    children: null,
    flexDirection: 'unset',
    forceMaxContent: false,
    justify: 'unset',
    left: 'unset',
    margins: 'none',
    padding: 'none',
    position: 'unset',
    right: 'unset',
    top: 'unset',
    value: 1,
    variant: 'primary',
};

Wrapper.propTypes = {
    align: oneOf([ 'center', 'end', 'start', 'unset' ]),
    borders: isSidesProp,
    bottom: oneOfType([ number, string ]),
    centered: bool,
    children: node,
    flexDirection: oneOf([ 'column', 'row', 'unset' ]),
    forceMaxContent: bool,
    justify: oneOf([ 'center', 'end', 'space-around', 'start', 'unset' ]),
    left: oneOfType([ number, string ]),
    margins: isSidesProp,
    padding: oneOf([ 'none', 'small', 'standard' ]),
    position: oneOf([ 'absolute', 'relative', 'unset' ]),
    right: oneOfType([ number, string ]),
    top: oneOfType([ number, string ]),
    value: number,
    variant: oneOf([ 'primary', 'secondary', 'tertiary' ]),
};

export default Wrapper;
