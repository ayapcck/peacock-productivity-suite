import React from 'react';
import ReactDOM from 'react-dom';

import { addIcons } from '../../../../config/fontawesome';
import Icon from '..';

beforeAll(() => {
    addIcons();
});

describe('Icon', () => {
    it('should render without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Icon />, div);
    });
});
