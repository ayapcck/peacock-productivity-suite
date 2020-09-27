import React from 'react';
import ReactDOM from 'react-dom';

import DefaultForm from '..';

describe('DefaultForm', () => {
    it('should render without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<DefaultForm />, div);
    });
});
