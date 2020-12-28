import React from 'react';
import {
    bool,
    node,
    number,
    oneOf,
} from 'prop-types';

import {
    StyledCard,
} from '../../styled-elements';

const Card = ({ children, ...passThrough }) => (
    <StyledCard { ...passThrough }>
        { children }
    </StyledCard>
);

Card.defaultProps = {
    bordered: false,
    children: '',
    value: 0.25,
    variant: 'primary',
};

Card.propTypes = {
    bordered: bool,
    children: node,
    value: number,
    variant: oneOf([ 'primary', 'secondary', 'tertiary' ]),
};

export default Card;
