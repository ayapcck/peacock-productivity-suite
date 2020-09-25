import React, { useState } from 'react';

import Icon from '../subcomponents/Icon';
import styled from 'styled-components';

import Navigation from '../Navigation';

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

const Drawer = () => {
    const [ open, setOpen ] = useState(false);
    const [ showNavigation, setShowNavigation ] = useState(false);

    // const closeDrawer = () => setOpen(false);
    // const openDrawer = () => setOpen(true);
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
            { renderMenuIcon(open, toggleDrawer) }
            { showNavigation && <Navigation /> }
        </StyledDrawer>
    );
}


// const renderCloseIcon = (onClick) => (
//     <CloseIcon icon="times-circle" onClick={onClick} />
// );
const renderMenuIcon = (open, onClick) => (
    <MenuIcon 
        icon="bars" 
        onClick={onClick}
    />
);

Drawer.defaultProps = {

};

Drawer.propTypes = {

};

export default Drawer;
