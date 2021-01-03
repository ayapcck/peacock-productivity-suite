import authenticationReducer, {
    closeAuthentication,
    loadAuthentication,
    loginUser,
    logoutUser,
    openAuthentication,
    updateLoggedIn,
} from './authenticationSlice';
import permissionsReducer, {
    resetPermissions,
    updatePermissions,
} from './permissionsSlice';
import userReducer, {
    resetUser,
    updateUser,
} from './userSlice';
import utilityReducer, {
    closeLoadingOverlay,
    openLoadingOverlay,
} from './utilitySlice';

export const actions = {
    closeAuthentication,
    closeLoadingOverlay,
    loadAuthentication,
    loginUser,
    logoutUser,
    openAuthentication,
    openLoadingOverlay,
    resetPermissions,
    resetUser,
    updateLoggedIn,
    updatePermissions,
    updateUser,
};

export const reducers = {
    authenticationReducer,
    permissionsReducer,
    userReducer,
    utilityReducer,
};
