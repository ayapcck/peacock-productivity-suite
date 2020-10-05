import React from 'react';

import DefaultForm from '../DefaultForm';
import Forms from './constants';

/** These seem to only be used for Storybook */
export const ChangePasswordForm = () => <DefaultForm form={Forms.ChangePassword} />;
export const ForgotForm = () => <DefaultForm form={Forms.Forgot} />;
export const LoginForm = () => <DefaultForm form={Forms.Login} />;
export const RegisterForm = () => <DefaultForm form={Forms.Register} />;
