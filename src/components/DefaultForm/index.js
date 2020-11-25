import React, { Component } from 'react';

import {
    func,
    object,
    shape,
    string,
} from 'prop-types';
import styled from 'styled-components';
import _ from 'lodash';

import {
    Button,
    Text,
    TextBox,
} from '../atoms';
import { withFirebase } from '../../config/firebase';

const StyledDefaultForm = styled.form`
    display: flex;
    flex-direction: column;
    padding: 10px;
`;

const getInitialState = (elements) => _.mapValues(elements, 'initial');

class DefaultForm extends Component {
    constructor(props) {
        super(props);
        
        const { elements } = this.props.form;
        const initialState = getInitialState(elements);

        this.state = { ...initialState };
    }

    onChange = ev => {
        this.setState({ [ev.target.name]: ev.target.value });
    }

    onSubmit = ev => {
        const { firebase, form } = this.props;
        const { email, name, password='' } = this.state;
        const { andThen, elements, onSubmit } = form;

        const initialState = getInitialState(elements);

        const andThenProps = {
            email,
            firebase,
            name,
        };
        const onSubmitProps = {
            email,
            firebase,
            password,
        };

        ev.preventDefault();
        onSubmit(onSubmitProps)
            .then(authUser => andThen({ ...andThenProps,
                authUser }))
            .then(() => {
                this.setState({ ...initialState });
            })
            .catch(error => {
                this.setState({ error });
            });
    }

    _renderFormElements = () => {
        const {
            form: {
                elements,
                keyPrefix,
            },
        } = this.props;

        return _.map(_.keys(elements), (key, index) => {
            const element = elements[key];
            return (
                <TextBox
                    key={`${keyPrefix}${index}`}
                    valid={elementIsValid(element, this.state)}
                    name={element.name}
                    handleChange={this.onChange}
                    placeHolder={element.placeHolder}
                    type={element.type}
                />
            );
        });
    };

    _renderTitle = () => {
        const { form: { title } } = this.props;

        return (
            <Text
                align="center"
                size="medium"
                text={title}
                type="title"
            />
        );
    }
    
    render() {
        return (
            <StyledDefaultForm onSubmit={this.onSubmit}>
                { this._renderTitle() }
                { this._renderFormElements() }
                <Button type="submit" />
            </StyledDefaultForm>
        );
    }
}

const elementIsValid = (element, values) => {
    const value = values[element.name];
    const passwordsMatch = values['password'] === values['confirmPassword'];
    const empty = value === '';
    return element.name === 'confirmPassword' 
        ? passwordsMatch
        : empty || element.isValid(value);
};

DefaultForm.defaultProps = {
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

DefaultForm.propTypes = {
    firebase: object,
    form: shape({
        elements: object,
        InitialState: object,
        keyPrefix: string,
        onSubmit: func,
        title: string,
    }).isRequired,
    title: string,
};

export default withFirebase(DefaultForm);
