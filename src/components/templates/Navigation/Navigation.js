import React from 'react';
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

const itemReducer = (acc, route) => {
    const {
        children,
        navText,
        permissions,
        route: destination,
    } = route;

    acc.push({
        children: children ? reduce(children, itemReducer, []) : null,
        destination,
        permissions,
        text: navText,
    });

    return acc;
};

const Navigation = (props) => {
    const {
        routes,
    } = props;

    return (
        <Drawer>
            <Menu
                items={reduce(routes, itemReducer, [])}
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
