import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import Button from '..';

describe('Button', () => {
    it('should render without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Button />, div);
    });
    it('should match snapshot', () => {
        const tree = renderer
            .create(<Button />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});
