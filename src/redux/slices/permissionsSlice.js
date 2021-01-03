import {
    createSlice,
} from '@reduxjs/toolkit';

const INITIAL_STATE = {
    administrator: false,
};

const { actions, reducer } = createSlice({
    initialState: INITIAL_STATE,
    name: 'permissions',
    reducers: {
        resetPermissions: () => INITIAL_STATE,
        updatePermissions: (state, { payload }) => ({
            ...state,
            ...payload,
        }),
    },
});

const {
    resetPermissions,
    updatePermissions,
} = actions;

export {
    resetPermissions,
    updatePermissions,
};

export default reducer;
