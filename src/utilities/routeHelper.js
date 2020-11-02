import _ from 'lodash';

import ROUTES from '../constants/routes';

export const getRouteByPath = path => {
    const topLevelRoute = _.find(ROUTES, route => route.route === path);
    return topLevelRoute || _.find(ROUTES.APPS, appRoute => appRoute.route === path);
};
