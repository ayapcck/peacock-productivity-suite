import React from 'react';
import {
    bool,
    func,
    oneOf,
    string,
} from 'prop-types';

import { StyledTextBox } from '../../styled-elements';

const TextBox = (props) => {
    const {
        handleChange,
        placeHolder,
        ...passThrough
    } = props;

    return (
        <StyledTextBox
            { ...passThrough }
            onChange={handleChange}
            placeholder={placeHolder}
        />
    );
};

TextBox.defaultProps = {
    handleChange: () => null,
    name: 'defaultName',
    placeHolder: 'Placeholder',
    type: 'text',
    valid: true,
    variant: 'primary',
};

TextBox.propTypes = {
    handleChange: func,
    name: string,
    placeHolder: string,
    type: oneOf([ 'password', 'text' ]),
    valid: bool,
    variant: oneOf([ 'primary', 'secondary', 'tertiary' ]),
};

export default TextBox;
