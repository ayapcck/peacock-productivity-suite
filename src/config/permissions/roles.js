/**
 * If minRequiredRole is admin, role must be admin
 * If minRequiredRole is user, role must be user or admin
 * If minRequiredRole is guest, role can be anything
 * @param {*} minRequiredRole The minimum role needed to view the component or page
 * @param {*} role The role currently being used
 */
const hasRole = (minRequiredRole, role) => {
    switch (minRequiredRole) {
    case 'admin':
        return role === 'admin';
    case 'user':
        return role === 'admin' || role ==='user';
    case 'guest':
        return true;
    default:
        return false;
    }
};

export default hasRole;
