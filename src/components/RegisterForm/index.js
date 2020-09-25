import React, { Component } from 'react';

import DefaultForm from '../DefaultForm';
import { InitialState, RegisterElements } from './constants';
import TextBox from '../subcomponents/TextBox';
import { withFirebase } from '../../config/firebase';

class RegisterFormBase extends  Component {
    constructor(props) {
        super(props);

        this.state = { ...InitialState };
    }

    handleRegister = ev => {
        const { firebase } = this.props;
        const { email, password, confirmPassword } = this.state;
        
        ev.preventDefault();
        firebase.createUserWithEmailAndPassword(email, password === confirmPassword && password)
            .then(() => {
                console.log("test");
            })
    }

    onChange = ev => {
        this.setState({ [ev.target.name]: ev.target.value });
    }

    render() {
        const {
            confirmPassword,
            password
        } = this.state;

        return (
            <DefaultForm 
                onSubmit={this.handleRegister}
                title="Register"
            >
                { renderFormElements(this.onChange, password === confirmPassword) }
            </DefaultForm>
        );
    }
};

const renderFormElements = (onChange, passwordsMatch) => {
    return Object.keys(RegisterElements).map((key, index) => {
        const element = RegisterElements[key];
        return (
            <TextBox
                key={`regBox${index}`}
                isValid={element.name === 'confirmPassword' 
                    ? () => passwordsMatch
                    : element.isValid}
                name={element.name}
                handleChange={onChange}
                placeHolder={element.placeHolder}
                type={element.type}
            />
        );
    });
};

const RegisterForm = withFirebase(RegisterFormBase);

export default RegisterForm;
