import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import TextBox from '..';

describe('TextBox', () => {
    it('should render without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<TextBox />, div);
    });
    it('should match snapshot', () => {
        const tree = renderer
            .create(<TextBox />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});
