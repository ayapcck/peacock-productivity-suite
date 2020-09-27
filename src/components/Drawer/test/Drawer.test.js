import React from 'react';
import ReactDOM from 'react-dom';

import { addIcons } from '../../../config/fontawesome';
import Drawer from '..';

beforeAll(() => {
    addIcons();
});

describe('Drawer', () => {
    it('should render without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Drawer />, div);
    });
});
