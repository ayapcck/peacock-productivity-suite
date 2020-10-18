import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import TextBox from '..';

describe('TextBox', () => {
    it('should render without crashing', () => {
        shallow(<TextBox />);
    });
    it('should match snapshot', () => {
        const tree = renderer
            .create(<TextBox />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});
