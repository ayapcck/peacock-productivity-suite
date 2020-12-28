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
        size,
        text,
        type,
    } = props;

    const tag = getTag(size, type);

    return (
        <StyledText
            { ...props }
            as={tag}
        >
            {text}
        </StyledText>
    );
};

Text.defaultProps = {
    align: 'left',
    size: 'medium',
    text: '',
    type: 'body',
    variant: 'primary',
};

Text.propTypes = {
    align: oneOf([ 'left', 'center', 'right' ]),
    size: oneOf([ 'small', 'medium', 'large' ]).isRequired,
    text: string,
    type: oneOf([ 'body', 'title' ]).isRequired,
    variant: oneOf([ 'primary', 'secondary', 'tertiary' ]),
};

export default Text;
