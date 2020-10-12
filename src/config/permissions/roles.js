import _ from 'lodash';

const hasPermissions = (requiredPermissions, userPermissions) => 
    _.reduce(requiredPermissions, (res, required, key) =>
        res && required && userPermissions[key], true);

export default hasPermissions;
