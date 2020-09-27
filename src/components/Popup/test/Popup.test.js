import React from 'react';
import ReactDOM from 'react-dom';

import { addIcons } from '../../../config/fontawesome';
import Popup from '..';

beforeAll(() => {
    addIcons();
});

describe('Popup', () => {
    it('should render without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Popup />, div);
    });
});
