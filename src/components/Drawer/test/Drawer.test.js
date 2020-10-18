import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router';
import { createMemoryHistory } from 'history';

import { addIcons } from '../../../config/fontawesome';
import Drawer from '..';

let Container;

beforeAll(() => {
    addIcons();

    const history = createMemoryHistory();
    Container = () => (
        <MemoryRouter history={history} initialEntries={[ '/' ]}>
            <Drawer />
        </MemoryRouter>
    );
});

describe('Drawer', () => {
    it('should render without crashing', () => {
        const div = document.createElement('div');

        ReactDOM.render(<Container />, div);
    });
    it('should match snapshot', () => {
        const tree = renderer
            .create(<Container />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});
