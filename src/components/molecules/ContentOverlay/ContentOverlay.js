import React from 'react';
import {
    bool,
    func,
    node,
} from 'prop-types';

import {
    Overlay,
    Wrapper,
} from '../../atoms';

const ContentOverlay = (props) => {
    const {
        centered,
        children,
        onOverlayClick,
    } = props;

    return (
        <Wrapper
            justify="space-around"
            position="absolute"
            forceMaxContent
        >
            <Overlay onClick={onOverlayClick} />
            <Wrapper
                align={ centered ? 'center' : 'unset'}
                flexDirection="column"
                justify="space-around"
                value={0.3}
            >
                { children }
            </Wrapper>
        </Wrapper>
    );
};

ContentOverlay.defaultProps = {
    centered: false,
    children: null,
    onOverlayClick: () => null,
};

ContentOverlay.propTypes = {
    centered: bool,
    children: node,
    onOverlayClick: func,
};

export default ContentOverlay;
