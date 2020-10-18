import React from 'react';
import renderer from 'react-test-renderer';
import {
    mount,
    shallow,
} from 'enzyme';

import { addIcons } from '../../../config/fontawesome';
import AuthControl from '..';

beforeAll(() => {
    addIcons();
});

describe('AuthControl', () => {
    it('should render without crashing', () => {
        shallow(<AuthControl />);
    });
    it('should match snapshot', () => {
        const tree = renderer
            .create(<AuthControl />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('should be able to view Change Password view', () => {
        const wrapper = mount(<AuthControl useChangePasswordForm={true} />);
        expect(wrapper.find('h2').text()).toEqual('Change Password');
    });
    it('should be able to get to Forgot Password view', () => {
        const wrapper = mount(<AuthControl />);
        expect(wrapper.find('h2').text()).toEqual('Log In');
        // Forgot password link is first
        wrapper.find('.AuthControl_ChangeFormLink').at(0).simulate('click');
        expect(wrapper.find('h2').text()).toEqual('Forgot Password');
    });
    it('should be able to get to Register view', () => {
        const wrapper = mount(<AuthControl />);
        expect(wrapper.find('h2').text()).toEqual('Log In');
        // Register link is second
        wrapper.find('.AuthControl_ChangeFormLink').at(2).simulate('click');
        expect(wrapper.find('h2').text()).toEqual('Register');
    });
});
