/**
 * If minRequiredRole is admin, role must be admin
 * If minRequiredRole is user, role must be user or admin
 * @param {*} minRequiredRole The minimum role needed to view the component or page
 * @param {*} role The role currently being used
 */
const hasRole = (minRequiredRole, role) => minRequiredRole === 'admin'
    ? role === 'admin'
    : role === 'admin' || role === 'user';

export default hasRole;
