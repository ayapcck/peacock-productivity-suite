import React from 'react';
import {
    bool,
    node,
    string,
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
    height: '25%',
    width: '20%',
};

Card.propTypes = {
    bordered: bool,
    children: node,
    height: string,
    width: string,
};

export default Card;
