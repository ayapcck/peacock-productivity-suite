const createUser = (name, permissions, role) => ({
    name, permissions, role,
});

export const getAuthUser = ({ permissions: userPermissions, role }) => ({ user: { role }, userPermissions });

export const Admin = createUser('Admin', { administrator: true }, 'admin');
export const Guest = createUser('Guest', {}, 'guest');

export const AdminAuthUser = getAuthUser(Admin);
export const GuestAuthUser = getAuthUser(Guest);
