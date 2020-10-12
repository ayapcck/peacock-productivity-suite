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
    role: 'guest',
};
const INITIAL_USER_PERMISSIONS = {
    administrator: false,
};

const getPermissions = async (firebase, role) => {
    return firebase.role(role)
        .once('value')
        .then(res => {
            const val = res.val();
            if (val) {
                return ({ ...val });
            }
        });
};
const getUser = async (firebase, uid) => {
    return firebase.user(uid)
        .once('value')
        .then(res => {
            const val = res.val();
            if (val) {
                return ({ ...val });
            }
        });
};

const withAuthProvider = Component => {
    class WithAuthProvider extends React.Component {
        constructor(props) {
            super(props);

            this.state = { 
                user: { ...INITIAL_USER },
                userPermissions: { ...INITIAL_USER_PERMISSIONS },
            };
        }

        componentDidMount() {
            const { firebase } = this.props;

            this.listener = firebase.auth.onAuthStateChanged(async authUser => {
                if (authUser) {
                    const userID = authUser.uid;
                    const user = await getUser(firebase, userID);
                    const userPermissions = await getPermissions(firebase, user.role);
                    this.setState({ user, userPermissions });
                } else {
                    const guestPermissions = await getPermissions(firebase, 'guest');
                    this.setState({ 
                        user: { ...INITIAL_USER },
                        userPermissions: { ...guestPermissions },
                    });
                }
            });
        }

        componentWillUnmount() {
            this.listener();
        }
        
        render() {
            const { user, userPermissions } = this.state;
            
            const auth = { user, userPermissions };

            return (
                <AuthUserContext.Provider value={auth}>
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
