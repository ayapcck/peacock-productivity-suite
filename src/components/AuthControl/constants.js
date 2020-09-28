import React, { Fragment } from 'react';

import ForgotForm from '../ForgotForm';
import LoginForm from '../LoginForm';
import RegisterForm from '../RegisterForm';

export const Forms = {
    Forgot: <ForgotForm />,
    Login: <LoginForm />,
    // Login: {
    //     form: <LoginForm />,
    //     text: (
    //         <Fragment>
    //             <FormText
    //                 changeForm={changeForm}
    //                 destinationForm="Forgot"
    //                 text={forgotText}
    //             />
    //             <FormText
    //                 changeForm={changeForm}
    //                 destinationForm="Register"
    //                 text={noAccountText}
    //             />
    //         </Fragment>
    //     )
    // },
    Register: <RegisterForm />
};