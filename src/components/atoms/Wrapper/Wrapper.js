import React from 'react';
import {
    bool,
    node,
    number,
    oneOf,
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
    align: 'start',
    centered: false,
    children: null,
    flexDirection: null,
    hasPadding: false,
    justify: 'start',
    value: 1,
};

Wrapper.propTypes = {
    align: oneOf([ 'center', 'end', 'start' ]),
    centered: bool,
    children: node,
    flexDirection: oneOf([ 'column', 'row' ]),
    hasPadding: bool,
    justify: oneOf([ 'center', 'end', 'start' ]),
    value: number,
};

export default Wrapper;
