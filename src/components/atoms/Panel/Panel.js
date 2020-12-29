import React from 'react';
import {
    bool,
    node,
    number,
    oneOf,
    string,
} from 'prop-types';

import {
    getUsedBorderSides,
    isSidesProp,
} from '../../../logics';
import {
    StyledPanel,
} from '../../styled-elements';

/**
 * A panel, specified by a value and either 'height' or 'width'
 * The panel spans the entire length of the parent container in the direction other than the specified direction
 * i.e. <Panel type='height' value={50} /> corresponds to a panel spanning 50% of the parent height and 100% of the width
 */
const Panel = (props) => {
    const {
        borders,
        children,
        type,
    } = props;

    const bordered = borders !== 'none';
    const height = type === 'height';
    return (
        <StyledPanel
            { ...getUsedBorderSides(borders) }
            { ...props }
            bordered={bordered}
            isHeight={height}
        >
            { children }
        </StyledPanel>
    );
};

Panel.defaultProps = {
    borders: 'none',
    centered: false,
    children: '',
    styles: '',
    type: 'width',
    value: 25,
    variant: 'primary',
};

Panel.propTypes = {
    borders: isSidesProp,
    centered: bool,
    children: node,
    styles: string,
    type: oneOf([
        'height',
        'width',
    ]),
    value: number,
    variant: oneOf([ 'primary', 'secondary', 'tertiary' ]),
};

export default Panel;
