import _ from 'lodash';

const hasPermissions = (requiredPermissions, userPermissions) => {
    return _.reduce(requiredPermissions, (res, required, key) => {
        return res && (
            ( required && userPermissions[key] ) || !required
        );
    }, true);
}

export default hasPermissions;
