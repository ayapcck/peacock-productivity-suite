import React from 'react';
import renderer from 'react-test-renderer';
import { 
    mount,
    shallow,
} from 'enzyme';

import { addIcons } from '../../../../config/fontawesome';
import Icon from '..';

beforeAll(() => {
    addIcons();
});

describe('Icon', () => {
    it('should render without crashing', () => {
        shallow(<Icon />);
    });
    it('should match snapshot', () => {
        const tree = renderer
            .create(<Icon />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('should not crash with default onClick', () => {
        const wrapper = mount(<div><Icon /></div>);
        wrapper.find(Icon).simulate('click');
    });
    it('should be clickable with custom onClick', () => {
        let testVal = 0;
        const increment = () => testVal += 1;
        const wrapper = mount(<div><Icon onClick={increment} /></div>);
        expect(testVal).toEqual(0);
        wrapper.find(Icon).simulate('click');
        expect(testVal).toEqual(1);
    });
});
