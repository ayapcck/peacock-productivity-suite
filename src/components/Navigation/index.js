import React, { useState } from 'react';
import {
    func,
    object,
    shape,
} from 'prop-types';
import { 
    Link,
    useLocation, 
} from 'react-router-dom';
import styled, { css } from 'styled-components';
import _ from 'lodash';

import { hasPermissions } from '../../config/permissions';
import ROUTES, { getRouteByPath } from '../../constants/routes';
import { withAuthConsumer } from '../../config/session';
import { withFirebase } from '../../config/firebase';

import AuthControl from '../AuthControl';

/** General CSS for styled components */
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

/** Styled components for Navigation */
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

const StyledPopupLink = styled.span`
    ${MenuItem}
    color: ${({ theme }) => theme.textColor};

    &:hover {
        cursor: pointer;
    }
`;

const getCurrentPage = location => {
    const path = location.pathname;
    const route = getRouteByPath(path);
    return route.navText;
};

const Navigation = ({ auth, firebase }) => {
    const [ showAuthControl, setShowAuthControl ] = useState(false);
    const [ showChangePassword, setShowChangePassword ] = useState(false);

    const { user, userPermissions } = auth;

    const displayAuthControl = () => setShowAuthControl(true);
    const displayChangePasswordForm = () => {
        setShowAuthControl(true);
        setShowChangePassword(true);
    };
    const hideAuthControl = () => {
        setShowAuthControl(false);
        setShowChangePassword(false);
    };
    const logout = () => firebase.signOut();

    const authControlProps = {
        handleClose: hideAuthControl,
        useChangePasswordForm: showChangePassword,
    };
    const currentPage = getCurrentPage(useLocation());
    const signedIn = user.role !== 'guest';
    const loginText = signedIn ? 'Sign out' : 'Login';

    return (
        <div>
            <StyledNavigation>
                { renderNavLinks(userPermissions, currentPage) }
                { signedIn && renderChangePasswordLink(displayChangePasswordForm) }
                <StyledPopupLink
                    onClick={signedIn ? logout : displayAuthControl}
                >
                    {loginText}
                </StyledPopupLink>
            </StyledNavigation>
            { showAuthControl && <AuthControl {...authControlProps} /> }
        </div>
    );
};

const renderChangePasswordLink = (displayChangePasswordForm) => (
    <StyledPopupLink onClick={displayChangePasswordForm}>Change Password</StyledPopupLink>
);

const renderNavLinks = (userPermissions, currentPage) => {
    return _.map(_.keys(ROUTES), (key) => {
        const route = ROUTES[key];
        
        const selected = currentPage === route.navText;
        return hasPermissions(route.permissions, userPermissions) && (
            <StyledLink
                selected={selected}
                to={route.route}
            >
                {route.navText}
            </StyledLink>
        );
    });
};

Navigation.propTypes = {
    auth: shape({
        user: object,
    }),
    firebase: shape({
        signOut: func,
    }),
};

export default withAuthConsumer(withFirebase(Navigation));
