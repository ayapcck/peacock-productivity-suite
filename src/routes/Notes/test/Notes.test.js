import React from 'react';
import renderer from 'react-test-renderer';
import { mount, shallow } from 'enzyme';

import Notes from '..';

describe('Notes', () => {
    it('should shallowly render without crashing', () => {
        shallow(<Notes />);
    });
    it('should render without crashing', () => {
        mount(<Notes />);
    });
    it('should match snapshot', () => {
        const tree = renderer
            .create(<Notes />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});
