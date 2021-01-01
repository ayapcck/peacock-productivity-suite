import React from 'react';
// import {} from 'prop-types';

import {
    Spinner,
} from '../../atoms';
import {
    ContentOverlay,
} from '../../molecules';

const LoadingOverlay = () => (
    <ContentOverlay centered>
        <Spinner size="large" />
    </ContentOverlay>
);

LoadingOverlay.defaultProps = {

};

LoadingOverlay.propTypes = {

};

export default LoadingOverlay;
