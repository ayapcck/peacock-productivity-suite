import {
    createAsyncThunk,
    createSlice,
} from '@reduxjs/toolkit';

const INITIAL_STATE = {
    loading: 'idle',
    loggedIn: false,
    modalOpen: false,
    user: {},
};

const loginUser = createAsyncThunk(
    'users/loginUser',
    async ({ user, password }, { dispatch }) =>
        await new Promise(resolve => {
            setTimeout(() => {
                resolve(`testing ${user} ${password}`);
                dispatch(closeAuthentication());
            }, 1000);
        })
);

const logoutUser = createAsyncThunk(
    'users/logoutUser',
    async () => await new Promise(resolve => {
        setTimeout(resolve, 500);
    })
);

const { actions, reducer } = createSlice({
    initialState: INITIAL_STATE,
    name: 'authentication',
    reducers: {
        closeAuthentication: state => ({
            ...state,
            modalOpen: false,
        }),
        openAuthentication: state => ({
            ...state,
            modalOpen: true,
        }),
    },
    extraReducers: {
        [loginUser.fulfilled]: (state, { payload }) => ({
            ...state,
            loading: 'idle',
            loggedIn: true,
            user: payload,
        }),
        [loginUser.pending]: state => ({
            ...state,
            loading: 'pending',
        }),
        [loginUser.rejected]: state => ({
            ...state,
            loading: 'idle',
            loggedIn: false,
        }),
        [logoutUser.fulfilled]: () => INITIAL_STATE,
        [logoutUser.pending]: state => ({
            ...state,
            loading: 'pending',
        }),
    },
});

const {
    closeAuthentication,
    openAuthentication,
} = actions;

export {
    closeAuthentication,
    loginUser,
    logoutUser,
    openAuthentication,
};

export default reducer;
