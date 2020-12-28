import React from 'react';
import {
    arrayOf,
    shape,
    string,
} from 'prop-types';

import {
    StyledForm,
} from '../../styled-elements';

import {
    Button,
    Text,
    TextBox,
} from '../../atoms';

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
        textFields,
        title,
    } = props;

    const _renderTextFields = () => textFields.map((field, i) => (
        <TextBox
            { ...field }
            key={i}
        />
    ));

    return (
        <StyledForm>
            <Title text={title} />
            { _renderTextFields() }
            <Button type="submit" />
        </StyledForm>
    );
};

Form.defaultProps = {
    textFields: [
        {
            name: 'Test',
            placeHolder: 'Placeholder',
        },
    ],
    title: 'Default',
};

Form.propTypes = {
    textFields: arrayOf(
        shape({
            name: string,
            placeHolder: string,
        })
    ),
    title: string,
};

export default Form;
