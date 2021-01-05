import React from 'react';
import {
    element,
    oneOf,
} from 'prop-types';

import {
    TextBox,
    Wrapper,
} from '../../atoms';

const TextField = (props) => {
    const {
        LeftIcon,
        RightIcon,
        ...textBoxPassThrough
    } = props;

    return (
        <Wrapper
            align="center"
            borders={[ 'bottom' ]}
            padding="small"
        >
            { LeftIcon && <LeftIcon /> }
            <TextBox
                { ...textBoxPassThrough }
                bordered={false}
            />
            { RightIcon && <RightIcon /> }
        </Wrapper>
    );
};

TextField.defaultProps = {
    LeftIcon: null,
    RightIcon: null,
    variant: 'primary',
};

TextField.propTypes = {
    LeftIcon: element,
    RightIcon: element,
    variant: oneOf([ 'primary', 'secondary', 'tertiary' ]),
};

export default TextField;
