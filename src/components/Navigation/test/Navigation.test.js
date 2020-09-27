import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router';

import Navigation from '..';

describe('Navigation', () => {
    it('should render without crashing', () => {
        const div = document.createElement('div');
        const Container = () => (
            <MemoryRouter initialEntries={['/']}>
                <Navigation />
            </MemoryRouter>
        );
        ReactDOM.render(<Container />, div);
    });
});
