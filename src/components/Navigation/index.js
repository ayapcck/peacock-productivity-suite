import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import _ from 'lodash';

import ROUTES from '../../constants/routes';
import { withAuth } from '../../config/authContext';
import { withFirebase } from '../../config/firebase';

import AuthControl from '../AuthControl';

const MenuShadow = css`
    box-shadow: 0 2px 4px 0 ${({ theme }) => theme.shadowColor};
`;

const MenuItem = css`
    border-radius: 5px;
    margin: 0 auto 10px auto;
    padding: 5px 10px;
    transition: box-shadow 0.2s;
    width: 90%;

    ${({ selected, theme }) => selected && `
        background-color: ${theme.menuSelected};
    `} ${({ selected }) => selected && MenuShadow}

    &:hover {
        ${MenuShadow}
    }
`;

const ShowLoginLogout = styled.span`
    ${MenuItem}
    color: ${({ theme }) => theme.textColor};

    &:hover {
        cursor: pointer;
    }
`;

const StyledLink = styled(Link)`
    ${MenuItem}    
    color: ${({ selected, theme }) => selected ? theme.menuTextSelected : theme.textColor};
    text-decoration: none;
`;

const StyledNavigation = styled.div`
    display: flex;
    flex-direction: column;
    list-style: none;
    padding: 10px;
`;

const Navigation = ({ authUser, firebase }) => {
    const [ currentPage, setCurrentPage ] = useState(ROUTES.LANDING.navText);
    const [ showAuthControl, setShowAuthControl ] = useState(false);

    const displayAuthControl = () => setShowAuthControl(true);
    const hideAuthControl = () => setShowAuthControl(false);
    const logout = () => firebase.signOut();

    const loginText = authUser ? 'Sign out' : 'Login';

    return (
        <div>
            <StyledNavigation>
                { renderNavLinks(currentPage, setCurrentPage) }
                <ShowLoginLogout
                    onClick={authUser ? logout : displayAuthControl}
                >
                    {loginText}
                </ShowLoginLogout>
            </StyledNavigation>
            { showAuthControl && <AuthControl handleClose={hideAuthControl} /> }
        </div>
    );
};

const renderNavLinks = (currentPage, setCurrentPage) => {
    return _.map(_.keys(ROUTES), (key) => {
        const route = ROUTES[key];
        const selected = currentPage === route.navText;
        return (
            <StyledLink 
                onClick={() => setCurrentPage(route.navText)}
                selected={selected}
                to={route.route}
            >
                {route.navText}
            </StyledLink>
        );
    });
};

export default withAuth(withFirebase(Navigation));
