import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import { addIcons } from '../../../config/fontawesome';
import Popup from '..';

beforeAll(() => {
    addIcons();
});

describe('Popup', () => {
    it('should render without crashing', () => {
        shallow(<Popup />);
    });
    it('should match snapshot', () => {
        const tree = renderer
            .create(<Popup />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});
