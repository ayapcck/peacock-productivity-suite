import React, {
    useEffect,
} from 'react';
import {
    useSelector,
} from 'react-redux';
import { useHistory } from 'react-router-dom';

import hasPermissions from './roles';
import ROUTES from '../../constants/routes';
import firebase from '../firebase';

const withPermissions = permissions => Component => props => {
    const history = useHistory();
    const userPermissions = useSelector(state => state.authentication.permissions);

    useEffect(() => firebase.auth.onAuthStateChanged(() => {
        if (!(hasPermissions(permissions, userPermissions))) {
            history.push(ROUTES.LANDING.route);
        }
    }));

    return (
        <Component { ...props } />
    );
};

export default withPermissions;
