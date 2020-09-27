import React from 'react';
import ReactDOM from 'react-dom';

import Popup from '..';

describe('Popup', () => {
    it('should render without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Popup />, div);
    });
});
