import { combineReducers } from '@reduxjs/toolkit';

import {
    authenticationReducer,
    permissionsReducer,
    userReducer,
    utilityReducer,
} from './reducers';

const rootReducer = combineReducers({
    authentication: authenticationReducer,
    permissions: permissionsReducer,
    user: userReducer,
    utility: utilityReducer,
});

export default rootReducer;
