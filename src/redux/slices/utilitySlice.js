import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
    isLoadingOverlayOpen: false,
};

const { actions, reducer } = createSlice({
    initialState: INITIAL_STATE,
    name: 'utilities',
    reducers: {
        closeLoadingOverlay: state => ({
            ...state,
            isLoadingOverlayOpen: false,
        }),
        openLoadingOverlay: state => ({
            ...state,
            isLoadingOverlayOpen: true,
        }),
    },
});

const {
    closeLoadingOverlay,
    openLoadingOverlay,
} = actions;

export {
    closeLoadingOverlay,
    openLoadingOverlay,
};

export default reducer;
