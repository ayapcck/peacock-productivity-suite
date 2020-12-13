import React from 'react';
import {
    array,
    func,
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
};

Icon.propTypes = {
    className: string,
    icon: oneOfType([ string, array ]),
    onClick: func,
};

export default Icon;
