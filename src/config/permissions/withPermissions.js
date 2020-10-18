import React from 'react';
import {
    func,
    object,
    shape,
} from 'prop-types';

import hasPermissions from './roles';
import ROUTES from '../../constants/routes';
import { withAuthConsumer } from '../session';
import { withFirebase } from '../firebase';

const withPermissions = permissions => Component => {
    class WithPermissions extends React.Component {
        componentDidMount() {
            const { firebase, history } = this.props;
            
            this.listener = !!firebase && firebase.auth.onAuthStateChanged(
                authUser => {
                    const userPermissions = authUser && this.props.auth.userPermissions;
                    if (!(userPermissions && hasPermissions(permissions, userPermissions))) {
                        history.push(ROUTES.LANDING.route);
                    }
                }
            );
        }

        componentWillUnmount() {
            !!this.props.firebase && this.listener();
        }

        render() {
            return (
                <Component {...this.props} />
            );
        }
    }

    WithPermissions.propTypes = {
        auth: shape({
            userPermissions: object,
        }),
        firebase: shape({
            auth: shape({
                onAuthStateChanged: func,
            }),
        }),
        history: shape({
            push: func,
        }),
    };

    return withAuthConsumer(withFirebase(WithPermissions));
};

export default withPermissions;
