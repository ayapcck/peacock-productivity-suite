import React from 'react';
import { useSelector } from 'react-redux';

const withLoading = Component => props => {
    const { loading } = useSelector(state => state.authentication);

    const isLoading = loading === 'pending';

    return (
        <Component
            { ...props }
            isLoading={isLoading}
        />
    );
};

export default withLoading;
