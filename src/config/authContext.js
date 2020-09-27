import React from 'react';

const AuthContext = React.createContext(null);

export const withAuth = Component => props => (
    <AuthContext.Consumer>
        { authUser => <Component {...props} authUser={authUser} /> }
    </AuthContext.Consumer>
);

export default AuthContext;