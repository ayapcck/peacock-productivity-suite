import React from 'react';
import { useSelector } from 'react-redux';

const withLoading = Component => props => {
    const { loadingState } = useSelector(state => state.authentication);

    const isLoading = loadingState === 'pending';

    return (
        <Component
            { ...props }
            isLoading={isLoading}
        />
    );
};

export default withLoading;
