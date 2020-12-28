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

    const dimensions = {
        height: tall ? '60%' : '30%',
        width: '30%',
    };

    return (
        <Wrapper centered>
            <Overlay onClick={handleClose} />
            <Card { ...dimensions }>
                <Wrapper
                    flexDirection="column"
                    position="relative"
                    hasPadding
                >
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
