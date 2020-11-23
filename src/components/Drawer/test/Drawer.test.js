import React from 'react';
import renderer from 'react-test-renderer';
import { Router } from 'react-router';
import { createMemoryHistory } from 'history';
import {
    mount,
    shallow,
} from 'enzyme';

import { addIcons } from '../../../config/fontawesome';
import Drawer from '..';

let Container;

beforeAll(() => {
    addIcons();

    const history = createMemoryHistory();
    Container = () => (
        <Router history={history} initialEntries={[ '/' ]}>
            <Drawer />
        </Router>
    );
});

describe('Drawer', () => {
    it('should shallowly render without crashing', () => {
        shallow(<Drawer />);
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
