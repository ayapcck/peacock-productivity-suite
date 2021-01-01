import React from 'react';
import {
    arrayOf,
    func,
    shape,
    string,
} from 'prop-types';

import {
    StyledForm,
} from '../../styled-elements';

import {
    Text,
    TextBox,
} from '../../atoms';
import LoadingButton from '../LoadingButton';

const Title = ({ text }) => (
    <Text
        align="center"
        size="large"
        type="title"
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
        onSubmit();
    };

    const _renderTextFields = () => textFields.map((field, i) => (
        <TextBox
            { ...field }
            key={i}
        />
    ));

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
