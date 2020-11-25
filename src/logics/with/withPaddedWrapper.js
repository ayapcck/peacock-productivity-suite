import React from 'react';

import {
    PaddedWrapper,
} from '../../components/styled-elements';

const withPaddedWrapper = Component => props => (
    <PaddedWrapper>
        <Component { ...props } />
    </PaddedWrapper>
);

export default withPaddedWrapper;
