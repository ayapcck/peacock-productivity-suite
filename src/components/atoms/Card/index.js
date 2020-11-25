import React from 'react';
import { string } from 'prop-types';

import { StyledCard } from '../../styled-elements';

const Card = (props) => (
    <StyledCard { ...props }></StyledCard>
);

Card.defaultProps = {
    height: '25%',
    width: '20%',
};

Card.propTypes = {
    height: string,
    width: string,
};

export default Card;
