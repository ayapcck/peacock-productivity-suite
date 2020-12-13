import React from 'react';
import {
    bool,
    node,
    number,
    oneOf,
    string,
} from 'prop-types';
import {
    isArray,
    mapValues,
} from 'lodash';

import {
    StyledPanel,
} from '../../styled-elements';

const borderSides = {
    bottomBorder: 'bottom',
    leftBorder: 'left',
    rightBorder: 'right',
    topBorder: 'top',
};

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

    const usedBorderSides = mapValues(borderSides, side => borders.includes(side));

    const boredered = borders !== 'none';
    const height = type === 'height';
    return (
        <StyledPanel
            { ...props }
            { ...usedBorderSides }
            bordered={boredered}
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
};

const isBordersProp = (props, propName, componentName) => {
    const value = props[propName];
    const sides = [ 'bottom', 'left', 'right', 'top' ];

    if (value === 'all' || value === 'none') return null;
    if (isArray(value)) {
        const errors = [];
        value.forEach(sideItem => !sides.includes(sideItem) &&
                errors.push(`Invalid prop '${sideItem}' supplied to ${componentName}'s '${propName}' prop. Validation failed`));
        if (errors.length !== 0) return new Error(errors[0]);
    }
    return null;
};

Panel.propTypes = {
    borders: isBordersProp,
    centered: bool,
    children: node,
    styles: string,
    type: oneOf([
        'height',
        'width',
    ]),
    value: number,
};

export default Panel;
