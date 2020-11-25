import {
    ChangePasswordForm,
    ForgotForm,
    LoginForm,
    RegisterForm,
} from '..';
import runCommonTests from '../../../../test/commonTests';

const forms = [
    ChangePasswordForm,
    ForgotForm,
    LoginForm,
    RegisterForm,
];

forms.forEach((form) => runCommonTests(form));
