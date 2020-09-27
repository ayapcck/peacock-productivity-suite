import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import _ from 'lodash';

import ROUTES from '../../constants/routes';

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

const ShowLogin = styled.span`
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

const Navigation = () => {
    const [ currentPage, setCurrentPage ] = useState(ROUTES.LANDING.navText);
    const [ showAuthControl, setShowAuthControl ] = useState(false);

    const hideAuthControl = () => setShowAuthControl(false);
    const displayAuthControl = () => setShowAuthControl(true);

    return (
        <div>
            <StyledNavigation>
                { renderNavLinks(currentPage, setCurrentPage) }
                <ShowLogin onClick={displayAuthControl}>Login</ShowLogin>
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

export default Navigation;
