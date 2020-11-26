import React from 'react';
import {
    bool,
    node,
    oneOf,
    string,
} from 'prop-types';

import {
    AlignedContainer,
    CenteredContainer,
    StyledCard,
} from '../../styled-elements';

const Card = ({ align, content, ...passThrough }) => {
    const _renderContent = () => {
        return align === 'middle'
            ? ( <CenteredContainer>{content}</CenteredContainer> )
            : ( <AlignedContainer align={align}>{content}</AlignedContainer> );
    };

    return (
        <StyledCard { ...passThrough }>
            { _renderContent() }
        </StyledCard>
    );
};

Card.defaultProps = {
    align: 'middle',
    bordered: false,
    content: '',
    height: '25%',
    width: '20%',
};

Card.propTypes = {
    align: oneOf([ 'center', 'middle', 'left', 'right' ]),
    bordered: bool,
    content: node,
    height: string,
    width: string,
};

export default Card;
