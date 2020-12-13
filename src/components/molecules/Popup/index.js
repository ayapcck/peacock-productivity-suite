import React from 'react';
import {
    bool,
    func,
    node,
} from 'prop-types';
import flowRight from 'lodash/flowRight';

import {
    withPaddedWrapper,
    withPullRight,
} from '../../../logics';

import {
    Card,
    Icon,
    Overlay,
} from '../../atoms';
import {
    CenteredContainer,
    FlexColumn,
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

    const CloseIcon = flowRight([
        withPullRight(true),
        withPaddedWrapper,
    ])(Icon);

    return (
        <CenteredContainer>
            <Overlay onClick={handleClose} />
            <Card { ...dimensions }>
                <FlexColumn>
                    <CloseIcon
                        icon={[ 'far', 'times-circle' ]}
                        onClick={handleClose}
                    />
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
