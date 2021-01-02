import React from 'react';
import {
    func,
    oneOf,
    string,
} from 'prop-types';

import {
    StyledLink,
} from '../../styled-elements';

const Link = (props) => {
    const {
        onClick,
        text,
        variant,
    } = props;

    return (
        <StyledLink
            as={'a'}
            href="/"
            onClick={ev => (ev.preventDefault(), onClick(ev))}
            variant={variant}
        >
            { text }
        </StyledLink>
    );
};

Link.defaultProps = {
    onClick: () => null,
    text: 'here',
    variant: 'primary',
};

Link.propTypes = {
    onClick: func,
    text: string,
    variant: oneOf([ 'primary', 'secondary', 'tertiary' ]),
};

export default Link;
