import React from 'react';
import {
    node,
    string,
} from 'prop-types';

import {
    StyledNavLink,
} from '../../styled-elements';

const NavLink = (props) => {
    const {
        children,
        destination,
    } = props;

    return (
        <StyledNavLink to={destination}>
            { children }
        </StyledNavLink>
    );
};

NavLink.defaultProps = {
    children: null,
    destination: '/',
};

NavLink.propTypes = {
    children: node,
    destination: string,
};

export default NavLink;
