import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import { addIcons } from '../../../config/fontawesome';
import Popup from '..';

beforeAll(() => {
    addIcons();
});

describe('Popup', () => {
    it('should render without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Popup />, div);
    });
    it('should match snapshot', () => {
        const tree = renderer
            .create(<Popup />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});
