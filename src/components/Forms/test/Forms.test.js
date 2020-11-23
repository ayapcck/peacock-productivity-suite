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

// describe('ChangePasswordForm', () => {
//     it('should render without crashing', () => {
//         const div = document.createElement('div');
//         ReactDOM.render(<ChangePasswordForm />, div);
//     });
//     it('should match snapshot', () => {
//         const tree = renderer
//             .create(<ChangePasswordForm />)
//             .toJSON();
//         expect(tree).toMatchSnapshot();
//     });
// });

// describe('ForgotForm', () => {
//     it('should render without crashing', () => {
//         const div = document.createElement('div');
//         ReactDOM.render(<ForgotForm />, div);
//     });
//     it('should match snapshot', () => {
//         const tree = renderer
//             .create(<ForgotForm />)
//             .toJSON();
//         expect(tree).toMatchSnapshot();
//     });
// });

// describe('LoginForm', () => {
//     it('should render without crashing', () => {
//         const div = document.createElement('div');
//         ReactDOM.render(<LoginForm />, div);
//     });
//     it('should match snapshot', () => {
//         const tree = renderer
//             .create(<LoginForm />)
//             .toJSON();
//         expect(tree).toMatchSnapshot();
//     });
// });

// describe('RegisterForm', () => {
//     it('should render without crashing', () => {
//         const div = document.createElement('div');
//         ReactDOM.render(<RegisterForm />, div);
//     });
//     it('should match snapshot', () => {
//         const tree = renderer
//             .create(<RegisterForm />)
//             .toJSON();
//         expect(tree).toMatchSnapshot();
//     });
// });
