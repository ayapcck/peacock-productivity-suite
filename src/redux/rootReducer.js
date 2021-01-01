import { combineReducers } from '@reduxjs/toolkit';

import {
    authenticationReducer,
    utilityReducer,
} from './reducers';

const rootReducer = combineReducers({
    authentication: authenticationReducer,
    utility: utilityReducer,
});

export default rootReducer;
