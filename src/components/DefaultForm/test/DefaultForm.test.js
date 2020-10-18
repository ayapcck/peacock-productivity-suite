import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import DefaultForm from '..';

describe('DefaultForm', () => {
    it('should render without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<DefaultForm />, div);
    });
    it('should match snapshot', () => {
        const tree = renderer
            .create(<DefaultForm />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});
