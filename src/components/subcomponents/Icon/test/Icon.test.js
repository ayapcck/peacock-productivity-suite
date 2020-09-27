import React from 'react';
import ReactDOM from 'react-dom';

import Icon from '..';

describe('Icon', () => {
    it('should render without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Icon />, div);
    });
});
