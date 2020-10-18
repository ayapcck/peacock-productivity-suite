import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import AdminPanelPage from '..';

describe('AdminPanelPage', () => {
    it('should render without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<AdminPanelPage />, div);
    });
    it('should match snapshot', () => {
        const tree = renderer
            .create(<AdminPanelPage />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});
