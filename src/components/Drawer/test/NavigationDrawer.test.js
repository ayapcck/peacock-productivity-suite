import React from 'react';
import renderer from 'react-test-renderer';
import { Router } from 'react-router';
import { createMemoryHistory } from 'history';
import {
    mount,
    shallow,
} from 'enzyme';

import NavigationDrawer from '..';
import { addIcons } from '../../../config/fontawesome';
import { withDarkTheme } from '../../../logics';

let Container;

const ThemedNavigation = withDarkTheme(NavigationDrawer);

beforeAll(() => {
    addIcons();

    const history = createMemoryHistory();
    Container = () => (
        <Router
            history={history}
            initialEntries={[ '/' ]}
        >
            <ThemedNavigation />
        </Router>
    );
});

describe('NavigationDrawer', () => {
    it('should shallowly render without crashing', () => {
        shallow(<ThemedNavigation />);
    });
    it('should render without crashing', () => {

        mount(<Container />);
    });
    it('should match snapshot', () => {
        const tree = renderer
            .create(<Container />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});
