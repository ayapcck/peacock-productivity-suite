import React from 'react';
import ReactDOM from 'react-dom';

import TextBox from '..';

describe('TextBox', () => {
    it('should render without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<TextBox />, div);
    });
});
