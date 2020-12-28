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
    StyledWrapper,
} from '../../styled-elements';

const Wrapper = (props) => {
    const {
        children,
        ...stylePassThrough
    } = props;

    return (
        <StyledWrapper { ...stylePassThrough }>
            { children }
        </StyledWrapper>
    );
};

Wrapper.defaultProps = {
    align: 'unset',
    bottom: 'unset',
    centered: false,
    children: null,
    flexDirection: 'unset',
    hasPadding: false,
    justify: 'unset',
    left: 'unset',
    position: 'unset',
    right: 'unset',
    top: 'unset',
    value: 1,
};

Wrapper.propTypes = {
    align: oneOf([ 'center', 'end', 'start', 'unset' ]),
    bottom: oneOfType([ number, string ]),
    centered: bool,
    children: node,
    flexDirection: oneOf([ 'column', 'row', 'unset' ]),
    hasPadding: bool,
    justify: oneOf([ 'center', 'end', 'space-around', 'start', 'unset' ]),
    left: oneOfType([ number, string ]),
    position: oneOf([ 'absolute', 'relative', 'unset' ]),
    right: oneOfType([ number, string ]),
    top: oneOfType([ number, string ]),
    value: number,
};

export default Wrapper;
