const createUser = (name, permissions, role) => ({
    name, permissions, role
});

export const Admin = createUser('Admin', { administrator: true }, 'admin');
export const Guest = createUser('Guest', {}, 'guest');
