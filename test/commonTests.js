import React from 'react';
import renderer from 'react-test-renderer';
import {
    mount,
    shallow,
} from 'enzyme';

import {
    withDarkTheme,
} from '../src/context';

const runCommonTests = (Component) => {
    const {
        name,
    } = Component;
    const ThemedComponent = withDarkTheme(Component);

    describe(`${name} - Common Tests`, () => {
        it('should shallowly render without crashing', () => {
            shallow(<Component />);
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
