import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router';
import { createMemoryHistory } from 'history';

import { addIcons } from '../../../config/fontawesome';
import Drawer from '..';

beforeAll(() => {
    addIcons();
});

describe('Drawer', () => {
    it('should render without crashing', () => {
        const div = document.createElement('div');
        const history = createMemoryHistory();
        const container = <MemoryRouter history={history} initialEntries={[ '/' ]}>
            <Drawer />
        </MemoryRouter>;

        ReactDOM.render(container, div);
    });
});
