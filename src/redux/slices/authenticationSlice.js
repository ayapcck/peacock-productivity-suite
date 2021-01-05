import {
    createAsyncThunk,
    createSlice,
} from '@reduxjs/toolkit';
import reduce from 'lodash/reduce';

import firebase from '../../config/firebase';

import {
    INITIAL_AUTH_STATE,
} from './state';
import {
    closeLoadingOverlay,
    openLoadingOverlay,
} from './utilitySlice';

const authReducer = (state, { payload }) => {
    const {
        permissions: prevPermissions,
        user: prevUser,
        ...prevRest
    } = state;
    const {
        permissions = {},
        user = {},
        ...rest
    } = payload;

    return {
        ...prevRest,
        permissions: {
            ...prevPermissions,
            ...permissions,
        },
        user: {
            ...prevUser,
            ...user,
        },
        ...rest,
    };
};

const idle = state => ({
    ...state,
    loadingState: 'idle',
});
const pending = state => ({
    ...state,
    loadingState: 'pending',
});
const rejected = state => ({
    ...state,
    isLoggedIn: false,
    loadingState: 'idle',
});

const loadAuthentication = createAsyncThunk(
    'authentication/load',
    async ({ authUser }, { dispatch }) => {
        if (authUser) {
            const { uid } = authUser;
            const userRes = await firebase.getUser(uid);
            const user = userRes.val();
            if (user) {
                const { role } = user;
                const roleRes = await firebase.getRole(role);
                const permissions = roleRes.val();
                dispatch(updateAuthentication({
                    isLoggedIn: true,
                    permissions,
                    user,
                }));
            }
        }
    }
);

const loginUser = createAsyncThunk(
    'authentication/loginUser',
    async ({ email, password }, { dispatch }) => {
        await firebase.signInWithEmailAndPassword(email, password);
        dispatch(closeAuthentication());
    }
);

const logoutUser = createAsyncThunk(
    'authentication/logoutUser',
    async (payload, { dispatch }) => {
        dispatch(openLoadingOverlay());
        await firebase.signOut();
        dispatch(closeLoadingOverlay());
    }
);

const registerUser = createAsyncThunk(
    'authentication/registerUser',
    async (user, { dispatch }) => {
        const {
            email,
            name,
            password,
        } = user;

        const { user: { uid } } = await firebase.createUserWithEmailAndPassword(email, password);
        const newUser = {
            email,
            name,
            role: 'user',
        };
        await firebase.setUser(uid, newUser);
        dispatch(closeAuthentication());
    }
);

const thunks = [ loadAuthentication, loginUser, registerUser ];
const extraReducers = reduce(thunks, (acc, thunk) => ({
    ...acc,
    [thunk.fulfilled]: idle,
    [thunk.pending]: pending,
    [thunk.rejected]: rejected,
}), {});

const { actions, reducer } = createSlice({
    initialState: INITIAL_AUTH_STATE,
    name: 'authentication',
    reducers: {
        closeAuthentication: state => ({
            ...state,
            isModalOpen: false,
        }),
        openAuthentication: state => ({
            ...state,
            isModalOpen: true,
        }),
        updateAuthentication: authReducer,
        updateLoadingState: (state, { payload }) => ({
            ...state,
            loadingState: payload,
        }),
    },
    extraReducers: {
        ...extraReducers,
        [logoutUser.fulfilled]: () => INITIAL_AUTH_STATE,
        [logoutUser.pending]: pending,
        [logoutUser.rejected]: rejected,
    },
});

const {
    closeAuthentication,
    openAuthentication,
    updateAuthentication,
} = actions;

export {
    closeAuthentication,
    loadAuthentication,
    loginUser,
    logoutUser,
    openAuthentication,
    registerUser,
    updateAuthentication,
};

export default reducer;
