import React, { Component } from 'react';

import DefaultForm from '../DefaultForm';
import { InitialState, ForgotPasswordElements } from './constants';
import { withFirebase } from '../../config/firebase';

class ForgotFormBase extends Component {
    constructor(props) {
        super(props);

        this.state = { ...InitialState };
    }

    handleForgotPassword = ev => {
        const { firebase } = this.props;
        const { email } = this.state;

        ev.preventDefault();
        firebase.sendPasswordResetEmail(email)
            .then(() => {
                this.setState({ ...InitialState });
            })
            .catch(error => {
                this.setState({ error });
            });
    }

    onChange = ev => {
        this.setState({ [ev.target.name]: ev.target.value });
    }

    render() {
        return (
            <DefaultForm
                elements={ForgotPasswordElements}
                keyPrefix="forgotBox"
                onChange={this.onChange}
                onSubmit={this.handleForgotPassword}
                title="Forgot Password"
                values={this.state}
            />
        );
    }
}

const ForgotForm = withFirebase(ForgotFormBase);

export default ForgotForm;
