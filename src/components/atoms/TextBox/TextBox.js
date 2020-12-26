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
        valid,
    } = props;

    return (
        <StyledTextBox
            name={name}
            onChange={handleChange}
            placeholder={placeHolder}
            type="text"
            valid={valid}
        />
    );
};

TextBox.defaultProps = {
    handleChange: () => null,
    name: 'defaultName',
    placeHolder: 'Placeholder',
    valid: true,
};

TextBox.propTypes = {
    handleChange: func,
    name: string,
    placeHolder: string,
    valid: bool,
};

export default TextBox;
