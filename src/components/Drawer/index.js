import React, { useState } from 'react';
import {
    bool,
    shape,
    string,
} from 'prop-types';
import styled from 'styled-components';

import {
    Icon,
} from '../atoms';
import Navigation from '../Navigation';

import { withAuthConsumer } from '../../config/session';

const MenuIcon = styled(Icon)`
    align-self: flex-end;
    margin: 10px 10px 0 10px;
`;

const StyledNavigationDrawer = styled.div`
    border-color: ${({ theme }) => theme.accentColor};
    border-style: solid;
    border-width: 0 2px 0 0;
    box-shadow: 2px 0 4px 0 ${({ theme }) => theme.shadowColor};
    display: flex;
    flex: ${({ open }) => open ? 0.25 : 0};
    flex-direction: column;
    height: 100%;
    transition: 0.4s;
    width: auto;
`;

const NavigationDrawer = ({ auth, startOpen }) => {
    const [ open, setOpen ] = useState(startOpen);
    const [ showNavigation, setShowNavigation ] = useState(open);

    const toggleNavigationDrawer = () => {
        if (open) {
            setShowNavigation(false);
            setOpen(false);
        } else {
            setOpen(true);
            setTimeout(() => { setShowNavigation(true); }, 100);
        }
    };

    return (
        <StyledNavigationDrawer open={open}>
            { auth && auth.user && auth.user.email }
            { renderMenuIcon(open, toggleNavigationDrawer) }
            { showNavigation && <Navigation /> }
        </StyledNavigationDrawer>
    );
};

const renderMenuIcon = (open, onClick) => (
    <MenuIcon
        icon="bars"
        onClick={onClick}
    />
);

NavigationDrawer.defaultProps = {
    startOpen: false,
};

NavigationDrawer.propTypes = {
    auth: shape({
        user: shape({
            email: string,
        }),
    }),
    startOpen: bool,
};

export default withAuthConsumer(NavigationDrawer);
