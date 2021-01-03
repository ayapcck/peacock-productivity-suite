import {
    createAsyncThunk,
    createSlice,
} from '@reduxjs/toolkit';

import firebase from '../../config/firebase';

import {
    resetPermissions,
    updatePermissions,
} from './permissionsSlice';
import {
    resetUser,
    updateUser,
} from './userSlice';
import {
    closeLoadingOverlay,
    openLoadingOverlay,
} from './utilitySlice';

const INITIAL_STATE = {
    loading: 'idle',
    loggedIn: false,
    modalOpen: false,
};

const pending = state => ({
    ...state,
    loading: 'pending',
});

const rejected = state => ({
    ...state,
    loading: 'idle',
    loggedIn: false,
});

const resetAuth = dispatch => {
    dispatch(resetPermissions());
    dispatch(resetUser());
};

const loadAuthentication = createAsyncThunk(
    'authentication/load',
    async ({ authUser }, { dispatch }) => {
        if (authUser) {
            const { uid } = authUser;
            const userRes = await firebase.getUser(uid);
            const user = userRes.val();
            if (user) {
                dispatch(updateUser({ ...user }));
                const { role } = user;
                const roleRes = await firebase.getRole(role);
                const permissions = roleRes.val();
                dispatch(updatePermissions({ ...permissions }));
                return true;
            } else {
                resetAuth(dispatch);
                return false;
            }
        }
    }
);

const loginUser = createAsyncThunk(
    'authentication/loginUser',
    async ({ user: { email, password } }, { dispatch }) => {
        await firebase.signInWithEmailAndPassword(email, password);
        dispatch(closeAuthentication());
    }
);

const logoutUser = createAsyncThunk(
    'authentication/logoutUser',
    async (payload, { dispatch }) => {
        dispatch(openLoadingOverlay());
        await firebase.signOut();
        resetAuth(dispatch);
        dispatch(closeLoadingOverlay());
    }
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
        updateLoggedIn: (state, { payload }) => ({
            ...state,
            loggedIn: payload,
        }),
    },
    extraReducers: {
        [loadAuthentication.fulfilled]: (state, { payload }) => {
            console.log(payload);
            return {
                ...state,
                loading: 'idle',
                loggedIn: !!payload,
            };
        },
        [loadAuthentication.pending]: pending,
        [loadAuthentication.rejected]: rejected,
        [loginUser.fulfilled]: state => ({
            ...state,
            loading: 'idle',
            loggedIn: true,
        }),
        [loginUser.pending]: pending,
        [loginUser.rejected]: rejected,
        [logoutUser.fulfilled]: () => INITIAL_STATE,
        [logoutUser.pending]: pending,
    },
});

const {
    closeAuthentication,
    openAuthentication,
    updateLoggedIn,
} = actions;

export {
    closeAuthentication,
    loadAuthentication,
    loginUser,
    logoutUser,
    openAuthentication,
    updateLoggedIn,
};

export default reducer;
