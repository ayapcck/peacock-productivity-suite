import React from 'react';
import renderer from 'react-test-renderer';
import { mount, shallow } from 'enzyme';

import { addIcons } from '../../../config/fontawesome';
import Popup from '..';

beforeAll(() => {
    addIcons();
});

describe('Popup', () => {
    it('should shallowly render without crashing', () => {
        shallow(<Popup />);
    });
    it('should render without crashing', () => {
        mount(<Popup />);
    });
    it('should render without crashing in short mode', () => {
        mount(<Popup tall={false} />);
    });
    it('should match snapshot', () => {
        const tree = renderer
            .create(<Popup />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});
