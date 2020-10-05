import React from 'react';
import {
    func,
    shape
} from 'prop-types';

import { AuthUserContext } from './';
import { withFirebase } from '../firebase';

const withAuthProvider = Component => {
    class WithAuthProvider extends React.Component {
        constructor(props) {
            super(props);

            this.state = { authUser: null };
        }

        componentDidMount() {
            this.listener = this.props.firebase.auth.onAuthStateChanged(
                authUser => {
                    authUser
                        ? this.setState({ authUser })
                        : this.setState({ authUser: null });
                }
            );
        }

        componentWillUnmount() {
            this.listener();
        }
        
        render() {
            return (
                <AuthUserContext.Provider value={this.state.authUser}>
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
