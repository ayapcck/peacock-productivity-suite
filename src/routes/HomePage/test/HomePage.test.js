import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import HomePage from '..';

describe('HomePage', () => {
    it('should render without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<HomePage />, div);
    });
    it('should match snapshot', () => {
        const tree = renderer
            .create(<HomePage />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});
