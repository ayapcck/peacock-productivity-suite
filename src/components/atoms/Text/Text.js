import React from 'react';
import {
    oneOf,
    string,
} from 'prop-types';
import get from 'lodash/get';

import {
    StyledText,
} from '../../styled-elements';

const sizes = (typeSizes) => ({
    small: typeSizes[0],
    medium: typeSizes[1],
    large: typeSizes[2],
});

const types = {
    body: sizes([ 'h6', 'h5', 'h4' ]),
    title: sizes([ 'h3', 'h2', 'h1' ]),
};

const getTag = (size, type) => get(types, `${type}.${size}`);

const Text = (props) => {
    const {
        children,
        size,
        type,
    } = props;

    const tag = getTag(size, type);

    return (
        <StyledText
            { ...props }
            as={tag}
        >
            { children }
        </StyledText>
    );
};

Text.defaultProps = {
    align: 'left',
    children: '',
    size: 'medium',
    type: 'body',
    variant: 'primary',
};

Text.propTypes = {
    align: oneOf([ 'left', 'center', 'right' ]),
    children: string,
    size: oneOf([ 'small', 'medium', 'large' ]).isRequired,
    type: oneOf([ 'body', 'title' ]).isRequired,
    variant: oneOf([ 'primary', 'secondary', 'tertiary' ]),
};

export default Text;
