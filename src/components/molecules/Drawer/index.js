import React, {
    useState,
} from 'react';
import {
    bool,
    node,
    oneOf,
} from 'prop-types';

import {
    Icon,
    Panel,
} from '../../atoms';
import {
    PullRight,
} from '../../styled-elements';

const reverse = {
    left: 'right',
    right: 'left',
};

const Drawer = (props) => {
    const {
        bordered,
        children,
        side,
        startOpen,
    } = props;

    const [ isOpen, setIsOpen ] = useState(startOpen);
    const [ showContent, setShowContent ] = useState(isOpen);

    const toggleOpen = () => {
        if (isOpen) {
            setShowContent(false);
            setIsOpen(false);
        } else {
            setIsOpen(true);
            setTimeout(() => { setShowContent(true); }, 100);
        }
    };

    const _renderContent = () => {
        const shouldPullRight = side === 'right';

        return shouldPullRight
            ? (
                <PullRight>
                    { children }
                </PullRight>
            ) : children;
    };

    const _renderIcon = () => {
        const shouldPullRight = side === 'left';
        const icon = (
            <Icon
                icon="bars"
                onClick={toggleOpen}
            />
        );

        return shouldPullRight
            ? (
                <PullRight>
                    { icon }
                </PullRight>
            ) : icon;
    };

    const revSide = reverse[side];
    const margin = `margin-${revSide}: auto;`;

    return (
        <Panel
            borders={bordered ? [ revSide ] : 'none'}
            styles={margin}
            value={isOpen ? 25 : 3}
        >
            { _renderIcon() }
            { showContent && _renderContent() }
        </Panel>
    );
};

Drawer.defaultProps = {
    bordered: false,
    children: '',
    side: 'left',
    startOpen: true,
};

Drawer.propTypes = {
    bordered: bool,
    children: node,
    side: oneOf([
        'left',
        'right',
    ]),
    startOpen: bool,
};

export default Drawer;
