import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Navigation from '../Navigation';

const Icon = styled(FontAwesomeIcon)`
    color: ${({ theme }) => theme.textColor};

    &:hover {
        cursor: pointer;
    }
`;

const CloseIcon = styled(Icon)`
    margin: 10px 10px 0 auto;
`;

const MenuIcon = styled(Icon)`
    margin: 10px auto;
`;

const StyledDrawer = styled.div`
    border-color: ${({ theme }) => theme.accentColor};
    border-style: solid;
    border-width: 0 2px 0 0;
    box-shadow: 2px 0 4px 0 ${({ theme }) => theme.shadowColor};
    display: flex;
    flex-direction: column;
    height: 100%;
    transition: 0.4s;
    width: ${({ open }) => open ? `30%` : `3%`};
`;

const Drawer = () => {
    const [ open, setOpen ] = useState(false);

    const closeDrawer = () => setOpen(false);
    const openDrawer = () => setOpen(true);

    return (
        <StyledDrawer open={open}>
            { !open && renderMenuIcon(openDrawer) }
            { open && renderCloseIcon(closeDrawer) }
            { open && <Navigation /> }
        </StyledDrawer>
    );
}


const renderCloseIcon = (onClick) => (
    <CloseIcon icon="times-circle" onClick={onClick} />
);
const renderMenuIcon = (onClick) => (
    <MenuIcon icon="bars" onClick={onClick}/>
);

Drawer.defaultProps = {

};

Drawer.propTypes = {

};

export default Drawer;
