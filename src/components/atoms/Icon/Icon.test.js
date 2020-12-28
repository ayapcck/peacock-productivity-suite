import React from 'react';
import { mount } from 'enzyme';

import Icon from './Icon';
import { withDarkTheme } from '../../../context';
import runCommonTests from '../../../../test/commonTests';

runCommonTests(Icon);

const ThemedIcon = withDarkTheme(Icon);

describe('Icon - Unique Tests', () => {
    it('should not crash with default onClick', () => {
        const wrapper = mount(<div><ThemedIcon /></div>);
        wrapper.find(Icon).simulate('click');
    });
    it('should be clickable with custom onClick', () => {
        let testVal = 0;
        const increment = () => testVal += 1;
        const wrapper = mount(<div><ThemedIcon onClick={increment} /></div>);
        expect(testVal).toEqual(0);
        wrapper.find(Icon).simulate('click');
        expect(testVal).toEqual(1);
    });
});
