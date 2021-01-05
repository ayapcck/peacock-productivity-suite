import authenticationReducer, {
    closeAuthentication,
    loadAuthentication,
    loginUser,
    logoutUser,
    openAuthentication,
    updateAuthentication,
    registerUser,
} from './authenticationSlice';
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
    registerUser,
    updateAuthentication,
};

export const reducers = {
    authenticationReducer,
    utilityReducer,
};
