import React, {
    useState,
} from 'react';
import {
    oneOf,
} from 'prop-types';

import {
    Icon,
} from '../../atoms';
import {
    TextField,
} from '../../molecules';

const Password = (props) => {
    const {
        variant,
        ...textBoxPassThrough
    } = props;

    const [ visible, setVisible ] = useState(false);

    const iconType = visible ? 'eye-slash' : 'eye';

    const Eye = () => (
        <Icon
            icon={[ 'far', iconType ]}
            onClick={() => setVisible(!visible)}
        />
    );

    return (
        <TextField
            { ...textBoxPassThrough }
            RightIcon={Eye}
            type={visible ? 'text' : 'password'}
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
