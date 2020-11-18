import React from 'react';
import renderer from 'react-test-renderer';
import { mount, shallow } from 'enzyme';

import Button from '.';

describe('Button', () => {
    it('should shallowly render without crashing', () => {
        shallow(<Button />);
    });
    it('should render without crashing', () => {
        mount(<Button />);
    });
    it('should match snapshot', () => {
        const tree = renderer
            .create(<Button />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});
