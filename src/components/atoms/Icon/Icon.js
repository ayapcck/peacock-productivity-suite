import React from 'react';
import {
    array,
    func,
    oneOf,
    oneOfType,
    string,
} from 'prop-types';

import {
    StyledIcon,
} from '../../styled-elements';

const Icon = (props) => {
    const {
        ...passThrough
    } = props;

    return (
        <StyledIcon
            { ...passThrough }
        />
    );
};

Icon.defaultProps = {
    className: '',
    icon: 'bars',
    onClick: () => null,
    variant: 'primary',
};

Icon.propTypes = {
    className: string,
    icon: oneOfType([ string, array ]),
    onClick: func,
    variant: oneOf([ 'primary', 'secondary', 'tertiary' ]),
};

export default Icon;
