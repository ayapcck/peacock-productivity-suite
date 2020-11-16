import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import Landing from '.';

describe('Landing', () => {
    it('should render without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Landing />, div);
    });
    it('should match snapshot', () => {
        const tree = renderer
            .create(<Landing />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});
