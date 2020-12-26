import React, {
    useState,
} from 'react';
import {
    bool,
    node,
    oneOf,
} from 'prop-types';

import {
    withPullRight,
} from '../../../logics';

import {
    Icon,
    Panel,
} from '../../atoms';

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

    const revSide = reverse[side];
    const margin = `margin-${revSide}: auto;`;

    const Content = withPullRight(side === 'right')(() => showContent && <>{ children }</>);
    const MenuIcon = withPullRight(side === 'left')(Icon);

    return (
        <Panel
            borders={bordered ? [ revSide ] : 'none'}
            styles={margin}
            value={isOpen ? 25 : 3}
        >
            <MenuIcon
                name="bars"
                onClick={toggleOpen}
            />
            <Content />
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
