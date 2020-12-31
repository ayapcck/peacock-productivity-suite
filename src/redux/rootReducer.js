import { combineReducers } from '@reduxjs/toolkit';

import authenticationReducer from './slices/authenticationSlice';

const rootReducer = combineReducers({
    authentication: authenticationReducer,
});

export default rootReducer;
