import React, { Component } from 'react';

import DefaultForm from '../DefaultForm';
import { InitialState, LoginElements } from './constants';
import { withFirebase } from '../../config/firebase';

class LoginFormBase extends Component {
    constructor(props) {
        super(props);

        this.state = { ...InitialState };
    }

    handleLogin = ev => {
        const { firebase } = this.props;
        const { email, password } = this.state;

        ev.preventDefault();
        firebase.signInWithEmailAndPassword(email, password)
            .then(() => {
                this.setState({ ...InitialState });
            })
            .catch(error => {
                this.setState({ error });
            })
    }

    onChange = ev => {
        this.setState({ [ev.target.name]: ev.target.value });
    }

    render() {
        return (
            <DefaultForm 
                elements={LoginElements}
                keyPrefix="loginBox"
                onChange={this.onChange}
                onSubmit={this.handleLogin}
                title="Log In"
                values={this.state}
            />
        );
    };
}

const LoginForm = withFirebase(LoginFormBase);

export default LoginForm;
