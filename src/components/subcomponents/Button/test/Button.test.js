import React from 'react';
import ReactDOM from 'react-dom';

import Button from '..';

describe('Button', () => {
    it('should render without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Button />, div);
    });
});
