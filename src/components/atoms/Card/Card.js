import React from 'react';
import {
    bool,
    func,
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
    children: '',
    clickable: false,
    hasBorders: false,
    hasHoverShadow: false,
    hasShadow: false,
    onClick: () => null,
    value: 0.25,
    variant: 'primary',
};

Card.propTypes = {
    children: node,
    clickable: bool,
    hasBorders: bool,
    hasHoverShadow: bool,
    hasShadow: bool,
    onClick: func,
    value: number,
    variant: oneOf([ 'primary', 'secondary', 'tertiary' ]),
};

export default Card;
