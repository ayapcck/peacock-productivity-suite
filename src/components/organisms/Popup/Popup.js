import React from 'react';
import {
    bool,
    func,
    node,
} from 'prop-types';

import {
    Card,
    Icon,
    Wrapper,
} from '../../atoms';
import {
    ContentOverlay,
} from '../../molecules';

const Popup = (props) => {
    const {
        children,
        handleClose,
        tall,
    } = props;

    return (
        <ContentOverlay onOverlayClick={handleClose}>
            <Card value={tall ? 0.6 : 0.3}>
                <Wrapper padding="standard">
                    <Wrapper
                        position="absolute"
                        right={10}
                    >
                        <Icon
                            icon={[ 'far', 'times-circle' ]}
                            onClick={handleClose}
                        />
                    </Wrapper>
                    { children }
                </Wrapper>
            </Card>
        </ContentOverlay>
    );
};

Popup.defaultProps = {
    children: '',
    handleClose: () => true,
    tall: false,
};

Popup.propTypes = {
    children: node,
    handleClose: func,
    tall: bool,
};

export default Popup;
