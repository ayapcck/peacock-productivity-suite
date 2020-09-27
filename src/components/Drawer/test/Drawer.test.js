import React from 'react';
import ReactDOM from 'react-dom';

import Drawer from '..';

describe('Drawer', () => {
    it('should render without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Drawer />, div);
    });
});
