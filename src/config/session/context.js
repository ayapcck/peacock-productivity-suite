import React from 'react';

const AuthUserContext = React.createContext({
    user: null,
    userPermissions: null,
});

export const withAuthConsumer = Component => props => (
    <AuthUserContext.Consumer>
        {
            auth => (
                <Component
                    {...props}
                    auth={auth}
                />
            )
        }
    </AuthUserContext.Consumer>
);

export default AuthUserContext;
