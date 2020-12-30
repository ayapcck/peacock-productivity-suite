import React, {
    useState,
} from 'react';
import { useHistory } from 'react-router-dom';
import {
    object,
    objectOf,
} from 'prop-types';
import reduce from 'lodash/reduce';

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

    const [ isAuthDisplayed, setIsAuthDisplayed ] = useState(true);
    const showAuth = () => setIsAuthDisplayed(true);
    const hideAuth = () => setIsAuthDisplayed(false);

    const history = useHistory();
    const navigate = destination => history.push(destination);

    const reducedRoutes = reduce(routes, itemReducer(navigate), []);
    const signInItem = {
        onClick: showAuth,
        text: 'Sign In',
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
            {
                isAuthDisplayed && (
                    <Authentication
                        handleClose={hideAuth}
                    />
                )
            }
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
