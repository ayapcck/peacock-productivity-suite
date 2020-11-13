import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import Home from '.';

describe('Home', () => {
    it('should render without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Home />, div);
    });
    it('should match snapshot', () => {
        const tree = renderer
            .create(<Home />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});
