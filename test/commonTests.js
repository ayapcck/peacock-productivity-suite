jest.mock('../src/config/firebase', () => {
    class firebase {
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

import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import configureMockStore from 'redux-mock-store';
import {
    mount,
    shallow,
} from 'enzyme';

import { addIcons } from '../src/config/fontawesome';
import {
    withDarkTheme,
} from '../src/logics';

const initialStore = {
    authentication: {
        loading: false,
    },
};

const runCommonTests = (Component) => {
    const {
        name,
    } = Component;

    const mockStore = configureMockStore([]);

    const WrappedComponent = props => (
        <Provider store={mockStore(initialStore)}>
            <Component { ...props } />
        </Provider>
    );

    const ThemedComponent = withDarkTheme(WrappedComponent);

    beforeAll(() => {
        addIcons();
    });

    describe(`${name} - Common Tests`, () => {
        it('should shallowly render without crashing', () => {
            shallow(<WrappedComponent />);
        });
        it('should render without crashing', () => {
            mount(<ThemedComponent />);
        });
        it('should match snapshot', () => {
            const tree = renderer
                .create(<ThemedComponent />)
                .toJSON();
            expect(tree).toMatchSnapshot();
        });
    });
};

export default runCommonTests;
