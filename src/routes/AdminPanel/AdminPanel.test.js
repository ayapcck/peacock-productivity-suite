import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import AdminPanel from '.';

describe('AdminPanel', () => {
    it('should render without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<AdminPanel />, div);
    });
    it('should match snapshot', () => {
        const tree = renderer
            .create(<AdminPanel />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});
