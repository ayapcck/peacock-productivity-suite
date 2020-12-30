import React from 'react';
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

    const history = useHistory();
    const navigate = destination => history.push(destination);

    const reducedRoutes = reduce(routes, itemReducer(navigate), []);
    const signInItem = {
        onClick: () => null,
        text: 'Sign In',
        selectable: false,
    };

    return (
        <Drawer>
            <Menu
                items={[ ...reducedRoutes, signInItem ]}
                type="navigation"
            />
        </Drawer>
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
