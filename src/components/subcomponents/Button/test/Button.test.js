import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import Button from '..';

describe('Button', () => {
    it('should render without crashing', () => {
        shallow(<Button />);
    });
    it('should match snapshot', () => {
        const tree = renderer
            .create(<Button />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});
