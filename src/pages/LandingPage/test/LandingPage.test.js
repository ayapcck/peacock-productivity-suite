import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import LandingPage from '..';

describe('LandingPage', () => {
    it('should render without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<LandingPage />, div);
    });
    it('should match snapshot', () => {
        const tree = renderer
            .create(<LandingPage />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});
