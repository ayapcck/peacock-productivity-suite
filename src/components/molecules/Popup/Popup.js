import React from 'react';
import {
    bool,
    func,
    node,
} from 'prop-types';

import {
    Card,
    Icon,
    Overlay,
    Wrapper,
} from '../../atoms';

const Popup = (props) => {
    const {
        children,
        handleClose,
        tall,
    } = props;

    return (
        <Wrapper justify="space-around">
            <Overlay onClick={handleClose} />
            <Wrapper
                flexDirection="column"
                justify="space-around"
                value={0.3}
            >
                <Card value={tall ? 0.6 : 0.3}>
                    <Wrapper hasPadding>
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
            </Wrapper>
        </Wrapper>
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
