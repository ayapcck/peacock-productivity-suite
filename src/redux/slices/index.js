import authenticationReducer, {
    closeAuthentication,
    loginUser,
    logoutUser,
    openAuthentication,
} from './authenticationSlice';
import utilityReducer, {
    closeLoadingOverlay,
    openLoadingOverlay,
} from './utilitySlice';

export const actions = {
    closeAuthentication,
    closeLoadingOverlay,
    loginUser,
    logoutUser,
    openAuthentication,
    openLoadingOverlay,
};

export const reducers = {
    authenticationReducer,
    utilityReducer,
};
