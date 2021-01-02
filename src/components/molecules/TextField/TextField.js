import React from 'react';
import {
    arrayOf,
    bool,
    oneOf,
    oneOfType,
    string,
} from 'prop-types';

import {
    Icon,
    TextBox,
    Wrapper,
} from '../../atoms';

const TextField = (props) => {
    const {
        icon,
        ...textBoxPassThrough
    } = props;

    return (
        <Wrapper
            align="center"
            borders={[ 'bottom' ]}
            padding="small"
        >
            <TextBox
                { ...textBoxPassThrough }
                bordered={false}
            />
            { icon !== 'none' && <Icon icon={icon} /> }
        </Wrapper>
    );
};

TextField.defaultProps = {
    icon: 'none',
    variant: 'primary',
};

TextField.propTypes = {
    icon: oneOfType([ string, arrayOf(string) ]),
    variant: oneOf([ 'primary', 'secondary', 'tertiary' ]),
};

export default TextField;
