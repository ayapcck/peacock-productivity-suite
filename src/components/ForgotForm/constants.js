import _ from 'lodash';

import { 
    emailValid
} from '../../utilities/validation';

export const ForgotPasswordElements = {
    email: {
        initial: '',
        isValid: emailValid,
        name: 'email',
        placeHolder: 'Email',
        type: 'text'
    }
};

export const InitialState = _.mapValues(ForgotPasswordElements, 'initial');