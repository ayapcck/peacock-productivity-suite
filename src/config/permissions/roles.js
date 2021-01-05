import reduce from 'lodash/reduce';

const hasPermissions = (requiredPermissions, userPermissions = {}) => reduce(
    requiredPermissions,
    (res, required, key) => {
        return res && required && userPermissions[key];
    },
    true
);

export default hasPermissions;
