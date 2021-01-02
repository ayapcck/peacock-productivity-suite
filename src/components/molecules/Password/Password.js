import React from 'react';
import {
    oneOf,
} from 'prop-types';

import {
    Icon,
    TextBox,
    Wrapper,
} from '../../atoms';

const Password = (props) => {
    const {
        ...textBoxPassThrough
    } = props;

    return (
        <Wrapper
            align="center"
            borders={[ 'bottom' ]}
        >
            <TextBox
                { ...textBoxPassThrough }
                bordered={false}
            />
            <Icon icon={[ 'far', 'eye' ]} />
        </Wrapper>
    );
};

Password.defaultProps = {
    variant: 'primary',
};

Password.propTypes = {
    variant: oneOf([ 'primary', 'secondary', 'tertiary' ]),
};

export default Password;
