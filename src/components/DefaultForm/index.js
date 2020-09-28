import React from 'react';

import PropTypes from 'prop-types';
import styled from 'styled-components';
import _ from 'lodash';

import Button from '../subcomponents/Button';
import TextBox from '../subcomponents/TextBox';

const StyledDefaultForm = styled.form`
    display: flex;
    flex-direction: column;
    padding: 10px;
`;

const Title = styled.h2`
    color: ${({ theme }) => theme.textColor};
    text-align: center;
`;

const DefaultForm = (props) => {
    const {
        elements,
        keyPrefix,
        onChange,
        onSubmit,
        title,
        values
    } = props;
    
    return (
        <StyledDefaultForm onSubmit={onSubmit}>
            <Title>{title}</Title>
            {renderFormElements(elements, keyPrefix, onChange, values)}
            <Button type="submit" />
        </StyledDefaultForm>
    );
};

const renderFormElements = (elements, keyPrefix, onChange, values) => {
    return _.map(_.keys(elements), (key, index) => {
        const element = elements[key];
        return (
            <TextBox
                key={`${keyPrefix}${index}`}
                valid={elementIsValid(element, values)}
                name={element.name}
                handleChange={onChange}
                placeHolder={element.placeHolder}
                type={element.type}
            />
        );
    });
};

const elementIsValid = (element, values) => {
    const value = values[element.name];
    const passwordsMatch = values['password'] === values['confirmPassword'];
    const empty = value === '';
    return element.name === 'confirmPassword' 
        ? passwordsMatch
        : empty || element.isValid(value);
};

DefaultForm.defaultProps = {
    title: 'Title'
};

DefaultForm.propTypes = {
    title: PropTypes.string
};

export default DefaultForm;
