import React, {
    useState,
} from 'react';
import {
    useDispatch,
} from 'react-redux';
// import {
//
// } from 'prop-types';

import {
    AUTHENTICATION_FORMS,
} from '../../../constants';
import {
    closeAuthentication,
    loginUser,
} from '../../../redux';

import {
    Text,
    Wrapper,
} from '../../atoms';
import {
    Form,
    Popup,
} from '../../molecules';

const Authentication = () => {
    const dispatch = useDispatch();
    const login = (user, password) => dispatch(loginUser({ user, password }));
    const closeAuth = () => dispatch(closeAuthentication());

    // eslint-disable-next-line no-unused-vars
    const [ displayedFormName, setDisplayedFormName ] = useState('LOGIN');

    const displayedForm = AUTHENTICATION_FORMS[displayedFormName];

    return (
        <Popup handleClose={closeAuth}>
            <Wrapper
                flexDirection="column"
                justify="center"
            >
                <Form
                    { ...displayedForm }
                    onSubmit={() => login('testUser', 'testPassword')}
                />
                <Text align="center">
                    Testing this text
                </Text>
            </Wrapper>
        </Popup>
    );
};

Authentication.defaultProps = {
};

Authentication.propTypes = {
};

export default Authentication;
