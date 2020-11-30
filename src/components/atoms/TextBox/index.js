import React from 'react';
import {
    bool,
    func,
    string,
} from 'prop-types';

import { StyledTextBox } from '../../styled-elements';

const TextBox = (props) => {
    const {
        handleChange,
        name,
        placeHolder,
        type,
        valid,
    } = props;

    return (
        <StyledTextBox
            name={name}
            onChange={handleChange}
            placeholder={placeHolder}
            type={type}
            valid={valid}
        />
    );
};

TextBox.defaultTypes = {
    valid: true,
};

TextBox.propTypes = {
    handleChange: func,
    name: string,
    placeHolder: string,
    type: string,
    valid: bool,
};

export default TextBox;
