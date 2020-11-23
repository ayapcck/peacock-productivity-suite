import React from 'react';
import {
    oneOf,
    string,
} from 'prop-types';
import get from 'lodash/get';
import styled from 'styled-components';

const StyledTag = styled.h1`
    color: ${({ colorOverride, theme }) => colorOverride ?? theme.textColor};
    margin: 0;
    text-align: ${(props) => props.align};
`;

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
        <StyledTag as={tag} { ...props }>
            {text}
        </StyledTag>
    );
};

Text.defaultProps = {
    align: 'left',
    colorOverride: null,
    size: 'medium',
    text: '',
    type: 'body',
};

Text.propTypes = {
    align: oneOf([ 'left', 'center', 'right' ]),
    colorOverride: string,
    size: oneOf([ 'small', 'medium', 'large' ]).isRequired,
    text: string,
    type: oneOf([ 'body', 'title' ]).isRequired,
};

export default Text;
