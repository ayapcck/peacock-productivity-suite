const INITIAL_PERMISSIONS = {
    administrator: false,
};

const INITIAL_USER = {
    email: '',
    name: '',
    role: 'guest',
};

const INITIAL_AUTH_STATE = {
    isLoggedIn: false,
    isModalOpen: false,
    loadingState: 'idle',
    permissions: INITIAL_PERMISSIONS,
    user: INITIAL_USER,
};

export {
    INITIAL_PERMISSIONS,
    INITIAL_USER,
    INITIAL_AUTH_STATE,
};
