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

import { getRouteByPath } from '../../utilities/routeHelper';
import { hasPermissions } from '../../config/permissions';
import ROUTES from '../../constants/routes';
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
const AppsContainer = styled.div`
    display: flex;
    flex-direction: column;

    & a {
        box-sizing: border-box;
        margin: 0;
        padding: 5px 10px;
        width: 100%;
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

const StyledNavItem = styled.span`
    ${MenuItem}
    color: ${({ theme }) => theme.textColor};

    &:hover {
        cursor: pointer;
    }
`;

const SubItemContainer = styled.div`
    border-style: solid;
    border-width: 0 0 0 2px;
    color: ${({ theme }) => theme.textColor};
    display: flex;
    margin: 0 auto 10px 20px;
    padding: 5px 10px;
    transition: box-shadow 0.2s;
    width: 90%;
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
                <StyledNavItem
                    className="Navigation_LoginRegisterLink"
                    onClick={signedIn ? logout : displayAuthControl}
                >
                    {loginText}
                </StyledNavItem>
            </StyledNavigation>
            { showAuthControl && <AuthControl {...authControlProps} /> }
        </div>
    );
};

const renderChangePasswordLink = (displayChangePasswordForm) => (
    <StyledNavItem onClick={displayChangePasswordForm}>Change Password</StyledNavItem>
);

const renderNavLinks = (userPermissions, currentPage) => {
    return _.map(_.keys(ROUTES), (key, index) => {
        const route = ROUTES[key];
        const isApps = key === 'APPS';
        const selected = !isApps && currentPage === route.navText;

        const linkProps = { 
            currentPage,
            index,
            route,
            selected,
            userPermissions,
        };

        return isApps ? renderSubLinks(linkProps) : renderNavLink(linkProps);
    });
};

const renderNavLink = (props) => {
    const {
        index,
        route,
        selected,
        userPermissions,
    } = props;
    const {
        navText,
        permissions,
    } = route;

    return hasPermissions(permissions, userPermissions) && (
        <StyledLink
            key={index}            
            selected={selected}
            to={route.route}
        >
            {navText}
        </StyledLink>
    );
};

const renderSubLinks = (props) => {
    const { 
        currentPage,
        route: apps,
    } = props;
    
    const subLinks = _.map(_.keys(apps), (key, index) => {
        const app = apps[key];
        const selected = currentPage === app.navText;
        const appProps = {
            ...props,
            route: app,
            selected,
        };
        return renderNavLink(appProps);
    });

    return (
        <AppsContainer>
            <StyledNavItem>Apps:</StyledNavItem>
            <SubItemContainer>
                { subLinks }
            </SubItemContainer>
        </AppsContainer>
    )
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
