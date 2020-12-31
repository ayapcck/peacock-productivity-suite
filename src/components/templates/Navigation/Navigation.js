import React from 'react';
import { useHistory } from 'react-router-dom';
import {
    useDispatch,
    useSelector,
} from 'react-redux';
import {
    object,
    objectOf,
} from 'prop-types';
import reduce from 'lodash/reduce';

import {
    logoutUser,
    openAuthentication,
} from '../../../redux';

import {
    Drawer,
} from '../../molecules';
import {
    Authentication,
    Menu,
} from '../../organisms';

const itemReducer = navigate => (acc, route) => {
    const {
        children,
        navText,
        permissions,
        route: destination,
        selectable,
    } = route;

    const onItemClick = destination
        ? () => navigate(destination)
        : () => null;

    acc.push({
        children: children ? reduce(children, itemReducer(navigate), []) : null,
        onClick: onItemClick,
        permissions,
        text: navText,
        selectable,
    });

    return acc;
};

const Navigation = (props) => {
    const {
        routes,
    } = props;

    const dispatch = useDispatch();
    const logout = () => dispatch(logoutUser());
    const openAuth = () => dispatch(openAuthentication());

    const history = useHistory();
    const navigate = destination => history.push(destination);

    const {
        loggedIn,
        modalOpen,
    } = useSelector(state => state.authentication);

    const reducedRoutes = reduce(routes, itemReducer(navigate), []);
    const signInItem = {
        onClick: loggedIn ? logout : openAuth,
        text: loggedIn ? 'Log Out' : 'Sign In',
        selectable: false,
    };

    return (
        <>
            <Drawer>
                <Menu
                    items={[ ...reducedRoutes, signInItem ]}
                    type="navigation"
                />
            </Drawer>
            { modalOpen && <Authentication /> }
        </>
    );
};

Navigation.defaultProps = {
    routes: {
        DEFAULT: {
            navText: 'Default',
        },
    },
};

Navigation.propTypes = {
    routes: objectOf(object),
};

export default Navigation;
