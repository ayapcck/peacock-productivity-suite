import React, {
    useState,
} from 'react';
import {
    func,
} from 'prop-types';

import {
    AUTHENTICATION_FORMS,
} from '../../../constants';

import {
    Text,
    Wrapper,
} from '../../atoms';
import {
    Form,
    Popup,
} from '../../molecules';

const Authentication = (props) => {
    const {
        handleClose,
    } = props;

    // eslint-disable-next-line no-unused-vars
    const [ displayedFormName, setDisplayedFormName ] = useState('LOGIN');

    const displayedForm = AUTHENTICATION_FORMS[displayedFormName];

    return (
        <Popup handleClose={handleClose}>
            <Wrapper
                flexDirection="column"
                justify="center"
            >
                <Form { ...displayedForm } />
                <Text align="center">
                    Testing this text
                </Text>
            </Wrapper>
        </Popup>
    );
};

Authentication.defaultProps = {
    handleClose: () => null,
};

Authentication.propTypes = {
    handleClose: func,
};

export default Authentication;
