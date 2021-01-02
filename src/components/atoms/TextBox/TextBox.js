import React from 'react';
import {
    bool,
    func,
    oneOf,
    string,
} from 'prop-types';

import { getUsedBorderSides } from '../../../logics';
import { StyledTextBox } from '../../styled-elements';

const TextBox = (props) => {
    const {
        bordered,
        handleChange,
        placeHolder,
        ...passThrough
    } = props;

    const borders = bordered ? [ 'bottom' ] : 'none';

    return (
        <StyledTextBox
            { ...passThrough }
            { ...getUsedBorderSides(borders) }
            borders={borders}
            onChange={handleChange}
            placeholder={placeHolder}
            type="text"
        />
    );
};

TextBox.defaultProps = {
    bordered: true,
    handleChange: () => null,
    name: 'defaultName',
    placeHolder: 'Placeholder',
    valid: true,
    variant: 'primary',
};

TextBox.propTypes = {
    bordered: bool,
    handleChange: func,
    name: string,
    placeHolder: string,
    valid: bool,
    variant: oneOf([ 'primary', 'secondary', 'tertiary' ]),
};

export default TextBox;
