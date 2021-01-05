import React, {
    useState,
} from 'react';
import {
    useDispatch,
} from 'react-redux';
import {
    func,
    string,
} from 'prop-types';

import {
    AUTHENTICATION_FORMS,
} from '../../../constants';
import {
    closeAuthentication,
} from '../../../redux';

import {
    Text,
    Wrapper,
} from '../../atoms';
import {
    Link,
} from '../../molecules';
import Form from '../Form';
import Popup from '../Popup';

const NavText = (props) => {
    const {
        link,
        main,
        onClick,
    } = props;

    return (
        <Wrapper
            flexDirection="row"
            justify="center"
        >
            <Text>
                { main }
                <Link
                    onClick={onClick}
                    text={link}
                />
            </Text>
        </Wrapper>
    );
};

NavText.propTypes = {
    link: string.isRequired,
    main: string.isRequired,
    onClick: func.isRequired,
};

const Authentication = () => {
    const dispatch = useDispatch();
    const closeAuth = () => dispatch(closeAuthentication());

    const [ displayedFormName, setDisplayedFormName ] = useState('LOGIN');

    const {
        navTexts,
        submitAction,
        ...displayedForm
    } = AUTHENTICATION_FORMS[displayedFormName];

    const handleSubmit = values => dispatch(submitAction(values));

    return (
        <Popup handleClose={closeAuth}>
            <Wrapper
                flexDirection="column"
                justify="center"
            >
                <Form
                    { ...displayedForm }
                    onSubmit={handleSubmit}
                />
                {
                    navTexts && navTexts.map((text, i) => {
                        const {
                            destination,
                            ...rest
                        } = text;

                        return (
                            <NavText
                                { ...rest }
                                key={i}
                                onClick={() => setDisplayedFormName(destination)}
                            />
                        );
                    })
                }
            </Wrapper>
        </Popup>
    );
};

Authentication.defaultProps = {
};

Authentication.propTypes = {
};

export default Authentication;
