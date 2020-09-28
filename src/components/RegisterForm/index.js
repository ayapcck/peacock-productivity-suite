import React, { Component } from 'react';

import DefaultForm from '../DefaultForm';
import { InitialState, RegisterElements } from './constants';
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
        return (
            <DefaultForm 
                elements={RegisterElements}
                keyPrefix="regBox"
                onChange={this.onChange}
                onSubmit={this.handleRegister}
                title="Register"
                values={this.state}
            />
        );
    }
};

const RegisterForm = withFirebase(RegisterFormBase);

export default RegisterForm;
