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
} from '../../atoms';
import {
    CenteredContainer,
    FlexColumn,
    PullRight,
} from '../../styled-elements';

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
        <CenteredContainer>
            <Overlay onClick={handleClose} />
            <Card { ...dimensions }>
                <FlexColumn>
                    <PullRight>
                        <Icon
                            icon={[ 'far', 'times-circle' ]}
                            onClick={handleClose}
                        />
                    </PullRight>
                    { children }
                </FlexColumn>
            </Card>
        </CenteredContainer>
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
