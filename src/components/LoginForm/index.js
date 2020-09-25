import React, { Component } from 'react';
import _ from 'lodash';

import DefaultForm from '../DefaultForm';
import { InitialState, LoginElements } from './constants';
import TextBox from '../subcomponents/TextBox';
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
                onSubmit={this.handleLogin}
                title="Log In"
            >
                { renderFormElements(this.onChange) }
            </DefaultForm>
        );
    };
}

const renderFormElements = (onChange) => {
    return _.map(_.keys(LoginElements), (key, index) => {
        const element = LoginElements[key];
        return (
            <TextBox
                key={`loginBox${index}`}
                isValid={element.isValid}
                name={element.name}
                handleChange={onChange}
                placeHolder={element.placeHolder}
                type={element.type}
            />
        );
    });
};

const LoginForm = withFirebase(LoginFormBase);

export default LoginForm;
