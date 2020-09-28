import React, { useState } from 'react';
import { bool } from 'prop-types';
import styled from 'styled-components';

import Icon from '../subcomponents/Icon';
import Navigation from '../Navigation';

import { withAuthConsumer } from '../../config/session';

const MenuIcon = styled(Icon)`
    align-self: flex-end;
    margin: 10px 10px 0 10px;
`;

const StyledDrawer = styled.div`
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

const Drawer = ({ authUser, startOpen }) => {
    const [ open, setOpen ] = useState(startOpen);
    const [ showNavigation, setShowNavigation ] = useState(open);
    
    const toggleDrawer = () => { 
        if (open) {
            setShowNavigation(false);
            setOpen(false);
        } else {
            setOpen(true);
            setTimeout(() => { setShowNavigation(true); }, 100);
        }
    };

    return (
        <StyledDrawer open={open}>
            { authUser && authUser.email }
            { renderMenuIcon(open, toggleDrawer) }
            { showNavigation && <Navigation /> }
        </StyledDrawer>
    );
}

const renderMenuIcon = (open, onClick) => (
    <MenuIcon 
        icon="bars" 
        onClick={onClick}
    />
);

Drawer.defaultProps = {
    startOpen: false
};

Drawer.propTypes = {
    startOpen: bool
};

export default withAuthConsumer(Drawer);
