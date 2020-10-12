import React from 'react';
import {
    func,
    shape,
} from 'prop-types';

import { AuthUserContext } from './';
import { withFirebase } from '../firebase';

const INITIAL_USER = {
    email: '',
    name: '',
    role: 'user',
};

const withAuthProvider = Component => {
    class WithAuthProvider extends React.Component {
        constructor(props) {
            super(props);

            this.state = { user: { ...INITIAL_USER } };
        }

        componentDidMount() {
            const { firebase } = this.props;

            this.listener = firebase.auth.onAuthStateChanged(
                authUser => {
                    if ( authUser ) {   
                        firebase.user(authUser.uid)
                            .once('value')
                            .then(res => {
                                const val = res.val();
                                if (val) {
                                    const user = {
                                        email: val.email,
                                        name: val.name,
                                        role: val.role,
                                    };
                                    this.setState({
                                        user: { ...user },
                                    });
                                }
                            });
                    } else {
                        this.setState({ ...INITIAL_USER });
                    }
                }
            );
        }

        componentWillUnmount() {
            this.listener();
        }
        
        render() {
            return (
                <AuthUserContext.Provider value={this.state.user}>
                    <Component {...this.props} />
                </AuthUserContext.Provider>
            );
        }
    } 

    WithAuthProvider.propTypes = {
        firebase: shape({
            auth: shape({
                onAuthStateChanged: func,
            }),
        }),
    };

    return withFirebase(WithAuthProvider);
};

export default withAuthProvider;
