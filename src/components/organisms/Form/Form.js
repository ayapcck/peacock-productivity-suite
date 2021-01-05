import React from 'react';
import {
    arrayOf,
    func,
    shape,
    string,
} from 'prop-types';
import reduce from 'lodash/reduce';

import {
    StyledForm,
} from '../../styled-elements';

import {
    Text,
} from '../../atoms';
import {
    LoadingButton,
    TextField,
} from '../../molecules';
import Password from '../Password';

const Title = ({ text }) => (
    <Text
        align="center"
        type="h1"
    >
        { text }
    </Text>
);
Title.defaultProps = {
    text: 'Default',
};
Title.propTypes = {
    text: string,
};

const Form = (props) => {
    const {
        onSubmit,
        textFields,
        title,
    } = props;

    const handleSubmit = event => {
        event.preventDefault();
        const values = reduce(
            event.target,
            (acc, element) => {
                const {
                    name,
                    nodeName,
                    value,
                } = element;
                nodeName === 'INPUT' && (acc[name] = value);
                return acc;
            },
            {}
        );
        onSubmit(values);
    };

    const _renderTextFields = () => textFields.map((field, i) => {
        const { name } = field;

        const isPassword = name.toLowerCase().includes('password');
        const Field = isPassword ? Password : TextField;

        return (
            <Field
                { ...field }
                key={i}
            />
        );
    });

    return (
        <StyledForm onSubmit={handleSubmit}>
            <Title text={title} />
            { _renderTextFields() }
            <LoadingButton />
        </StyledForm>
    );
};

Form.defaultProps = {
    onSubmit: () => null,
    textFields: [
        {
            name: 'Test',
            placeHolder: 'Placeholder',
        },
    ],
    title: 'Default',
};

Form.propTypes = {
    onSubmit: func,
    textFields: arrayOf(
        shape({
            name: string,
            placeHolder: string,
        })
    ),
    title: string,
};

export default Form;
