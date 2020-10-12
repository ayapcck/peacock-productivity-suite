import React from 'react';
import ReactDOM from 'react-dom';

import AdminPanelPage from '..';

describe('AdminPanelPage', () => {
    it('should render without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<AdminPanelPage />, div);
    });
});
