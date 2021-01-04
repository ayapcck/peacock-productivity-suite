import authenticationReducer, {
    closeAuthentication,
    loadAuthentication,
    loginUser,
    logoutUser,
    openAuthentication,
    updateAuthentication,
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
    updateAuthentication,
};

export const reducers = {
    authenticationReducer,
    utilityReducer,
};
