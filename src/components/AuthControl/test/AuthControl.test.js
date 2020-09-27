import React from 'react';
import ReactDOM from 'react-dom';

import { addIcons } from '../../../config/fontawesome';
import AuthControl from '..';

beforeAll(() => {
    addIcons();
});

describe('AuthControl', () => {
    it('should render without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<AuthControl />, div);
    });
});
