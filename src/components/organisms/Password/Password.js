import React from 'react';
import {
    oneOf,
} from 'prop-types';

import {
    TextField,
} from '../../molecules';

const Password = (props) => {
    const {
        variant,
    } = props;

    return (
        <TextField
            icon={[ 'far', 'eye' ]}
            variant={variant}
        />
    );
};

Password.defaultProps = {
    variant: 'primary',
};

Password.propTypes = {
    variant: oneOf([ 'primary', 'secondary', 'tertiary' ]),
};

export default Password;
