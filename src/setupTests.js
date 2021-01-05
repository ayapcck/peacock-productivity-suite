jest.mock('./config/firebase', () => {
    class firebase {
        constructor() {
            this.auth = {
                onAuthStateChanged: () => jest.fn(),
            };
        }

        // Auth API
        createUserWithEmailAndPassword = () => jest.fn();
        sendPasswordResetEmail = () => jest.fn();
        signInWithEmailAndPassword = () => jest.fn();
        signOut = () => jest.fn();
        updatePassword = () => jest.fn();

        // User API
        role = () => jest.fn();
        roles = () => jest.fn();
        user = () => jest.fn();
        users = () => jest.fn();

        getRole = () => jest.fn();
        getUser = () => jest.fn();
    }
    return new firebase();
});

// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
