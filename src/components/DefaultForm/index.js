import React, { Component } from 'react';

import {
    array,
    func,
    object,
    shape,
    string
} from 'prop-types';
import styled from 'styled-components';
import _ from 'lodash';

import Button from '../subcomponents/Button';
import TextBox from '../subcomponents/TextBox';
import { withFirebase } from '../../config/firebase';

const StyledDefaultForm = styled.form`
    display: flex;
    flex-direction: column;
    padding: 10px;
`;

const Title = styled.h2`
    color: ${({ theme }) => theme.textColor};
    text-align: center;
`;

class DefaultFormBase extends Component {
    constructor(props) {
        super(props);
        
        const { InitialState } = this.props.form;

        this.state = { ...InitialState };
    }

    onChange = ev => {
        this.setState({ [ev.target.name]: ev.target.value });
    }

    onSubmit = ev => {
        const { firebase, form } = this.props;
        const { email, password='' } = this.state;
        const { InitialState, onSubmit } = form;

        const props = {
            email,
            firebase,
            password,
        };

        ev.preventDefault();
        onSubmit(props)
            .then(() => {
                this.setState({ ... InitialState });
            })
            .catch(error => {
                this.setState({ error });
            });
    }
    
    render() {
        const { form } = this.props;
        const {
            elements,
            keyPrefix,
            title,
        } = form;

        return (
            <StyledDefaultForm onSubmit={this.onSubmit}>
                <Title>{title}</Title>
                {renderFormElements(elements, keyPrefix, this.onChange, this.state)}
                <Button type="submit" />
            </StyledDefaultForm>
        );
    }
}

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

DefaultFormBase.defaultProps = {
    form: {
        elements: {
            name: {
                initial: '',
                isValid: () => true,
                name: 'name',
                placeHolder: 'Name',
                type: 'text',
            },
        },
        title: 'Title',
    },
};

DefaultFormBase.propTypes = {
    firebase: object,
    form: shape({
        elements: array,
        InitialState: object,
        keyPrefix: string,
        onSubmit: func,
        title: string,
    }).isRequired,
    title: string,
};

const DefaultForm = withFirebase(DefaultFormBase);

export default DefaultForm;
