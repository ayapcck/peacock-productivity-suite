import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import {
    mount,
    shallow,
} from 'enzyme';

import { addIcons } from '../src/config/fontawesome';
import {
    withDarkTheme,
} from '../src/logics';
import store from '../src/redux';

const runCommonTests = (Component) => {
    const {
        name,
    } = Component;

    const WrappedComponent = props => (
        <Provider store={store}>
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
