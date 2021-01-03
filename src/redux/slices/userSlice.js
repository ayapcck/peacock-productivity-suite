import {
    createSlice,
} from '@reduxjs/toolkit';

const INITIAL_STATE = {
    email: '',
    name: '',
    role: 'guest',
};

const { actions, reducer } = createSlice({
    initialState: INITIAL_STATE,
    name: 'user',
    reducers: {
        resetUser: () => INITIAL_STATE,
        updateUser: (state, { payload }) => ({
            ...state,
            ...payload,
        }),
    },
});

const {
    resetUser,
    updateUser,
} = actions;

export {
    resetUser,
    updateUser,
};

export default reducer;
